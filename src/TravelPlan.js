import React, {useState} from 'react'
import { makeStyles } from '@mui/styles'
import Header from './components/Header'
import {RxCross1} from 'react-icons/rx'
import './TravelPlan.css'
import TypeChip from './components/TypeChip'
import DialogTP from './components/DialogTP'

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
    const [isShowDialog, setIsShowDialog] = useState(false)
    const [payload, setPayload] = useState(null)

    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.innerThing}>
                    <div style={{height: '100px'}}></div>
                    <div id='TPcountry'>Canada</div>
                    <div id='TPsubbody'>
                        <div>
                            <div className='TPcity' onClick={() => {setIsShowDialog(true); setPayload({title: "Toronto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut erat in mi blandit ultricies. Curabitur vulputate, justo id porttitor tincidunt, dolor orci egestas erat, non blandit tellus mauris ut risus. Vestibulum ut cursus nisi, sed aliquam magna. Phasellus vel varius turpis, non malesuada velit. Suspendisse accumsan tellus vel ex sodales."});}}>Toronto</div>
                            <ol className={classes.orderedlist}>{arr.map((item, index) => <div className='liBox' onClick={() => {setIsShowDialog(true); setPayload({title: item, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut erat in mi blandit ultricies. Curabitur vulputate, justo id porttitor tincidunt, dolor orci egestas erat, non blandit tellus mauris ut risus. Vestibulum ut cursus nisi, sed aliquam magna. Phasellus vel varius turpis, non malesuada velit. Suspendisse accumsan tellus vel ex sodales.'});}}><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item}</div> <div><TypeChip type="restaurants"/></div> <div id='liCross'><RxCross1/></div></div>)}</ol>
                        </div>
                        <div>
                            <div className='TPcity'>Ottawa</div>
                            <ol className={classes.orderedlist}>{arr.map((item, index) => <div className='liBox'><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item}</div> <div><TypeChip type="shopping malls"/></div> <div id='liCross'><RxCross1/></div></div>)}</ol>
                        </div>
                        <div>
                            <div className='TPcity'>Vancouver</div>
                            <ol className={classes.orderedlist}>{arr.map((item, index) => <div className='liBox'><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item}</div> <div><TypeChip type="hotels"/></div> <div id='liCross'><RxCross1/></div></div>)}</ol>
                        </div>
                    </div>
                </div>
            </div>
            <Header page="EXPLORE"/>
            <DialogTP isVisible={isShowDialog} setIsVisible={setIsShowDialog} payload={payload}/>
        </>
    )
}
