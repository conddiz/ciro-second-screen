import fetch from 'node-fetch'
import axios from 'axios'
import qs from 'qs'
import { v4 as uuid } from 'uuid'
import { format } from 'date-fns'

import { S3Controller } from '@ciro/lib'

const saveLeadToS3 = async (lead, req) => {
    const formatDate = 'yyyy-MM-dd HH:mm:ss'
    const s3Controller = new S3Controller()

    const { rawHeaders, httpVersion, method, url } = req

    return new Promise((resolve, reject) => {
        s3Controller.uploadFile(
            `lead-${uuid(0)}`,
            JSON.stringify({
                ...lead,
                created_at: format(new Date(), formatDate),
                request: {
                    rawHeaders,
                    httpVersion,
                    method,
                    url,
                },
            }),
            (err, data) => {
                if (err) {
                    return reject(err)
                }

                return resolve(data)
            }
        )
    })
}

const getIBGEFromViaCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep
        .replace('.', '')
        .replace('-', '')}/json/`
    const { data } = await axios.get(url)
    return data.ibge
}

const findGroup = async (IBGE) => {
    const url = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/alianca-zonas`
    const params = {
        populate: {
            grupo: '*',
        },
        filters: {
            municipioId: {
                $eq: IBGE,
            },
        },
    }

    const { data } = await axios.get(url, {
        params,
        paramsSerializer: (p) => qs.stringify(p),
    })

    if (data.data.length > 0 && data.data[0].grupo) {
        return data.data[0].grupo
    }

    let group = await findGroupByMicroRegiao(data.data[0].microrregiaoId)
    if (group) return group

    group = await findGroupByMesoRegiao(data.data[0].mesorregiaoId)
    if (group) return group

    group = await findGroupByUf(data.data[0].ufId)
    if (group) return group

    group = await findGroupByRegiao(data.data[0].regiaoId)
    if (group) return group
}

const findGroupByMicroRegiao = async (microrregiaoId) => {
    const url = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/alianca-zonas`
    const params = {
        populate: {
            grupo: '*',
        },
        filters: {
            $and: [
                {
                    microrregiaoId: {
                        $eq: microrregiaoId,
                    },
                },
                {
                    municipioId: {
                        $null: true,
                    },
                },
            ],
        },
    }
    const { data } = await axios.get(url, {
        params,
        paramsSerializer: (p) => qs.stringify(p),
    })

    if (data.data.length > 0 && data.data[0].grupo) {
        return data.data[0].grupo
    }
}

const findGroupByMesoRegiao = async (mesorregiaoId) => {
    const url = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/alianca-zonas`
    const params = {
        populate: {
            grupo: '*',
        },
        filters: {
            $and: [
                {
                    mesorregiaoId: {
                        $eq: mesorregiaoId,
                    },
                },
                {
                    microrregiaoId: {
                        $null: true,
                    },
                },
            ],
        },
    }
    const { data } = await axios.get(url, {
        params,
        paramsSerializer: (p) => qs.stringify(p),
    })

    if (data.data.length > 0 && data.data[0].grupo) {
        return data.data[0].grupo
    }
}

const findGroupByUf = async (ufId) => {
    const url = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/alianca-zonas`
    const params = {
        populate: {
            grupo: '*',
        },
        filters: {
            $and: [
                {
                    ufId: {
                        $eq: ufId,
                    },
                },
                {
                    mesorregiaoId: {
                        $null: true,
                    },
                },
            ],
        },
    }
    const { data } = await axios.get(url, {
        params,
        paramsSerializer: (p) => qs.stringify(p),
    })

    if (data.data.length > 0 && data.data[0].grupo) {
        return data.data[0].grupo
    }
}

const findGroupByRegiao = async (regiaoId) => {
    const url = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/alianca-zonas`
    const params = {
        populate: {
            grupo: '*',
        },
        filters: {
            $and: [
                {
                    regiaoId: {
                        $eq: regiaoId,
                    },
                },
                {
                    ufId: {
                        $null: true,
                    },
                },
            ],
        },
    }
    const { data } = await axios.get(url, {
        params,
        paramsSerializer: (p) => qs.stringify(p),
    })

    if (data.data.length > 0 && data.data[0].grupo) {
        return data.data[0].grupo
    }
}

export default async function handler(req, res) {
    const { body, method } = req

    const { email, tel, phone, cep, captcha, permiteWhats } = body
    let nome = ''
    let message = ''

    if (body.nome) {
        nome = body.nome
    }

    if (body.message) {
        message = body.message
    }

    if (method !== 'POST') {
        return res.status(404).send('Not found')
    }
    // If email or captcha are missing return an error
    if (!email || !captcha) {
        return res.status(422).json({
            message:
                'Unproccesable request, please provide the required fields',
        })
    }

    try {
        // Ping the google recaptcha verify API to verify the captcha code you received
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
            {
                headers: {
                    'Content-Type':
                        'application/x-www-form-urlencoded; charset=utf-8',
                },
                method: 'POST',
            }
        )
        const captchaValidation = await response.json()
        if (captchaValidation.success) {
            const userPhone = tel || phone
            await saveLeadToS3(
                {
                    email,
                    tel: userPhone,
                    cep,
                    captcha,
                    permiteWhats,
                    message,
                    nome,
                },
                req
            )

            let group = null
            if (permiteWhats) {
                const IBGE = await getIBGEFromViaCep(cep)
                group = await findGroup(IBGE)
            }

            return res.status(200).json({
                message: 'Ok',
                group,
            })
        }

        return res.status(422).json({
            message: 'Unproccesable request, Invalid captcha code',
        })
    } catch (error) {
        return res.status(422).json({ message: `Ops: ${error.message}` })
    }
}
