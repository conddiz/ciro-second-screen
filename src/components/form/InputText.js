import React from 'react'

import { TextField, InputAdornment, Input } from '@mui/material'
import InputUnstyled from '@mui/base/InputUnstyled'

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
    ...props
}) => {
    const errors = formState.errors

    return (
        <FormControl>
            <TextField
                type={type}
                name={name}
                placeholder={label}
                {...register(name, validation)}
                {...props}
                variant="outlined"
                error={errors[name] !== undefined}
                sx={{
                    width: '100%',

                    border: '2px solid',
                    borderColor: 'tertiary.darker',
                    backgroundColor: 'transparent',
                    padding: 0,

                    '& input': {
                        padding: 0,
                        margin: 0,
                        color: 'tertiary.darker',
                        fontFamily: 'Graphik',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '13px',
                        padding: '15px 20px',
                        outline: '0',
                        transition: 'all .2s ease-in',
                        lineHeight: '1.15',
                        border: 0,

                        '&::placeholder': {
                            textTransform: 'uppercase',
                            color: 'tertiary.darker',
                            opacity: '1',
                        },
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '0 !important',
                    },

                    '& input + fieldset': {
                        border: '0 !important',
                    },

                    '& input:hover, input:active, input:visited': {
                        padding: '15px 20px',
                        border: '0 !important',
                    },
                    '&:hover, &:focus': {
                        backgroundColor: 'rgba(255, 255, 255, .065)',
                        border: '2px solid',
                        borderColor: 'tertiary.darker',
                    },
                }}
            >
                {children}
            </TextField>

            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputText }
