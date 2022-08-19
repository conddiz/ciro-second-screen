import { useState, useEffect } from 'react'

import { Box } from '@mui/material'

import { YoutubePlayer } from '@ciro/components/main'
import { YoutubeChat } from '@ciro/components/aside'

const PoliticalAdvertisingTimeMode = () => {
    const [videoId, setVideoId] = useState('jOuvjQn6f_s')

    return (
        <Box
            my={4}
            sx={{
                height: { xs: '90vh', md: '100%' },
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                itemsAlign: 'flex-start',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
            }}
            component="section"
        >
            <YoutubePlayer videoId={videoId} />
            <YoutubeChat videoId={videoId} />
        </Box>
    )
}

export { PoliticalAdvertisingTimeMode }
