import { Switch, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { FormControl, FormErrors } from '@ciro/components/form'
import { Controller } from 'react-hook-form'

import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'

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
                    sx={{ margin: 0 }}
                    control={
                        <Controller
                            as={Checkbox}
                            type="checkbox"
                            name={name}
                            control={control}
                            rules={validation}
                            defaultValue={false}
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
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
                                    icon={
                                        <CheckBoxOutlineBlankIcon
                                            sx={{ color: 'tertiary.darker' }}
                                        />
                                    }
                                    checkedIcon={
                                        <CheckBoxIcon
                                            sx={{ color: 'tertiary.darker' }}
                                        />
                                    }
                                    sx={{
                                        py: '5px',
                                        alignSelf: 'start',
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        paddingRight: '10px',
                                    }}
                                />
                            )}
                        />
                    }
                    componentsProps={{
                        typography: {
                            sx: {
                                color: 'tertiary.darker',
                                fontWeight: '700',
                                fontFamily: 'Graphik',
                                fontSize: '18px',
                            },
                        },
                    }}
                    label={label}
                />
            </FormGroup>
            <FormErrors name={name} errors={errors} label={label} />
        </FormControl>
    )
}

export { InputSwitch }
