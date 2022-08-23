import { useEffect, useState } from 'react'
import { Box, Container, Button } from '@mui/material'

import {
    CoverageMode,
    DebateMode,
    DefaultMode,
    PoliticalAdvertisingTimeMode,
} from '@ciro/components/mode'
import { getCiroTvConfig, getYoutubePlaylist } from '@ciro/api'
import { SYSTEM_MODE } from '@ciro/constants'

const getStaticProps = async ({ params }) => {
    const { data: config } = await getCiroTvConfig()
    return {
        props: {
            config: config,
        },
        revalidate: parseInt(process.env.STATIC_PAGES_TTL),
    }
}

const Home = ({ config }) => {
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
