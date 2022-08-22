import React from 'react'

import { Box } from '@mui/material'
import { Header, Footer } from '@ciro/components/templates'

import { JoinUsSection, SocialMediaSection } from '@ciro/components/templates'

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                padding: '0px',
                //paddingLeft: '90px',
                pl: { sm: '0', md: '10px', lg: '90px', xl: '90px' },
                flexDirection: 'column',
                gap: 0,
                bgcolor: 'tertiary.darker',
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    bgcolor: 'neutral.lighter',
                }}
            >
                <>{children}</>
                <JoinUsSection />
                <SocialMediaSection />
                <Footer />
            </Box>
        </Box>
    )
}

export { Layout }
