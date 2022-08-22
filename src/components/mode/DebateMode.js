import React from 'react'

import { Box } from '@mui/material'

import { SYSTEM_MODE } from '@ciro/constants'

const DebateMode = ({ config }) => {
    return (
        <Box id={SYSTEM_MODE.DEBATE.id} component="section">
            DEBATE
        </Box>
    )
}

export { DebateMode }
