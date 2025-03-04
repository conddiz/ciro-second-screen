import React from 'react'

import { Box } from '@mui/material'

const ArticleBox = ({ children }) => {
    return <Box component="aside">{children}</Box>
}

export { ArticleBox }
