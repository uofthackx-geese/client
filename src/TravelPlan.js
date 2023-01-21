import React from 'react'
import { makeStyles } from '@mui/styles'
import { fabClasses } from '@mui/material'
import Header from './components/Header'
import {RxCross1} from 'react-icons/rx'
import './TravelPlan.css'

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
        minHeight: '900px',
        height: '100%',
        backgroundColor: 'lightblue',
        paddingLeft: '5%'
    },
    mySpan: {
        color: 'black',
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
        width: '100%'
    },
    liIndex: {
        border: '1px rgba(0, 0, 0, 0.3) solid',
        padding: '5px',
        borderRadius: '3px'
    }
})

export const TravelPlan = () => {
    const arr = ['Ontario Science Centre', 'CN Tower', 'Royal Ontario Museumdedewddewefwfweedewddewefwfweedewddewefwfwe']
    console.log('in travel plan');

    const classes = useStyles();

    return (
        <>
        <div className={classes.container}>
            <div className={classes.innerThing}>
                <div style={{height: '100px'}}></div>
                <div id='TPcountry'>Canada</div>
                <div id='TPsubbody'>
                    <div>
                        <div className='TPcity'>Toronto</div>
                        <ol className={classes.orderedlist}>{arr.map((item, index) => <div className='liBox'><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item}</div> <div id='liCross'><RxCross1/></div></div>)}</ol>
                    </div>
                    <div>
                        <div className='TPcity'>Ottawa</div>
                        <ol className={classes.orderedlist}>{arr.map((item, index) => <div className='liBox'><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item}</div> <div id='liCross'><RxCross1/></div></div>)}</ol>
                    </div>
                    <div>
                        <div className='TPcity'>Vancouver</div>
                        <ol className={classes.orderedlist}>{arr.map((item, index) => <div className='liBox'><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item}</div> <div id='liCross'><RxCross1/></div></div>)}</ol>
                    </div>
                </div>
            </div>
        </div>
        <Header page="EXPLORE"/>
        </>
    )
}
