import React from 'react'

import Image from 'next/image'

import { Box, List, ListItem, Typography, Button } from '@mui/material'

import { getYoutubePlaylist } from '@ciro/api'

const YoutubePlaylist = ({ playlist, setVideoId }) => {
    const handleClick = (videoId) => {
        setVideoId(videoId)
    }

    return (
        <Box>
            <List>
                {playlist.items.map((item) => (
                    <ListItem
                        key={item.snippet.resourceId.videoId}
                        sx={{
                            px: '0px',
                            py: '0px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyItems: 'flex-start',
                            flexDirection: { sm: 'row', md: 'column' },
                        }}
                        onClick={() =>
                            handleClick(item.snippet.resourceId.videoId)
                        }
                    >
                        <Image
                            src={item.snippet.thumbnails.medium.url}
                            width="600px"
                            height="337px"
                        />
                        <Box sx={{ width: '100%', wordWrap: 'break-word' }}>
                            <Typography
                                sx={{
                                    fontSize: { sm: '1.5rem', md: '1.2rem' },
                                    fontWeight: 'bold',
                                    color: 'tertiary.darker',
                                    display: 'inline-block',
                                }}
                            >
                                {item.snippet.title}
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export { YoutubePlaylist }
