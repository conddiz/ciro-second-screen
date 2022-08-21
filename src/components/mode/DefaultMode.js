import React from 'react'

import { Box } from '@mui/material'

import { SYSTEM_MODE } from '@ciro/constants'

const DefaultMode = () => {
    return (
        <Box id={SYSTEM_MODE.PADRAO.id} component="section">
            PADRÃO
        </Box>
    )
}

export { DefaultMode }
