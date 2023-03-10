import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { DescriptionTooltip } from '../DescriptionTooltip/DescriptionTooltip'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import {MdOutlineDoneOutline} from 'react-icons/md'
import { getImage } from '../../pages/ExplorePage/api';
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
        flexDirection: 'column',
        alignItems: 'center',
        transition: '0.5s',
        '&:hover': {
            fontWeight: 'bold'
        }
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
    const [imageURL, setImageURL] = useState(null)
    useEffect(() => {
        const handleImage = async () => {
            if (description) {
                const response = await getImage(title)
                setImageURL(response?.results?.length >= 2 ? response.results[1].urls.raw : response?.results?.length ? response.results[0].urls.raw : null) // get the 5th image url, if exists, and set it to display to UI
            } else {
                setImageURL(null)
            }
        }
        if (isDisabled) {
            setIsDisabled(false);
        }
        handleImage()
    }, [title])

    const handleClick = handleTravelClick ? () => handleTravelClick(title) : () => {}

    return (
        <>
            <DescriptionTooltip title={title} description={description || ''} imageURL={imageURL}>
                <Box className={`${classes.nodeContainer} ${classes[type]}`} onClick={handleClick}>
                    <div className={classes.nodeContent}>
                        {title}
                    </div>
                    {isTerminal && !isDisabled && <div><BsFillPlusSquareFill className='plus-icon' onClick={() => {handleAddDestination(title, description, imageURL); setIsDisabled(true);}}/></div>}
                    {isDisabled && <div className='done-icon'><MdOutlineDoneOutline style={{backgroundColor: '#03C03C', padding: '5px', borderRadius: '50%'}}/></div>}
                </Box>
            </DescriptionTooltip>
        </>
    )
}
