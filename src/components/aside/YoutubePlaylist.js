import React from 'react'

import Image from 'next/image'

import {
    Box,
    List,
    ListItem,
    Typography,
    Button,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    CardMedia,
    Divider,
} from '@mui/material'

import { BsPlayFill, BsYoutube } from 'react-icons/bs'

import { getYoutubePlaylist } from '@ciro/api'

const YoutubePlaylist = ({ playlist, setVideoId, horizontal = false }) => {
    const handleClick = (videoId) => {
        setVideoId(videoId)
    }

    return (
        <Box>
            <List>
                {playlist.items.map((item) => (
                    <Card
                        key={item.snippet.resourceId.videoId}
                        sx={{
                            borderRadius: '0',
                            height: '100%',
                            display: 'flex',
                            maxHeight: {
                                xs: horizontal ? '185px' : '100%',
                                sm: horizontal ? '185px' : '100%',
                                md: horizontal ? '185px' : '100%',
                                lg: '100%',
                                xl: '100%',
                            },
                            flexDirection: {
                                xs: horizontal ? 'row' : 'column',
                                sm: horizontal ? 'row' : 'column',
                                md: horizontal ? 'row' : 'column',
                                lg: 'column',
                                xl: 'column',
                            },
                            mb: '20px',
                        }}
                        onClick={() =>
                            handleClick(item.snippet.resourceId.videoId)
                        }
                    >
                        <CardMedia
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: {
                                        xs: horizontal ? '185px' : '100%',
                                        sm: horizontal ? '185px' : '100%',
                                        md: horizontal ? '185px' : '100%',
                                        lg: '100%',
                                        xl: '100%',
                                    },
                                    height: '185px',
                                    justifyContent: 'flex-end',
                                    position: 'relative',

                                    '& button': {
                                        position: 'absolute',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '85px',
                                        height: '85px',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'primary.lighter',
                                        borderRadius: '999px',
                                        zIndex: '2',
                                        border: '3px solid',
                                        borderColor: 'tertiary.darker',
                                        padding: '0',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <button type="button">
                                    <BsPlayFill
                                        color="#0F237C"
                                        fontSize="90px"
                                        style={{ transform: 'translateX(5px)' }}
                                    />
                                </button>
                                <Image
                                    src={item.snippet.thumbnails.medium.url}
                                    objectFit="cover"
                                    layout="fill"
                                />
                            </Box>
                        </CardMedia>

                        <CardContent>
                            <Typography
                                variant="cardTitle"
                                component="h2"
                                margin="0"
                            >
                                {item.snippet.title}
                            </Typography>
                            {horizontal && (
                                <Box
                                    sx={{
                                        display: {
                                            xs: 'flex',
                                            sm: 'flex',
                                            md: 'flex',
                                            lg: 'none',
                                            xl: 'none',
                                        },
                                    }}
                                >
                                    <Divider />
                                    <Box
                                        sx={{
                                            paddingRight: '10px',
                                            marginTop: '24px',
                                            wordBreak: 'break-word',
                                            maxHeight: '150px',
                                            overflowY: 'auto',
                                            display: 'block',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            component="p"
                                            sx={{
                                                fontSize: '14px',
                                                fontFamily: 'Montserrat',
                                                fontWeight: '400',
                                                color: 'tertiary.darker',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            {item.snippet.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </List>
        </Box>
    )
}

export { YoutubePlaylist }
