import { useState } from 'react'

import {
    TextField,
    FilledInput,
    InputAdornment,
    IconButton,
} from '@mui/material'

import { FormControl, FormErrors } from '@ciro/components/form'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const InputPassword = ({
    children,
    name,
    label,
    register,
    validation = {},
    formState,
    ...props
}) => {
    const errors = formState.errors

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    return (
        <FormControl>
            <TextField
                type={showPassword ? 'text' : 'password'}
                name={name}
                label={label}
                {...register(name, validation)}
                {...props}
                variant="filled"
                color="primary"
                error={errors[name] !== undefined}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            >
                {children}
            </TextField>

            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputPassword }
