import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Box } from '@mui/material'

const Header = ({ children }) => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                bgcolor: 'tertiary.darker',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '30px',
                py: '15px',
            }}
        >
            <Box></Box>
            <Link href="/">
                <a>
                    <Image
                        src="/img/logo-prefiro-ciro-ana-paula.png"
                        alt="Logo"
                        width="180px"
                        height="58px"
                    />
                </a>
            </Link>
            <Box></Box>
        </Box>
    )
}

export { Header }
