import { useState, useEffect } from 'react'
import Error from 'next/error'

import ReactMarkdown from 'react-markdown'

import { Box, Container, Grid, Typography } from '@mui/material'
import { LoadingProgress, CardArticle } from '@ciro/components/elements'

import { getArticles, getArticlesPaths, getArticleData } from '@ciro/api'

const getStaticPaths = async () => {
    const paths = await getArticlesPaths()

    return {
        paths: paths,
        fallback: false,
    }
}

const getStaticProps = async ({ params }) => {
    try {
        const { slug } = params

        const article = await getArticleData(slug)

        const articles = await getArticles(article.tags)

        return {
            props: {
                article: article,
                articles: articles,
            },
            revalidate: parseInt(process.env.STATIC_PAGES_TTL),
        }
    } catch (error) {
        return {
            props: {
                error: error,
            },
            revalidate: parseInt(process.env.STATIC_PAGES_TTL),
        }
    }
}

const PaginaArtigo = ({ article, articles, error }) => {
    console.log('article', article)
    console.log('articles', articles)

    if (!article) {
        return <Error statusCode={404} />
    }

    if (error) {
        return <Error statusCode={500} />
    }

    return (
        <Container sx={{}}>
            <Typography variant="articleTitle" component="h1" sx={{ mb: 0 }}>
                {article.title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'column',
                        lg: 'row',
                        xl: 'row',
                    },
                    gap: 2,
                }}
                component="section"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        pt: '20px',
                        pb: { md: '20px', lg: '80px' },
                        width: { md: '100%', lg: '70%' },
                    }}
                >
                    <Typography variant="articleDate" component="div">
                        Publicado em{' '}
                        {new Date(article.createdAt).toLocaleDateString()} |
                        Atualizado em{' '}
                        {new Date(article.createdAt).toLocaleDateString()}
                    </Typography>
                    <Box
                        sx={{
                            fontSize: { sm: '1rem', md: '1.2rem' },
                        }}
                    >
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: { md: '100%', lg: '30%' },
                        backgroundColor: { md: '', lg: 'neutral.light' },
                        py: '20px',
                        px: { md: '0px', lg: '20px' },
                        overflowY: {
                            md: 'initial',
                            lg: 'scroll',
                        },
                    }}
                    component="aside"
                >
                    <Box
                        sx={{
                            flexBasis: { md: '', lg: '0px' },
                            flexGrow: '1',
                            overflowY: {
                                md: 'initial',
                                lg: 'auto',
                            },
                            gap: 4,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            variant="articleTitle"
                            component="h1"
                            backgroundColor="secondary.main"
                        >
                            Artigos relacionados
                        </Typography>

                        {articles.map((article) => {
                            return (
                                <Box key={article.id}>
                                    <CardArticle article={article} />
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export { getStaticPaths, getStaticProps }
export default PaginaArtigo
