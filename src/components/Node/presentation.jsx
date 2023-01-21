import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'

const useStyles = makeStyles({
    nodeContainer: {
        display: 'flex',
        borderStyle: 'solid',
        borderRadius: '25px',
        borderColor: 'white',
        width: '200px',
        height: '100px',
        position: 'absolute',
    },
    originNode: {
        left: '50%',
        marginLeft: '-100px', // Half of width
        top: '68%',
    },
    firstNode: {
        left: '20%',
        marginLeft: '-100px', // Half of width
        top: '30%',
    },
    secondNode: {
        left: '50%',
        marginLeft: '-100px', // Half of width
        top: '12%',
    },
    thirdNode: {
        left: '80%',
        marginLeft: '-100px', // Half of width
        top: '30%',
    },
    nodeContent: {
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
    }
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
            <div className={classes.nodeContent}>
                {title}
            </div>
        </Box>
    )
}
