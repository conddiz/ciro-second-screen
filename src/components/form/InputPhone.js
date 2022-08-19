import React from 'react'

import { FormControl, FormErrors } from '@ciro/components/form'
import { Controller } from 'react-hook-form'
import { MuiTelInput, isValidPhoneNumber } from 'mui-tel-input'

const InputPhone = ({
    children,
    name,
    value,
    label,
    register,
    validation = {},
    formState,
    control,
    ...props
}) => {
    const errors = formState.errors

    return (
        <FormControl>
            <Controller
                as={MuiTelInput}
                name={name}
                control={control}
                defaultValue="+55"
                value={value}
                fieldId={name}
                fieldName={name}
                render={({ field: { onChange, value } }) => (
                    <MuiTelInput
                        value={value}
                        onChange={onChange}
                        label={label}
                        id={name}
                        variant="filled"
                        color="primary"
                        preferredCountries={['BR']}
                        focusOnSelectCountry={true}
                        langOfCountryName="PT-BR"
                        error={errors[name] !== undefined}
                    />
                )}
            />

            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputPhone }
