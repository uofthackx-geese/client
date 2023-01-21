import React from 'react';
import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Header from '../../components/Header'
import { ReactComponent as FirstArrow } from './arrow1.svg';
import { ReactComponent as SecondArrow } from './arrow2.svg';
import { ReactComponent as ThirdArrow } from './arrow3.svg';
import { ReactComponent as FourthArrow } from './arrow4.svg';

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
}) => {
    const classes = useStyles();

    return (
        <>
            <FirstArrow className={classes.arrow1} />
            <SecondArrow className={classes.arrow2} />
            <ThirdArrow className={classes.arrow3} />
            <FourthArrow className={classes.arrow4} />

            <Box className={classes.explorePageContainer}>
                <Node title={originNodeInfo.title} description={originNodeInfo.description} type='originNode' />
                <Node title={firstNodeInfo.title} description={firstNodeInfo.description} type='firstNode' />
                <Node title={secondNodeInfo.title} description={secondNodeInfo.description} type='secondNode' />
                <Node title={thirdNodeInfo.title} description={thirdNodeInfo.description} type='thirdNode' />

                <Header page="EXPLORE" />
            </Box>

        </>
    )
}
