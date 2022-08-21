import { useState, useEffect } from 'react'

import { Box } from '@mui/material'

import { YoutubePlayer } from '@ciro/components/main'
import { YoutubeChat } from '@ciro/components/aside'
import { SYSTEM_MODE } from '@ciro/constants'

const PoliticalAdvertisingTimeMode = ({ config }) => {
    const [videoId, setVideoId] = useState('jOuvjQn6f_s')

    return (
        <Box
            id={config.id}
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: { sm: 'column', md: 'row' },
            }}
            component="section"
        >
            <YoutubePlayer videoId={config.videoId} />
            <YoutubeChat videoId={config.videoId} />
        </Box>
    )
}

export { PoliticalAdvertisingTimeMode }
