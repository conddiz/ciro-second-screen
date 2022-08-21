import Image from 'next/image'

import { Box } from '@mui/material'

const SocialMediaSection = ({ children }) => {
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                bgcolor: 'tertiary.darker',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '30px',
                py: '15px',
                height: '200px',
            }}
        >
            <Box></Box>

            <Box></Box>
        </Box>
    )
}

export { SocialMediaSection }
