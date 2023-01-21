import React from 'react';
import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    explorePageContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'yellow',
    }
})

export const ExplorePagePresentation = () => {
    const classes = useStyles();

    return (
        <Box className={classes.explorePageContainer}>
            <Node title='originNode' description='desc1' type='originNode'/>
            <Node title='firstNode' description='desc2' type='firstNode'/>
            <Node title='secondNode' description='desc3' type='secondNode'/>
            <Node title='thirdNode' description='desc4' type='thirdNode'/>
        </Box>
    )
}
