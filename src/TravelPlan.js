import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    innerThing: {
        paddingLeft: '20px',
        width: '100%',
        height: '900px',
        backgroundColor: 'black',
    },
    mySpan: {
        color: 'white',
    },
    head1: {
        color: 'white',
        width: '500px',
        justifyContent: 'center',
    },
    head2: {
        color: 'white',
    },
    label: {
        color: 'white',
        justifyContent: 'center',
    },
    btn: {
        width: '60px',
        height: '30px',
        fontWeight: 'bold',
        backgroundColor: 'lightcoral',
        fontSize: '20px',
    },
})

export const TravelPlan = () => {
    const arr = ['Ontario Science Centre', 'CN Tower', 'Royal Ontario Museum', '...']
    console.log('in travel plan');

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <h1 className={classes.head1}>Travel Plan</h1>

                <br></br>

                {arr.map(item => <div className={classes.head1} > {item}</div>)}
            </div>
        </div >
    )
}