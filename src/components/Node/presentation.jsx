import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { DescriptionTooltip } from '../DescriptionTooltip/DescriptionTooltip'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import {MdOutlineDoneOutline} from 'react-icons/md'
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
    handleAddDestination
}) => {
    const classes = useStyles();
    const [isDisabled, setIsDisabled] = useState(false)

    const handleClick = handleTravelClick ? () => handleTravelClick(title) : () => {}

    return (
        <>
            <DescriptionTooltip title={title} description={description || ''}>
                <Box className={`${classes.nodeContainer} ${classes[type]}`} onClick={handleClick}>
                    <div className={classes.nodeContent}>
                        {title}
                    </div>
                    {isTerminal && !isDisabled && <div><BsFillPlusSquareFill className='plus-icon' onClick={() => {handleAddDestination(title, description); setIsDisabled(true);}}/></div>}
                    {isDisabled && <div className='done-icon'><MdOutlineDoneOutline style={{backgroundColor: '#03C03C', padding: '5px', borderRadius: '50%'}}/></div>}
                </Box>
            </DescriptionTooltip>
        </>
    )
}
