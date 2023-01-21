import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Loader = () => {
    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <Box sx={{ margin: 'auto' }}>
                <CircularProgress />
            </Box>
        </Box>
    );
}
