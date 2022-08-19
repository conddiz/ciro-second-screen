import React from 'react'

import { Box } from '@mui/material'
import { Header, Footer } from '@ciro/components/templates'

import { JoinUsSection } from '@ciro/components/templates'

const Layout = ({ children }) => {
    return (
        <Box>
            <Header />
            <main>
                <Box>{children}</Box>
                <JoinUsSection />
            </main>
            <Footer />
        </Box>
    )
}

export { Layout }
