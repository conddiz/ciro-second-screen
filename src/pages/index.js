import { useEffect, useState } from 'react'
import { Box, Container, Button } from '@mui/material'

import { PoliticalAdvertisingTimeMode } from '@ciro/components/mode'
const Home = () => {
    const videoId = 'FP9I_07p2dY'

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
            <PoliticalAdvertisingTimeMode />
        </Box>
    )
}

export default Home
