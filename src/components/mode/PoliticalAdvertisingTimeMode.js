import { useState, useEffect } from 'react'

import { Box, Container } from '@mui/material'

import { YoutubePlayer } from '@ciro/components/main'
import { YoutubeChat } from '@ciro/components/aside'
import { BoxMain, BoxAside, BoxContent } from '@ciro/components/elements'

const PoliticalAdvertisingTimeMode = ({ config }) => {
    const [videoId, setVideoId] = useState('jOuvjQn6f_s')

    return (
        <Container>
            <BoxMain id={config.id}>
                <BoxContent>
                    <Box>
                        <YoutubePlayer videoId={config.videoId} />
                    </Box>
                </BoxContent>
                <BoxAside>
                    <YoutubeChat videoId={config.videoId} />
                </BoxAside>
            </BoxMain>
        </Container>

        // <Box
        //     id={config.id}
        //     sx={{
        //         height: '100%',
        //         width: '100%',
        //         display: 'flex',
        //         flexDirection: { sm: 'column', md: 'row' },
        //     }}
        //     component="section"
        // >

        // </Box>
    )
}

export { PoliticalAdvertisingTimeMode }
