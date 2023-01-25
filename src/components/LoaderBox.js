import React from "react";
import { Box, CircularProgress } from '@mui/material'

export const LoaderBox = () => {

    return (
        <Box sx={{padding: '2rem', backgroundColor: 'white', width: 'fit-content', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 50% 0 auto', gap: '1rem'}}>
            <div><h3>Loading</h3></div>
            <div><CircularProgress/></div>
        </Box>
    )

}