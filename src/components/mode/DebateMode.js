import { useState, useEffect } from 'react'

import { Box, Container, Grid, Typography } from '@mui/material'
import Masonry from '@mui/lab/Masonry'

import { LoadingProgress, CardArticle } from '@ciro/components/elements'
import { getArticles } from '@ciro/api'

const DebateMode = ({ config }) => {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [videoId, setVideoId] = useState(null)

    useEffect(() => {
        const fetchPlaylist = async () => {
            const articles = await getArticles(config.artigo_tags)
            console.log(articles)

            setArticles(articles)
            setLoading(false)
        }
        fetchPlaylist()
    }, [])

    return (
        <Container sx={{ mb: 5 }}>
            <Typography variant="pageTitle" component="h1">
                Artigos
            </Typography>
            <LoadingProgress loading={loading} />
            {!loading && articles && (
                <Box
                    container
                    spacing={8}
                    id={config.id}
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr',
                        },
                        justifyContent: 'space-between',

                        gap: 5,
                    }}
                    component="section"
                >
                    {articles.map((article) => {
                        return (
                            <Grid key={article.id} xs={12} md={4}>
                                <CardArticle article={article} />
                            </Grid>
                        )
                    })}
                </Box>
            )}
        </Container>
    )
}

export { DebateMode }
