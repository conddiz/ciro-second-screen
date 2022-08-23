import { Box } from '@mui/material'

const BoxContent = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',

                pt: '20px',
                pb: { md: '20px', lg: '80px' },
                width: { md: '100%', lg: '70%' },
            }}
        >
            {children}
        </Box>
    )
}

export { BoxContent }
