import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerThing: {
        width: '800px',
        height: '600px',
        backgroundColor: 'black',
    },
    mySpan: {
        color: 'white',
    }
})

export const Demo = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <span className={classes.mySpan}>This is the text.</span>
            </div>
        </div>
    )
}
