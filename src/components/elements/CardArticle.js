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

const CardArticle = ({ article }) => {
    return (
        <Link href={`/artigo/${article.slug}`}>
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
                    }}
                >
                    <CardMedia height="185px">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
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
