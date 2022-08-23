import React from 'react'

import Image from 'next/image'

import { Box, Container } from '@mui/material'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                bgcolor: 'neutral.lighter',
                px: '30px',
                py: '45px',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        mx: '15px',
                        my: {
                            xs: '25px',
                            sm: '25px',
                            md: '25px',
                            lg: '45px',
                            xl: '45px',
                        },
                        display: 'flex',
                        gap: 5,
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        src="/img/prefiro-ciro.png"
                        alt="Logo da campanha 'Ciro: A rebeldia da esperança"
                        width="220px"
                        height="46px"
                    />
                    <Box
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '6px',
                            color: 'tertiary.darker',
                            fontFamily: 'Graphik',
                            fontSize: '14px',
                            fontWeight: '500',
                            '& p': {
                                margin: 0,
                                fontFamily: 'Graphik',
                            },
                        }}
                    >
                        <p>POLÍTICAS DE PRIVACIDADE</p>
                        <p>© 2022 - TODOS OS DIREITOS RESERVADOS</p>
                        <p>CNPJ DO CANDIDATO: 47.474.850/0001-95</p>
                    </Box>
                    <Image
                        src="/img/logo-pdt-12.png"
                        alt="Logo do Partido Democrático Trabalhista"
                        width="160px"
                        height="60px"
                    />
                </Box>
            </Container>
        </Box>
    )
}

export { Footer }
