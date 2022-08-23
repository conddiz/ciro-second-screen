import axios from 'axios'

const getCiroTvConfig = async () => {
    const config = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/ciro-tv`,
        params: {
            populate: '*',
        },
    })
    return config.data
}

export { getCiroTvConfig }
