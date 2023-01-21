import React, { useState } from 'react';
import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Header from '../../components/Header'
import { ReactComponent as FirstArrow } from './arrow1.svg';
import { ReactComponent as SecondArrow } from './arrow2.svg';
import { ReactComponent as ThirdArrow } from './arrow3.svg';
import { ReactComponent as FourthArrow } from './arrow4.svg';
import { NodeAnimation } from './NodeAnimation';

const useStyles = makeStyles({
    explorePageContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
    },
    arrow1: {
        position: 'absolute',
    },
    arrow2: {
        position: 'absolute',
    },
    arrow3: {
        position: 'absolute',
    },
    arrow4: {
        position: 'absolute',
    },
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

            <Box className={classes.explorePageContainer}>
                <NodeAnimation inProp={inProp} easeIn={500} easeOut={300}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <FirstArrow className={classes.arrow1} />
                    </Box>
                    <Node title={originNodeInfo.title} description={originNodeInfo.description} type='originNode' />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} easeIn={700} easeOut={500}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <SecondArrow className={classes.arrow2} />
                    </Box>
                    <Node title={firstNodeInfo.title} description={firstNodeInfo.description} type='firstNode' handleTravelClick={transitionHandleTravelClick} />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} easeIn={700} easeOut={500}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <ThirdArrow className={classes.arrow3} />
                    </Box>
                    <Node title={secondNodeInfo.title} description={secondNodeInfo.description} type='secondNode' handleTravelClick={transitionHandleTravelClick} />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} easeIn={700} easeOut={500}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <FourthArrow className={classes.arrow4} />
                    </Box>
                    <Node title={thirdNodeInfo.title} description={thirdNodeInfo.description} type='thirdNode' handleTravelClick={transitionHandleTravelClick} />
                </NodeAnimation>

            <Header page="TRAVEL PLAN" />
            </Box>

        </>
    )
}
