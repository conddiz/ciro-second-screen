import { useEffect, useState } from 'react'
import { Box, Container, Button } from '@mui/material'

import {
    CoverageMode,
    DebateMode,
    DefaultMode,
    PoliticalAdvertisingTimeMode,
} from '@ciro/components/mode'
import { getCiroTvConfig } from '@ciro/api'
import { SYSTEM_MODE } from '@ciro/constants'

const getStaticProps = async ({ params }) => {
    const config = await getCiroTvConfig()

    return {
        props: {
            config: config.data,
        },
        revalidate: parseInt(process.env.STATIC_PAGES_TTL),
    }
}

const Home = ({ config }) => {
    console.log('config', config)

    return (
        <>
            {config.mode === SYSTEM_MODE.PADRAO.id && (
                <DefaultMode config={config} />
            )}

            {config.mode === SYSTEM_MODE.COBERTURA.id && (
                <CoverageMode config={config} />
            )}

            {config.mode === SYSTEM_MODE.DEBATE.id && (
                <DebateMode config={config} />
            )}

            {config.mode === SYSTEM_MODE.HORARIO_ELEITORAL.id && (
                <PoliticalAdvertisingTimeMode config={config} />
            )}
        </>
    )
}

export { getStaticProps }
export default Home
