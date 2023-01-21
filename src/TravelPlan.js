import React from 'react'
import { makeStyles } from '@mui/styles'
import { fabClasses } from '@mui/material'
import Header from './components/Header'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    header: {
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '100px',
    },
    innerThing: {
        width: '100%',
        height: '900px',
        backgroundColor: 'lightblue',
    },
    mySpan: {
        color: 'black',
    },
    head1: {
        color: 'darkblue',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    head2: {
        color: 'black',
    },
    label: {
        color: 'black',
        justifyContent: 'center',
    },
    btn: {
        width: '60px',
        height: '30px',
        fontWeight: 'bold',
        backgroundColor: 'darkblue',
        fontSize: '20px',
    },
    orderedlist: {
        listStyle: 'decimal',
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: '565px',
        marginRight: 'auto',
    },
    li: {
        margin: '10px',
    }
})

export const TravelPlan = () => {
    const arr = ['Ontario Science Centre', 'CN Tower', 'Royal Ontario Museum', '...']
    console.log('in travel plan');

    const classes = useStyles();

    return (
        <>
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <h1 className={classes.head1}>Travel Plan</h1>

                <br></br>

                <ol className={classes.orderedlist}>{arr.map(item => <div><li className={classes.li}>{item}</li></div>)}</ol>
            </div>
        </div >
        <Header page="EXPLORE"/>
        </>
    )
}