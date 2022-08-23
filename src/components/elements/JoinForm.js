import { useState, createRef } from 'react'
import * as yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import _ from 'lodash'
import TagManager from 'react-gtm-module'

// import * as S from './JoinForm.styles'
// import { GroupsModal } from '@ciro/components/elements'

import { CEP_MASK, PHONE_MASK } from '@ciro/constants'

import {
    Alert,
    Box,
    Button,
    Container,
    Card,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

import { isValidPhoneNumber } from 'mui-tel-input'

import {
    Form,
    InputText,
    InputPassword,
    InputPhone,
    InputCep,
    InputSwitch,
} from '@ciro/components/form'
import { GroupsModal } from '@ciro/components/elements'

const JoinForm = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()
    const [event, setFormEvent] = useState({})
    const [formData, setFormData] = useState({})
    const [formRef, setFormRef] = useState({})
    const [success, setSuccess] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [group, setGroup] = useState(null)

    // const [cep, setCep] = useState('')
    // const [phone, setPhone] = useState('')
    // const [checked, setChecked] = useState(false)

    const recaptchaRef = createRef()

    const captchaReset = () => {
        if (window.grecaptcha) grecaptcha.reset()
    }

    const onReCAPTCHAChange = async (captchaCode) => {
        setLoading(true)

        const email = formData.email
        const nome = formData.nome
        const phone = formData.phone
        const cep = formData.cep
        const permiteWhats = formData.permiteWhats

        if (!captchaCode) {
            console.log('no recaptcha code')
            return
        }
        try {
            let response = await fetch('/api/save-lead', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    nome,
                    phone,
                    cep,
                    captcha: captchaCode,
                    permiteWhats: permiteWhats,
                }),
                headers: {
                    mode: 'no-cors',
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                setSuccess(true)

                response = await response.json()

                if (permissaoWhats) {
                    setGroup(response.group)
                    setIsModalOpen(true)
                }

                setTimeout(() => {
                    setSuccess(false)
                }, 15000)
                setFormEvent({})
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (error) {
            alert(error?.message || 'Something went wrong')
        } finally {
            captchaReset()
            setFormEvent({})
            setLoading(false)
        }
    }

    const handleSubmit = async (data) => {
        setFormData(data)

        const gtmData = {
            email: data.email,
            nome: data.nome,
            phone: data.phone,
            cep: data.cep,
            permiteWhats: data.permiteWhats,
        }

        TagManager.dataLayer({
            dataLayer: {
                event: 'sign_up_leads',
                data: gtmData,
            },
        })

        // Execute the reCAPTCHA when the form is submitted
        recaptchaRef.current
            .execute()
            .then(() => {
                if (recaptchaRef.current) recaptchaRef.current.reset()
            })
            .catch(console.error)
    }

    const validations = yup.object({
        email: yup
            .string()
            .required('O campo "Email" é obrigatório')
            .email('O campo "Email" deve ser um email válido'),
        phone: yup
            .string()
            .required('O campo "Telefone" é obrigatório')
            .test(
                'valid-phone',
                'O campo "Telefone" deve ser um telefone válido, com DDI e Código de Área',
                (value) => {
                    return value == null || isValidPhoneNumber(value)
                }
            ),
        cep: yup
            .string()
            .required('O campo "CEP" é obrigatório')
            .matches(/[0-9]{5}-[0-9]{3}/i, {
                message: 'CEP inválido',
                excludeEmptyString: true,
            }),
        nome: yup.string().required('O campo "Nome" é obrigatório'),
    })

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {message && (
                <Alert
                    severity={message.level}
                    onClose={() => {
                        setMessage(null)
                    }}
                >
                    {message.text}
                </Alert>
            )}

            {success && (
                <Alert
                    severity="success"
                    onClose={() => {
                        setSuccess(false)
                    }}
                >
                    <Typography variant="h6">
                        Dados enviados com sucesso. Obrigado por se cadastrar!
                    </Typography>

                    {checked && (
                        <a
                            href="https://growp.app/i/n8uwd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Não conseguiu acessar o grupo? Clique aqui!
                        </a>
                    )}
                </Alert>
            )}

            <Form
                action="/api/save-lead"
                method="POST"
                onSubmit={handleSubmit}
                id="registerForm"
                validations={validations}
                ref={(el) => setFormRef(el)}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
                    gap: '20px',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    transition: '.5s all',
                    opacity: '1',
                    width: '90%',
                    mx: 0,
                    mt: '20px',
                }}
            >
                <Box sx={{ display: 'none' }}>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.RECAPTCHA_SITE}
                        onChange={onReCAPTCHAChange}
                        onSubmit={handleSubmit}
                        id="registerForm"
                        validations={validations}
                    />
                </Box>
                <InputText
                    type="email"
                    name="email"
                    id="email"
                    label="E-Mail*"
                />
                <InputPhone
                    name="phone"
                    id="phone"
                    label="Telefone (com DDD)*"
                />
                <InputCep name="cep" id="cep" label="CEP*" />
                <InputText type="text" name="nome" id="nome" label="Nome*" />
                <InputSwitch
                    name="permiteWhats"
                    label=" Quero fazer parte do grupo Aliança Rebelde"
                />
                <LoadingButton
                    type="submit"
                    color="primary"
                    form="registerForm"
                    loading={loading}
                    variant="contained"
                    size="large"
                    fullWidth
                >
                    Enviar
                </LoadingButton>

                <GroupsModal
                    open={isModalOpen && checked}
                    setOpen={setIsModalOpen}
                    group={group}
                />
            </Form>
        </Box>
    )
}

export { JoinForm }
