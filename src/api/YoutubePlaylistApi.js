import axios from 'axios'

const getYoutubePlaylist = async () => {
    const { data } = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}/playlist/`,
    })

    return data
}

export { getYoutubePlaylist }
