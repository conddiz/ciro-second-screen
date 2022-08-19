import { Box } from '@mui/material'

const FormControl = ({ children, ...props }) => {
    return (
        <Box
            sx={{
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                py: '10px',
            }}
        >
            {children}
        </Box>
    )
}

export { FormControl }
