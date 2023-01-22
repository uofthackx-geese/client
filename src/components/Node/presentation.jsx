import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { DescriptionTooltip } from '../DescriptionTooltip/DescriptionTooltip'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import './presentation.css'

const useStyles = makeStyles({
    nodeContainer: {
        display: 'flex',
        borderStyle: 'solid',
        borderRadius: '25px',
        borderColor: 'white',
        width: '200px',
        height: '100px',
        position: 'absolute',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    originNode: {
        left: '50%',
        marginLeft: '-100px', // Half of width
        top: '73%',
    },
    firstNode: {
        left: '20%',
        marginLeft: '-100px', // Half of width
        top: '35%',
    },
    secondNode: {
        left: '50%',
        marginLeft: '-100px', // Half of width
        top: '17%',
    },
    thirdNode: {
        left: '80%',
        marginLeft: '-100px', // Half of width
        top: '35%',
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
    handleTravelClick,
    isTerminal,
    type, // One of originNode, firstNode, secondNode, thirdNode
    isAbleToAddToTrip,
    handleAddToTrip,
}) => {
    const classes = useStyles();

    const handleClick = handleTravelClick ? () => handleTravelClick(title) : () => {}

    return (
        <DescriptionTooltip title={title} description={description || ''}>
            <Box className={`${classes.nodeContainer} ${classes[type]}`} onClick={handleClick}>
                <div className={classes.nodeContent}>
                    {title}
                </div>
                {isTerminal && <div><BsFillPlusSquareFill className='plus-icon'/></div>}
            </Box>
        </DescriptionTooltip>
    )
}
