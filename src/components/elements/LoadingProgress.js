import { Box, CircularProgress } from '@mui/material'

const LoadingProgress = ({ loading, color = 'primary' }) => {
    return (
        <>
            {loading ? (
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '5px',
                    }}
                >
                    <CircularProgress color={color} />
                </Box>
            ) : (
                <></>
            )}
        </>
    )
}

export { LoadingProgress }
