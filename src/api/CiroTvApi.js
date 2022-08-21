import axios from 'axios'

const getCiroTvConfig = async () => {
    const config = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/ciro-tv`
    )

    return config.data
}

export { getCiroTvConfig }
