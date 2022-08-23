import Image from 'next/image'

import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    Button,
    IconButton,
} from '@mui/material'

import { SOCIAL } from '@ciro/constants'

import Link from 'next/link'

const SocialMediaSection = ({ children }) => {
    return (
        <Box
            sx={{
                bgcolor: 'tertiary.darker',
            }}
        >
            <Container>
                <Box
                    component="section"
                    sx={{
                        display: 'flex',

                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        },

                        justifyContent: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'space-between',
                            xl: 'space-between',
                        },
                        alignItems: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'flex-end',
                            xl: 'flex-end',
                        },

                        height: {
                            xs: '100%',
                            sm: '100%',
                            md: '100%',
                            lg: '304px',
                            xl: '304px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignContent: 'center',
                            textAlign: 'center',
                            height: '100%',
                            maxWidth: {
                                xs: '100%',
                                sm: '100%',
                                md: '100%',
                                lg: '70%',
                                xl: '70%',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                width: '100%',
                                wordWrap: 'break-word',
                            }}
                        >
                            <Typography variant="colorful" component="div">
                                VEM <span>PRA</span> <span>TURMA</span>{' '}
                                <span>BOA</span>
                            </Typography>
                        </Box>
                        <List
                            sx={{
                                maxWidth: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: '0',
                                padding: '0',
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {SOCIAL.map(
                                ({
                                    id,
                                    url,
                                    text,
                                    src,
                                    target,
                                    rel,
                                    ...props
                                }) => (
                                    <ListItem
                                        key={id}
                                        sx={{
                                            margin: '0',
                                            padding: '0',
                                            justifySelf: 'flex-end',
                                            width: 'auto',
                                        }}
                                    >
                                        <IconButton
                                            aria-label="delete"
                                            size="large"
                                        >
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    width: {
                                                        xs: '24px',
                                                        sm: '32px',
                                                        md: '40px',
                                                        lg: '48px',
                                                        xl: '48px',
                                                    },
                                                }}
                                            >
                                                <Image
                                                    src={src}
                                                    alt="Ícone"
                                                    layout="responsive"
                                                    width="48"
                                                    height="48"
                                                />
                                            </Box>
                                        </IconButton>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            mt: {
                                xs: '20px',
                                sm: '20px',
                                md: '20px',
                                lg: '0',
                                xl: '0',
                            },
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '100%',
                                lg: '30%',
                                xl: '30%',
                            },
                            // position: 'relative',
                        }}
                    >
                        <Image
                            src="/img/ciro12.png"
                            alt="Ciro Gomes 12"
                            width={'358'}
                            height={'342'}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export { SocialMediaSection }
