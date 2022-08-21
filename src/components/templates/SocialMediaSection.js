import Image from 'next/image'

import { Box } from '@mui/material'

import { SOCIAL } from '@ciro/constants'

import Link from 'next/link'

const SocialMediaSection = ({ children }) => {
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                bgcolor: 'tertiary.darker',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                px: '30px',
                py: '0',
                height: '304px',
                h2: {
                    display: 'inline-block',
                    fontSize: '83px',
                    background: 'linear-gradient(to right, #FF9D00, #FF9D00, #49BA27, #49BA27, #0096ED, #0096ED, #0096ED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'New Grotesk Square',
                    maxWidth: '737px',
                    fontWeight: '200',

                    '> span:nth-child(1)': {
                        fontWeight: '300',
                    },
                    '> span:nth-child(2)': {
                        fontWeight: '500',
                    },
                    '> span:nth-child(3)': {
                        fontWeight: '900',
                    }
                },
                ul: {
                    margin: '-70px 0 0 -34px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    columnGap: '20px',
                    listStyle: 'none',                    
                },
                a: {
                    width: '42px',
                    height: 'auto',
                    display: 'block',
                    position: 'relative',
                    "&:hover": {
                        "&:after": {
                            opacity: 1,
                        },
                    },
                    "&:after": {
                        content: '""',
                        width: '64px',
                        height: '64px',
                        backgroundColor: 'rgba(255, 255, 255, .1)',
                        position: 'absolute',
                        top: '50%',
                        left: '51%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                        opacity: 0,
                        transition: 'all .2s ease -in',
                    }
                }                
                
            }}
        >
            <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                textAlign: 'center',
                // rowGap: '30px',
                height: '100%',
            }}>
                <h2>VEM <span>PRA</span> <span>TURMA</span> <span>BOA</span></h2>
                <ul>                    
                    {
                    SOCIAL.map(({ id, url, text, src, target, rel, ...props }) => (
                        <li key={id}>
                        <Link href={url+text}>
                            <a {...props}>
                            <Image src={src} alt="Ícone" layout="responsive" width="24" height="24" />
                            </a>
                        </Link>
                        </li>
                    ))
                    }
                </ul>
            </Box>

            <Box 
            sx={{            
                display: 'flex',
                alignItems: 'flex-end',                                                   
            }}>
                <Image 
                    src="/img/ciro12.png" 
                    alt="Ciro Gomes 12" 
                    width={"358"} 
                    height={"342"}                     
                />
            </Box>
        </Box >
    )
}

export { SocialMediaSection }
