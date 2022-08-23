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
            <Box
                sx={{
                    // flexGrow: 1,
                    display: 'flex',
                    flexDirection: { md: 'column', lg: 'row' },
                    gap: 2,
                }}
                component="section"
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        pt: '60px',
                        pb: '80px',
                    }}
                >
                    <Typography variant="articleTitle" component="h1">
                        {article.title}
                    </Typography>
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
                    id={article.id}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        height: '100%',
                        backgroundColor: 'neutral.light',
                        pt: '80px',
                        pb: '80px',
                        px: '20px',
                        maxHeight: '200vh',
                        overflowY: 'scroll',
                    }}
                    component="aside"
                >
                    {articles.map((article) => {
                        return (
                            <Box key={article.id}>
                                <CardArticle article={article} />
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Container>
    )
}

export { getStaticPaths, getStaticProps }
export default PaginaArtigo
