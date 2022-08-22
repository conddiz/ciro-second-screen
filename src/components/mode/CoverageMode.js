import { useState, useEffect } from 'react'

import { Box } from '@mui/material'

import { YoutubePlayer } from '@ciro/components/main'
import { TwitterFeed } from '@ciro/components/aside'
import { LoadingProgress } from '@ciro/components/elements'

import { getYoutubePlaylist } from '@ciro/api'

const CoverageMode = ({ config }) => {
    const [twitterId, setTwitterId] = useState(config.twitterId)
    const [videoId, setVideoId] = useState(config.videoId)

    return (
        <Box
            id={config.id}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { sm: 'column', md: 'row' },
                position: 'relative',
            }}
            component="section"
        >
            <>
                <Box
                    sx={{
                        flexGrow: '1',
                        flex: '0 0 75%',
                    }}
                >
                    <YoutubePlayer videoId={videoId} />
                </Box>
                <Box
                    sx={{
                        flexGrow: { sm: '1', md: '0' },
                        flex: { sm: '1', md: '0 0 25%' },
                        px: { sm: '10px', md: '10px' },
                        position: { sm: 'relative', md: 'absolute' },
                        left: { sm: 'auto', md: '80%' },
                        top: { sm: 'auto', md: '0' },
                        bottom: { sm: 'auto', md: '0' },
                        right: { sm: 'auto', md: '0' },
                        overflow: { sm: 'auto', md: 'auto' },
                    }}
                >
                    <TwitterFeed twitterId={twitterId} />
                </Box>
            </>
        </Box>
    )
}

export { CoverageMode }
