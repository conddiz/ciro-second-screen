import { Switch, FormGroup, FormControlLabel } from '@mui/material'
import { FormControl, FormErrors } from '@ciro/components/form'
import { Controller } from 'react-hook-form'

const InputSwitch = ({
    label,
    name,
    validation = {},
    register,
    setValue,
    formState,
    control,
    onChange,
}) => {
    const errors = formState.errors
    const handleChange = onChange || (() => {})
    return (
        <FormControl>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Controller
                            as={Switch}
                            type="checkbox"
                            name={name}
                            control={control}
                            rules={validation}
                            defaultValue={false}
                            render={({ field: { onChange, value } }) => (
                                <Switch
                                    name={name}
                                    id={name}
                                    onChange={(event) => {
                                        onChange(event.target.checked)
                                        handleChange(
                                            event.target.checked,
                                            setValue
                                        )
                                    }}
                                    checked={value}
                                />
                            )}
                        />
                    }
                    componentsProps={{ typography: { color: 'primary' } }}
                    label={label}
                />
            </FormGroup>
            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputSwitch }
