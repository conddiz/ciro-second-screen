import axios from 'axios'

const getArticles = async () => {
    const { data } = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/articles/`,
    })

    return data
}

const getArticlesPaths = async () => {
    const { data: artigos } = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/articles/`,
    })

    // return data.map(({ slug }) => slug)

    const paths = artigos.map(({ slug }) => {
        const params = {
            slug: slug,
        }

        return {
            params: params,
        }
    })

    return paths
}

const getArticleData = async (slug) => {
    const { data } = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/article/`,
        params: {
            slug: slug,
        },
    })

    return data
}

export { getArticles, getArticlesPaths, getArticleData }
