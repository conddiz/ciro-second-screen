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
            label={label}
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
