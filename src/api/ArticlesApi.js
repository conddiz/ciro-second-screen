import axios from 'axios'

const getArticles = async () => {
    const { data } = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/articles/`,
    })

    return data
}

export { getArticles }
