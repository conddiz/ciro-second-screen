import axios from 'axios'

import { createBackendApiUrl } from '@ciro/lib'

const handler = async (req, res) => {
    const { method, query } = req

    if (method !== 'GET') {
        return res.status(404).json({ message: 'Serviço não encontrado' })
    }

    const config = await axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/ciro-tv`,
        params: {
            populate: '*',
        },
    })

    const { artigo_tags } = config.data.data
    const tags = artigo_tags.map((tag) => tag.slug)

    const params = {
        filters: {
            tags: {
                slug: {
                    $in: tags,
                },
            },
        },
        populate: {
            tags: '*',
            image: '*',
        },
        sort: {
            id: 'ASC',
        },
    }

    const url = createBackendApiUrl('/artigos', params)

    try {
        const { data } = await axios({
            method: 'GET',
            url: url,
        })

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(data.data))
    } catch (error) {
        console.log(error)
        res.json(error)
        return res.status(500).end()
    }
}

export default handler
