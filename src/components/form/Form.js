import * as React from 'react'
import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = ({
    children,
    onSubmit,
    defaultValues = {},
    validations = null,

    sx,
    ...props
}) => {
    const { register, handleSubmit, formState, control, watch, setValue } = useForm({
        criteriaMode: 'all',
        mode: 'onChange',
        defaultValues: defaultValues,
        resolver: yupResolver(validations),
    })

    const formProps = {
        register: register,
        formState: formState,
        control: control,
        setValue: setValue
    }

    return (
        <Box
            sx={{
                width: '100%',
                margin: '0 auto',
                display: 'block',
                // padding: '10px',
                ...sx,
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            {...props}
            component="form"
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { ...formProps })
                }
                return child
            })}
        </Box>
    )
}

export { Form }
