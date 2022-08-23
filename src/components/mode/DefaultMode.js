import { useState, useEffect } from 'react'

import { Box, Container } from '@mui/material'
import { YoutubePlayer } from '@ciro/components/main'
import { YoutubePlaylist } from '@ciro/components/aside'

import {
    LoadingProgress,
    BoxMain,
    BoxAside,
    BoxContent,
} from '@ciro/components/elements'

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
            <LoadingProgress loading={loading} />
            {!loading && playlist && (
                <BoxMain id={config.id}>
                    <BoxContent>
                        <Box>
                            <YoutubePlayer videoId={videoId} />
                        </Box>
                    </BoxContent>
                    <BoxAside>
                        <YoutubePlaylist
                            playlist={playlist}
                            setVideoId={setVideoId}
                            horizontal={true}
                        />
                    </BoxAside>
                </BoxMain>
            )}
        </Container>
    )
}

export { DefaultMode }
