import React from 'react'

import Image from 'next/image'

import { Box, Container } from '@mui/material'

const Header = ({ children }) => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                bgcolor: 'tertiary.darker',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '30px',
                py: '15px',
            }}
        >
            <Box></Box>
            <Image
                src="/img/logo-prefiro-ciro-ana-paula.png"
                alt="Logo"
                width="180px"
                height="58px"
            />
            <Box></Box>
        </Box>
    )
}

export { Header }
