import { useState, useEffect } from 'react'

import { Box } from '@mui/material'

import { YoutubePlayer } from '@ciro/components/main'
import { YoutubePlaylist } from '@ciro/components/aside'
import { LoadingProgress } from '@ciro/components/elements'

import { getYoutubePlaylist } from '@ciro/api'

const DefaultMode = ({ config }) => {
    const [loading, setLoading] = useState(true)
    const [playlist, setPlaylist] = useState(config.playlist)
    const [videoId, setVideoId] = useState(null)

    useEffect(() => {
        const fetchPlaylist = async () => {
            const data = await getYoutubePlaylist()
            const playlist = JSON.parse(data.youtubePlaylistJson)
            const videoId = playlist.items[0].snippet.resourceId.videoId

            setPlaylist(playlist)
            setVideoId(videoId)
            setLoading(false)
        }
        fetchPlaylist()
    }, [])

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
            <LoadingProgress loading={loading} />

            {!loading && playlist && (
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
                        <YoutubePlaylist
                            playlist={playlist}
                            setVideoId={setVideoId}
                        />
                    </Box>
                </>
            )}
        </Box>
    )
}

export { DefaultMode }
