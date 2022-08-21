/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
    pwa: {
        dest: 'public',
        runtimeCaching,
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        mode: 'production',
    },

    env: {
        NEXT_PUBLIC_EMBED_DOMAIN: process.env.NEXT_PUBLIC_EMBED_DOMAIN,
        NEXT_PUBLIC_API_BACKEND_URL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
        RECAPTCHA_SITE: process.env.RECAPTCHA_SITE,
        RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,

        S3_BUCKET: process.env.S3_BUCKET,
        AWS_REGION: process.env.CLOUD_AWS_REGION,
        S3_KEY: process.env.CLOUD_AWS_ACCESS_KEY_ID,
        S3_SECRET: process.env.CLOUD_AWS_SECRET_ACCESS_KEY,
    },
}

module.exports = () => {
    const plugins = [withPWA]
    const config = plugins.reduce((acc, next) => next(acc), {
        ...nextConfig,
    })
    return config
}
