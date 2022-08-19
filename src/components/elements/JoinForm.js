import { useState } from 'react'

import Image from 'next/image'
import * as yup from 'yup'
import { Box } from '@mui/material'

import {
    Form,
    InputText,
    InputPassword,
    InputPhone,
    InputCep,
    InputSwitch,
} from '@ciro/components/form'

const JoinForm = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()

    const validations = yup.object({
        fullname: yup
            .string()
            .required('O campo "Nome completo" é obrigatório'),
        username: yup
            .string()
            .required('O campo "Nome de usuário" é obrigatório')
            .min(3, 'O campo "Nome de usuário" deve ter no mínimo 3 caracteres')
            .max(
                20,
                'O campo "Nome de usuário" deve ter no máximo 20 caracteres'
            )
            .test(
                'username-no-space',
                'O campo "Nome de usuário" não pode conter espaços',
                (value) => {
                    return !value.includes(' ')
                }
            ),
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
        referral: yup
            .string()
            .test(
                'username-no-space',
                'O campo "Indicação" não pode conter espaços',
                (value) => {
                    return !value.includes(' ')
                }
            )
            .test(
                'referral-null-or-min',
                'O campo Indicação deve ter entre 3 e 20 caracteres',
                (value) => {
                    return (
                        value == null ||
                        value.length === 0 ||
                        (value.length >= 3 && value.length <= 20)
                    )
                }
            ),
        password: yup
            .string()
            .required('O campo "Senha" é obrigatório')
            .min(6, 'A senha deve ter ao menos 6 caracteres'),
        confirmPassword: yup
            .string()
            .required('O campo "Confirmar senha" é obrigatório')
            .oneOf(
                [yup.ref('password')],
                'As senhas informadas não são iguais '
            ),
    })

    const handleOnSubmit = async (data) => {
        setLoading(true)

        const userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            fullname: data.fullname,
            phone: data.phone,
            cep: data.cep,
            referral: data.referral,
            allowGroup: data.allowGroup,
        }

        try {
            const result = await register(userData)

            setMessage({
                text: `Usuário ${result.data.user.username} cadastrado com sucesso`,
                level: 'success',
            })

            await router.push('/perfil')
        } catch (error) {
            if (error.response?.data?.error?.name === 'ValidationError') {
                setMessage({
                    text: 'Não é possível cadastrar esse usuário',
                    level: 'error',
                })
            } else {
                setMessage({
                    text: 'Ocorreu um erro ao cadastrar esse usuário. Tente novamente mais tarde.',
                    level: 'error',
                })
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box
            sx={{
                marginTop: '40px',
                marginBottom: '40px',
                width: '90%',
                position: 'relative',
            }}
        >
            <Form
                action="/api/save-lead"
                method="POST"
                onSubmit={handleOnSubmit}
            >
                <InputText type="email" name="email" id="email" label="Email" />

                <InputPhone name="phone" id="phone" label="Telefone" />
                <InputCep name="cep" id="cep" label="CEP" />
                <InputText
                    type="text"
                    name="fullname"
                    id="fullname"
                    label="Nome completo"
                />
                <InputSwitch
                    name="allowGroup"
                    label=" Quero fazer parte do grupo Aliança Rebelde"
                />
            </Form>
        </Box>
    )
}

export { JoinForm }
