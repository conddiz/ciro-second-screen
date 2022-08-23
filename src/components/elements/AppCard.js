import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

const AppCard = () => {
    return (
        <Box
            sx={{
                width: '100%',
                pt: {
                    xs: '30px',
                    sm: '30px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'primary.lighter',
                position: 'relative',
                gap: '18px',
                paddingInline: '20px',
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography
                    component="h2"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#0f237c',
                        fontSize: {
                            xs: '64px',
                            sm: '64px',
                            md: '60px',
                            lg: '64px',
                            xl: '64px',
                        },
                        fontWeight: '200',
                        margin: '0',
                        padding: '0',
                        lineHeight: '60px',
                        fontWeight: '400',
                        borderBottom: '4px solid #0f237c',
                        fontFamily: 'New Grotesk Square',
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <span>APP DO</span> <span>CIRÃO</span>
                </Typography>
                <Typography
                    component="p"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#0f237c',
                        fontSize: {
                            xs: '40px',
                            sm: '40px',
                            md: '26px',
                            lg: '40px',
                            xl: '40px',
                        },
                        fontWeight: '200',
                        margin: '0',
                        padding: '0',
                        pt: '20px',
                        lineHeight: '40px',
                        fontWeight: '400',
                        fontFamily: 'New Grotesk Square',
                        '& > strong': {
                            fontWeight: '600',
                        },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <span>ACESSE E</span> <strong>ACOMPANHE</strong>
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Link href="https://ciro.app.br">
                    <a
                        onClick={() =>
                            TagManager.dataLayer({
                                dataLayer: {
                                    event: 'click_site_to_app',
                                },
                            })
                        }
                    >
                        <Image
                            src="/img/app-screenshot.png"
                            alt="Screenshot do app do Cirão"
                            height="280px"
                            width="140px"
                            priority
                        ></Image>
                    </a>
                </Link>
            </Box>
            <Box
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    src="/img/qr-code-app-ciro.png"
                    width="160px"
                    height="160px"
                    alt="QR Code para o app do Cirão"
                />
            </Box>
        </Box>
    )
}

export { AppCard }
