import React from 'react';
import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = () => makeStyles({
    explorePageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow'
    }
})

export const ExplorePagePresentation = () => {
    const classes = useStyles();
        
    return (
        <Box className={classes.explorePageContainer}>
            <Node title='node1' description='desc1'/>
            <Node title='node2' description='desc2'/>
            <Node title='node3' description='desc3'/>
        </Box>
    )
}
