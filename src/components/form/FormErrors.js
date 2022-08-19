import { Box, Typography } from '@mui/material'

import { ErrorMessage } from '@hookform/error-message'
import Mustache from 'mustache'

const defaultMessages = {
    required: `Campo {{label}} é obrigatório`,
    minLength: 'Campo {{label}} deve conter mais caracteres',
    maxLength: 'Campo {{label}} deve conter menos caracteres',
    min: 'Campo {{label}} deve ser maior',
    max: 'Campo {{label}} deve ser menor',
    pattern: 'Campo {{label}} fora do padrão',
    validate: 'Campo {{label}} inválido',
}

const FormErrors = ({ errors, name, label }) => {
    return (
        <Box
            sx={{
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                padding: '6px',
                color: 'error.main',
            }}
        >
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ messages }) => {
                    if (!messages) {
                        return (
                            <Typography
                                key="unknown"
                                variant="caption"
                                className="error-message"
                            >
                                Erro não identificado
                            </Typography>
                        )
                    }

                    const erros = Object.entries(messages).map(
                        ([type, message]) => {
                            if (message === true) {
                                message = Mustache.render(
                                    defaultMessages[type],
                                    { label }
                                )
                            }

                            return (
                                <Typography
                                    key={type}
                                    variant="caption"
                                    className="error-message"
                                >
                                    {message}
                                </Typography>
                            )
                        }
                    )
                    return erros
                }}
            />
        </Box>
    )
}

export { FormErrors }
