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
                defaultValue=""
                value={value}
                fieldId={name}
                fieldName={name}
                render={({ field: { onChange, value } }) => (
                    <MuiTelInput
                        value={value}
                        onChange={onChange}
                        placeholder={label}
                        id={name}
                        variant="filled"
                        color="primary"
                        preferredCountries={['BR']}
                        focusOnSelectCountry={true}
                        langOfCountryName="PT-BR"
                        error={errors[name] !== undefined}
                        sx={{
                            width: '100%',

                            border: '2px solid',
                            borderColor: 'tertiary.darker',
                            backgroundColor: 'transparent',
                            padding: 0,
                            '& .MuiInputAdornment-root': {
                                padding: 0,
                                marginTop: '0 !important',
                            },
                            '&::after': {
                                border: '0 !important',
                            },
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
                            '& .MuiInputBase-root::before': {
                                border: '0 !important',
                            },
                            '& .MuiInputBase-root::after': {
                                border: '0 !important',
                            },

                            '&:hover, &:focus': {
                                backgroundColor: 'rgba(255, 255, 255, .065)',
                            },
                        }}
                    />
                )}
            />

            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputPhone }
