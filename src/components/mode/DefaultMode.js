import { useState, useEffect } from 'react'

import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
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
            const playlist = data.youtubePlaylistJson
            const videoId = playlist.items[0].snippet.resourceId.videoId

            setPlaylist(playlist)
            setVideoId(videoId)
            setLoading(false)
        }
        fetchPlaylist()
    }, [])

    return (
        <Container>
            <Box
                id={config.id}
                sx={{
                    flexGrow: 1,
                }}
                component="section"
            >
                <LoadingProgress loading={loading} />
                {!loading && playlist && (
                    <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={9}>
                            <Box>
                                <YoutubePlayer videoId={videoId} />
                            </Box>
                        </Grid>
                        <Grid item xs md>
                            <Box
                                sx={{
                                    maxHeight: '485px',
                                    overflow: 'scroll',
                                }}
                            >
                                <YoutubePlaylist
                                    playlist={playlist}
                                    setVideoId={setVideoId}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Container>
    )
}

export { DefaultMode }
