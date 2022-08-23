import { useState, useEffect } from 'react'
import Error from 'next/error'

import ReactMarkdown from 'react-markdown'

import { Box, Container, Grid, Typography } from '@mui/material'
import { LoadingProgress, CardArticle } from '@ciro/components/elements'

import { BoxMain, BoxAside, BoxContent } from '@ciro/components/elements'
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
            <BoxMain>
                <BoxContent>
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
                </BoxContent>
                <BoxAside>
                    <Typography
                        variant="articleTitle"
                        component="h1"
                        backgroundColor="secondary.main"
                    >
                        Artigos relacionados
                    </Typography>

                    {articles.map((article) => {
                        return (
                            <Box
                                key={article.id}
                                sx={{
                                    mb: 2,
                                    width: '100%',
                                }}
                            >
                                <CardArticle
                                    article={article}
                                    horizontal={true}
                                />
                            </Box>
                        )
                    })}
                </BoxAside>
            </BoxMain>
        </Container>
    )
}

export { getStaticPaths, getStaticProps }
export default PaginaArtigo
