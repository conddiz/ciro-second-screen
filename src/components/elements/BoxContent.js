import { Box } from '@mui/material'

const BoxContent = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: { md: '100%', lg: '70%' },
            }}
        >
            {children}
        </Box>
    )
}

export { BoxContent }
