import React, { useState } from 'react';
import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Header from '../../components/Header';
import { NodeAnimation } from './NodeAnimation';

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

    // Used for animation
    const [inProp, setInProp] = useState(true);
    const transitionHandleTravelClick = (arg) => {
        setInProp(!inProp);
        handleTravelClick(arg);
    }

    return (
        <>
            <Header page="TRAVEL PLAN"/>
            <Box className={classes.explorePageContainer}>
                <NodeAnimation inProp={inProp} easeIn={500} easeOut={300}>
                    <Node title={originNodeInfo.title} description={originNodeInfo.description} type='originNode' />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} easeIn={700} easeOut={500}>
                    <Node title={firstNodeInfo.title} description={firstNodeInfo.description} type='firstNode' handleTravelClick={transitionHandleTravelClick} />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} easeIn={700} easeOut={500}>
                    <Node title={secondNodeInfo.title} description={secondNodeInfo.description} type='secondNode' handleTravelClick={transitionHandleTravelClick} />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} easeIn={700} easeOut={500}>
                    <Node title={thirdNodeInfo.title} description={thirdNodeInfo.description} type='thirdNode' handleTravelClick={transitionHandleTravelClick} />
                </NodeAnimation>
            </Box>
        </>
    )
}
