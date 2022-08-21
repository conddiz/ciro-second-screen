import React from 'react'

import { Box } from '@mui/material'

import { SYSTEM_MODE } from '@ciro/constants'

const DefaultMode = () => {
    return (
        <Box id={SYSTEM_MODE.PADRAO.id} component="section">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLHWChqAE8-RPpRB35jhb7btQvRqC1B7ur"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </Box>
    )
}

export { DefaultMode }
