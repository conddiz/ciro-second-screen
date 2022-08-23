import { useState } from 'react'

import { Box, Container } from '@mui/material'

import { YoutubePlayer } from '@ciro/components/main'
import { TwitterFeed } from '@ciro/components/aside'
import { BoxMain, BoxAside, BoxContent } from '@ciro/components/elements'

const CoverageMode = ({ config }) => {
    const [twitterId, setTwitterId] = useState(config.twitterId)
    const [videoId, setVideoId] = useState(config.videoId)

    return (
        <Container>
            <BoxMain id={config.id}>
                <BoxContent>
                    <Box>
                        <YoutubePlayer videoId={videoId} />
                    </Box>
                </BoxContent>
                <BoxAside>
                    <TwitterFeed twitterId={twitterId} />
                </BoxAside>
            </BoxMain>
        </Container>
    )
}

export { CoverageMode }
