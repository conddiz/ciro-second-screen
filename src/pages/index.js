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
    const videoId = 'FP9I_07p2dY'
    console.log('config', config)

    const [mode, setMode] = useState('Horário Eleitoral')

    return (
        <Box
            my={4}
            sx={{
                height: { xs: '90vh', md: '100%' },
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                itemsAlign: 'flex-start',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
            }}
        >
            <h1>{config.mode}</h1>
            {config.mode === SYSTEM_MODE.PADRAO && <DefaultMode />}

            {config.mode === SYSTEM_MODE.COBERTURA && <CoverageMode />}

            {config.mode === SYSTEM_MODE.DEBATE && <DebateMode />}

            {config.mode === SYSTEM_MODE.HORARIO_ELEITORAL && (
                <PoliticalAdvertisingTimeMode />
            )}
        </Box>
    )
}

export { getStaticProps }
export default Home
