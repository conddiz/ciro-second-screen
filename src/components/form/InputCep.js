import React from 'react'

import { FormControl, FormErrors } from '@ciro/components/form'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import { IMaskMixin } from 'react-imask'

const MaskedTextField = IMaskMixin(
    ({ inputRef, defaultValue, ...otherProps }) => {
        return (
            <TextField
                {...otherProps}
                inputRef={inputRef}
                value={defaultValue}
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
                        border: '0 !important',
                        '&::placeholder': {
                            textTransform: 'uppercase',
                            color: 'tertiary.darker',
                            opacity: '1',
                        },
                    },
                    '& .MuiInputBase-root::before': {
                        border: '0 !important',
                    },
                    '& .MuiInputBase-root::after': {
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
                    },
                }}
            />
        )
    }
)

const MaskedField = ({
    name,
    label,
    error,
    value,
    onChange,
    ...otherProps
}) => {
    return (
        <MaskedTextField
            id={name}
            name={name}
            placeholder={label}
            value={value}
            error={error}
            variant="filled"
            type="text"
            color="primary"
            onAccept={(value) => {
                onChange({ target: { name: name, value } })
            }}
            {...otherProps}
        />
    )
}

const InputCep = ({
    name,
    value,
    label,
    formState,
    control,
    ...otherProps
}) => {
    const errors = formState.errors

    return (
        <FormControl>
            <Controller
                as={MaskedField}
                name={name}
                control={control}
                defaultValue=""
                value={value}
                fieldId={name}
                fieldName={name}
                disabled={false}
                rules={{
                    pattern: {
                        value: /[0-9]{5}-[0-9]{3}/i,
                        message: 'CEP inválido',
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <MaskedField
                        name={name}
                        label={label}
                        error={errors[name] !== undefined}
                        value={value}
                        id={name}
                        mask="00000-000"
                        onChange={onChange}
                        {...otherProps}
                    />
                )}
            />

            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputCep }
