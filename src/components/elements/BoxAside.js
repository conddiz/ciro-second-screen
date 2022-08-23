import { Box } from '@mui/material'

const BoxAside = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: { md: '100%', lg: '30%' },
                backgroundColor: { md: '', lg: 'neutral.light' },
                py: '20px',
                px: { md: '0px', lg: '20px' },
                overflowY: {
                    md: 'initial',
                    lg: 'scroll',
                },
            }}
            component="aside"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    pt: '20px',
                    pb: { md: '20px', lg: '80px' },
                    width: '100%',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export { BoxAside }
