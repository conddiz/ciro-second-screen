import { Box } from '@mui/material'

const BoxMain = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                },
                gap: 2,
            }}
            component="section"
        >
            {children}
        </Box>
    )
}

export { BoxMain }
