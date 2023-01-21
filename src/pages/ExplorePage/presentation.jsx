import React from 'react';
import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Header from '../../components/Header';

const useStyles = makeStyles({
    explorePageContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
    }
})

export const ExplorePagePresentation = ({
    originNodeInfo,
    firstNodeInfo,
    secondNodeInfo,
    thirdNodeInfo,
    handleTravelClick,
}) => {
    const classes = useStyles();
    
    return (
        <>
            <Header page="TRAVEL PLAN"/>
            <Box className={classes.explorePageContainer}>
                <Node title={originNodeInfo.title} description={originNodeInfo.description} type='originNode' />
                <Node title={firstNodeInfo.title} description={firstNodeInfo.description} type='firstNode' handleTravelClick={handleTravelClick} />
                <Node title={secondNodeInfo.title} description={secondNodeInfo.description} type='secondNode' handleTravelClick={handleTravelClick} />
                <Node title={thirdNodeInfo.title} description={thirdNodeInfo.description} type='thirdNode' handleTravelClick={handleTravelClick} />
            </Box>
        </>
    )
}
