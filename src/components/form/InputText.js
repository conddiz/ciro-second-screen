import React from 'react'

import { TextField, InputAdornment, Input } from '@mui/material'

import { Help } from '@ciro/components/elements'
import { FormControl, FormErrors } from '@ciro/components/form'
const InputText = ({
    children,
    name,
    type,
    label,
    register,
    validation = {},
    formState,
    helperText,
    help,
    ...props
}) => {
    const errors = formState.errors

    return (
        <FormControl>
            <Input
                type={type}
                name={name}
                placeholder={label}
                {...register(name, validation)}
                {...props}
                // variant="outlined"
                color="primary"
                error={errors[name] !== undefined}
                helperText={helperText}
                InputProps={{
                    endAdornment: help ? (
                        <InputAdornment position="end">
                            <Help>{help}</Help>
                        </InputAdornment>
                    ) : null,
                }}
                sx={{
                    width: '100%',
                    fontFamily: 'Graphik',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '13px',
                    color: '#0F237C',
                    border: '2px solid #0F237C',
                    backgroundColor: 'transparent',
                    padding: '15px 20px',
                    outline: '0',
                    transition: 'all .2s ease-in',

                    '&:hover, &:focus': {
                        backgroundColor: 'rgba(255, 255, 255, .065)',
                    },

                    '&::placeholder': {
                        textTransform: 'uppercase',
                        color: '#0F237C',
                    },
                }}
            >
                {children}
            </Input>

            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputText }
