import React from 'react'
import { makeStyles } from '@mui/styles'
import Header from '../../components/Header'
import { SearchBar } from '../../components/SearchBar';
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { restartTP } from '../ExplorePage/api';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '56px',
    },
    head1: {
        color: 'rgb(12, 155, 198)',
        fontWeight: 'bold', 
        fontFamily: 'monospace',
        marginBottom: '24px',
    },
})

const luckyCountryPool = ['France', 'Spain', 'United States', 'China', 'Italy', 'Turkey', 'Mexico', 'Thailand', 'Germany', 'United Kingdom'];

const getRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

export const CountryPage = () => {
    const classes = useStyles();

    const navigate = useNavigate();

    const handleLuckyFeeling = () => {
        restartTP()
        const randomLuckyCountry = getRandomFromArray(luckyCountryPool);
        navigate(`/explore/${randomLuckyCountry}`);
    }

    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.content}>
                    <Typography variant='h1' className={classes.head1}><pre>TripTailor</pre></Typography>
                    <Box sx={{marginBottom: '8px', marginTop: '-80px'}}>
                        <SearchBar defaultText='Enter a country...'/>
                    </Box>
                    <Button variant='outlined' onClick={handleLuckyFeeling}>I'm Feeling Lucky</Button>
                </Box>
            </Box>
            <Header headerTitle='Explore' buttonLabel='Travel Plan' buttonPathTo='/travelplan'/>
        </>
    )
}
