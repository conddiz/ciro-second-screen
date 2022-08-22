import React from 'react'

import { Box } from '@mui/material'

const YoutubePlayer = ({ videoId }) => {
    return (
        <Box
            sx={{
                flex: 'auto',
                position: 'relative',
                pb: '56.25%',
                height: '0',
                display: 'flex',
                width: '100%',
            }}
        >
            <Box
                component="iframe"
                className="ratio ratio-16x9 "
                frameBorder="0"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="autoplay;"
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                }}
            ></Box>
        </Box>
    )
}

export { YoutubePlayer }
