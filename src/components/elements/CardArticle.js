import Image from 'next/image'
import Link from 'next/link'

import {
    Box,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    CardMedia,
    Divider,
    Typography,
} from '@mui/material'

const CardArticle = ({ article, horizontal = false }) => {
    return (
        <Link href={`/artigo/${article.slug}`} passHref={true}>
            <Box
                component="a"
                sx={{
                    textDecoration: 'none',
                }}
            >
                <Card
                    sx={{
                        borderRadius: '0',
                        height: '100%',
                        display: 'flex',
                        maxHeight: {
                            xs: '100%',
                            sm: horizontal ? '185px' : '100%',
                            md: horizontal ? '185px' : '100%',
                            lg: '100%',
                            xl: '100%',
                        },
                        flexDirection: {
                            xs: 'column',
                            sm: horizontal ? 'row' : 'column',
                            md: horizontal ? 'row' : 'column',
                            lg: 'column',
                            xl: 'column',
                        },
                    }}
                >
                    <CardMedia>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: {
                                    xs: '100%',
                                    sm: horizontal ? '185px' : '100%',
                                    md: horizontal ? '185px' : '100%',
                                    lg: '100%',
                                    xl: '100%',
                                },
                                height: '185px',
                                justifyContent: 'flex-end',
                                position: 'relative',
                            }}
                        >
                            {' '}
                            {article.image && (
                                <Image
                                    src={article.image.url}
                                    objectFit="cover"
                                    layout="fill"
                                />
                            )}
                        </Box>
                    </CardMedia>

                    <CardContent>
                        <Typography variant="cardTitle" component="h2">
                            {article.title}
                        </Typography>
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
                                {article.excerpt}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Link>
    )
}

export { CardArticle }
