import React from 'react'

import { Box } from '@mui/material'

const AppCard = ({ children }) => {
    return <Box component="aside">{children}</Box>
}

export { AppCard }
