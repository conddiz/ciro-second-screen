import { useState } from 'react'

import { Box } from '@mui/material'
import { Timeline } from 'react-twitter-widgets'
import { LoadingProgress } from '@ciro/components/elements'

const TwitterFeed = ({ twitterId }) => {
    console.log('twitterId', twitterId)
    const [loading, setLoading] = useState(true)

    return (
        <Box component="aside">
            <LoadingProgress loading={loading} />
            {/* <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: { twitterId },
                }}
                options={{
                    chrome: 'noheader, nofooter, noscrollbar',
                }}
                // onLoad={() => setLoading(false)}
            /> */}

            <Timeline
                dataSource={{
                    sourceType: 'url',
                    url: `https://twitter.com/${twitterId}`,
                }}
                onLoad={() => setLoading(false)}
            />
        </Box>
    )
}

export { TwitterFeed }
