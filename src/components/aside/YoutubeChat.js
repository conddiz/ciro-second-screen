import React from 'react'

import { Box } from '@mui/material'

const YoutubeChat = ({ videoId }) => {
    return (
        <Box
            component="iframe"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${process.env.NEXT_PUBLIC_EMBED_DOMAIN}`}
            frameBorder="0"
            sx={{
                width: '100%',
                height: '100%',
            }}
        />
    )
}

export { YoutubeChat }
