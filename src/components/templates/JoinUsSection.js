import { Box, Container, Typography } from '@mui/material'
import { JoinForm } from '@ciro/components/elements'

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
                py: '15px',
            }}
        >
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Typography variant="title" component="h2">
                            FAÇA PARTE DA <strong>RECONSTRUÇÃO</strong> DO{' '}
                            <strong>BRASIL</strong>
                        </Typography>
                        <JoinForm />
                    </Box>
                    <Box></Box>
                </Box>
            </Container>
        </Box>
    )
}

export { JoinUsSection }
