import qs from 'qs'

const createBackendApiUrl = (path, params) => {
    const query = qs.stringify(params, {
        encodeValuesOnly: true,
    })

    const finalUrl = new URL(
        `${process.env.NEXT_PUBLIC_API_BACKEND_URL}${path}?${query}`
    )

    return finalUrl + ''
}

const createFrontendApiUrl = (path, params) => {
    const query = qs.stringify(params, {
        encodeValuesOnly: true,
    })

    const finalUrl = new URL(
        `${process.env.NEXT_PUBLIC_API_FRONTEND_URL}${path}?${query}`
    )

    return finalUrl + ''
}

export { createBackendApiUrl, createFrontendApiUrl }
