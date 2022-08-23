import { Box, Container, Typography } from '@mui/material'
import { JoinForm, AppCard } from '@ciro/components/elements'

const JoinUsSection = () => {
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                bgcolor: 'secondary.main',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '30px',
                py: '40px',
            }}
        >
            <Container>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '10px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '20px',
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '50%',
                                lg: '50%',
                                xl: '50%',
                            },
                        }}
                    >
                        <Typography variant="title" component="h2">
                            FAÇA PARTE DA <strong>RECONSTRUÇÃO</strong> DO{' '}
                            <strong>BRASIL</strong>
                        </Typography>
                        <JoinForm />
                    </Box>

                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },

                            backgroundColor: 'primary.lighter',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <AppCard />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export { JoinUsSection }
