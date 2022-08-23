import { Box } from '@mui/material'

const BoxAside = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: { md: '100%', lg: '30%' },
                backgroundColor: { md: '', lg: 'neutral.light' },
                px: { md: '0px', lg: '20px' },
                pb: {
                    xs: '20px',
                    sm: '20px',
                    md: '20px',
                    lg: '0px',
                    xl: '0px',
                },
                overflowY: {
                    md: 'initial',
                    lg: 'scroll',
                },
            }}
            component="aside"
        >
            <Box
                sx={{
                    flexBasis: { md: '', lg: '0px' },
                    flexGrow: '1',
                    overflowY: {
                        md: 'initial',
                        lg: 'auto',
                    },
                    gap: 4,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export { BoxAside }
