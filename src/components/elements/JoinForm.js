import { useState } from 'react'
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

import {
    Form,
    InputText,
    InputPassword,
    InputPhone,
    InputCep,
    InputSwitch,
} from '@ciro/components/form'
import { isValidPhoneNumber } from 'mui-tel-input'

const JoinForm = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()
    // const [event, setFormEvent] = React.useState({})
    // const [formRef, setFormRef] = React.useState({})
    // const [loading, setLoading] = React.useState(false)
    // const [success, setSuccess] = React.useState(false)
    // const [isModalOpen, setIsModalOpen] = React.useState(false)
    // const [group, setGroup] = React.useState(null)

    // const [cep, setCep] = React.useState('')
    // const [phone, setPhone] = React.useState('')
    // const [checked, setChecked] = React.useState(false)

    // const recaptchaRef = React.createRef()

    // const captchaReset = () => {
    //     if (window.grecaptcha) grecaptcha.reset()
    // }

    // const onReCAPTCHAChange = async (captchaCode) => {
    //     const email = event.target.email.value
    //     const nome = event.target.nome.value
    //     const permissaoWhats = event.target.permite.checked

    //     if (!captchaCode) {
    //         console.log('no recaptcha code')
    //         return
    //     }
    //     try {
    //         let response = await fetch('/api/save-lead', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 email,
    //                 nome,
    //                 phone,
    //                 cep,
    //                 captcha: captchaCode,
    //                 permiteWhats: permissaoWhats,
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //         if (response.ok) {
    //             setSuccess(true)

    //             response = await response.json()

    //             if (permissaoWhats) {
    //                 setGroup(response.group)
    //                 setIsModalOpen(true)
    //             }

    //             setTimeout(() => {
    //                 setSuccess(false)
    //             }, 15000)
    //             setFormEvent({})
    //         } else {
    //             const error = await response.json()
    //             throw new Error(error.message)
    //         }
    //     } catch (error) {
    //         alert(error?.message || 'Something went wrong')
    //     } finally {
    //         captchaReset()
    //         setFormEvent({})
    //         setLoading(false)
    //     }
    // }

    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault()
        setFormEvent(event)

        const data = {
            email: event.target.email.value,
            nome: event.target.nome.value,
            phone: event.target.tel.value,
            cep: event.target.cep.value,
            permiteWhats: event.target.permite.checked,
        }
        TagManager.dataLayer({
            dataLayer: {
                event: 'sign_up_leads',
                data: data,
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
        fullname: yup.string().required('O campo "Nome" é obrigatório'),

        email: yup
            .string()
            .required('O campo "Email" é obrigatório')
            .email('O campo "Email" deve ser um email válido'),
        phone: yup
            .string()
            .required('O campo "Telefone" é obrigatório')
            .test(
                'valid-phone',
                'O campo "Telefone" deve ser um telefone válido',
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
            })
            .test(
                'cep-from-emigrant',
                'Quem mora fora do país não deve informar o CEP',
                (value) => {
                    const emigrant = yup.ref('emigrant')
                    if (emigrant === true && value) {
                        return false
                    }
                    return true
                }
            ),
    })

    return (
        <Form
            action="/api/save-lead"
            method="POST"
            onSubmit={handleSubmit}
            id="registerForm"
            validations={validations}
            // ref={(el) => setFormRef(el)}
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
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
            {/* <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.RECAPTCHA_SITE}
                onChange={onReCAPTCHAChange}
                onSubmit={handleOnSubmit}
                id="registerForm"
                validations={validations}
            /> */}
            <InputText type="email" name="email" id="email" label="E-Mail*" />
            <InputPhone name="phone" id="phone" label="Telefone (com DDD)*" />
            <InputCep name="cep" id="cep" label="CEP*" />
            <InputText
                type="text"
                name="fullname"
                id="fullname"
                label="Nome*"
            />

            <InputSwitch
                name="allowGroup"
                label=" Quero fazer parte do grupo Aliança Rebelde"
            />

            <Button variant="contained" color="primary">
                Enviar
            </Button>

            {/* <S.Row visible={!success}>
                <InputText
                    name="email"
                    type="email"
                    placeholder="*E-mail"
                    required
                />

                <InputText
                    name="tel"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(PHONE_MASK(e.target.value))}
                    placeholder="Telefone (com DDD)*"
                    maxLength={15}
                    required
                />
                <InputText
                    name="cep"
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(CEP_MASK(e.target.value))}
                    placeholder="*CEP"
                    required
                />
                <InputText name="nome" type="text" placeholder="Nome" />
                <S.FormRadio>
                    <span
                        style={{
                            color: '#0F237C',
                            fontWeight: 700,
                            fontFamily: 'Graphik',
                        }}
                    >
                        Quero fazer parte do grupo Aliança Rebelde
                    </span>
                    <input
                        type="checkbox"
                        name="permite"
                        defaultChecked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <span className="checkmark"></span>
                </S.FormRadio>

                <S.ButtonSubmit
                    secundary
                    disabled={loading}
                    type="submit"
                    {...buttonProps}
                >
                    {loading ? 'Enviando...' : <>Enviar</>}
                </S.ButtonSubmit>
            </S.Row> */}

            {/* <LoadingButton
                type="submit"
                color="primary"
                form="registerForm"
                loading={loading}
                variant="contained"
                size="large"
                fullWidth
            >
                Salvar
            </LoadingButton> */}

            {/* <S.ThankYouMessage visible={success}>
                <span>
                    Dados enviados com sucesso. Obrigado por se cadastrar!
                </span>
                <br />
                {checked ? (
                    <a
                        href="https://growp.app/i/n8uwd"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Não conseguiu acessar o grupo? Clique aqui!
                    </a>
                ) : (
                    ''
                )}
            </S.ThankYouMessage> */}

            {/* <GroupsModal
                isOpen={isModalOpen && checked}
                setIsOpen={setIsModalOpen}
                group={group}
            /> */}
        </Form>
    )
}

export { JoinForm }
