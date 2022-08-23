import React from 'react'

import { Box } from '@mui/material'

const YoutubeChat = ({ videoId }) => {
    return (
        <Box
            component="iframe"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${process.env.NEXT_PUBLIC_EMBED_DOMAIN}`}
            frameBorder="0"
            sx={{
                display: 'block',
                width: '100%',
                height: {
                    xs: '600px',
                    sm: '600px',
                    md: '600px',
                    lg: '100%',
                    xl: '100%',
                },
            }}
        />
    )
}

export { YoutubeChat }
