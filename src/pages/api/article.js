import axios from 'axios'

import { createBackendApiUrl } from '@ciro/lib'

const handler = async (req, res) => {
    const { method, query } = req

    if (method !== 'GET') {
        return res.status(404).json({ message: 'Serviço não encontrado' })
    }

    const { slug } = query

    if (!slug) {
        return res.status(400).json({ message: 'Parâmetro slug é obrigatório' })
    }

    const params = {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            tags: '*',
            image: '*',
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
        return res.end(JSON.stringify(data.data[0]))
    } catch (error) {
        console.log(error)
        res.json(error)
        return res.status(500).end()
    }
}

export default handler
