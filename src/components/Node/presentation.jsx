import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'

const useStyles = makeStyles({
    nodeContainer: {
        borderStyle: 'solid',
        width: '100px',
        height: '100px',
        position: 'absolute',
    },
    originNode: {
        left: '50%',
        marginLeft: '-50px', // Half of width
        top: '68%',
    },
    secondNode: {
        left: '50%',
        marginLeft: '-50px', // Half of width
        top: '12%',
    },
    thirdNode: {
        left: '50%',
        marginLeft: '-50px', // Half of width
        top: '12%',
    },
})

export const NodePresentation = ({
    title,
    description,
    type, // One of originNode, firstNode, secondNode, thirdNode
    isAbleToAddToTrip,
    handleAddToTrip,
}) => {
    const classes = useStyles();
    
    return (
        <Box className={`${classes.nodeContainer} ${classes[type]}`}>
            {title} {description}
        </Box>
    )
}
