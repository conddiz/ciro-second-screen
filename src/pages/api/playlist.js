import axios from 'axios'

const handler = async (req, res) => {
    const { method } = req

    if (method !== 'GET') {
        return res.status(404).json({ message: 'Serviço não encontrado' })
    }

    try {
        const { data } = await axios({
            method: 'GET',
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/ciro-tv-config/`,
            params: {
                field: 'youtubePlaylistJson',
            },
        })

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(data.data))
    } catch (error) {
        res.json(error)
        return res.status(500).end()
    }
}

export default handler
