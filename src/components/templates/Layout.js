import React from 'react'

import { Box } from '@mui/material'
import { Header, Footer } from '@ciro/components/templates'

const Layout = ({ children }) => {
    return (
        <Box>
            <Header />
            <main>{children}</main>
            <Footer />
        </Box>
    )
}

export { Layout }
