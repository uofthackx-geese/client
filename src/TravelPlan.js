import React, {useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles'
import Header from './components/Header'
import './TravelPlan.css'
import TypeChip from './components/TypeChip'
import DialogTP from './components/DialogTP'
import { getAllData, deleteDestination } from './pages/ExplorePage/api'
import Collapse from '@mui/material/Collapse';
import { Alert } from '@mui/material';

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
        overflowX: 'hidden',
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
    },
    emptyListText: {
        textAlign: 'center',
        marginLeft: '440px',
        fontWeight: 'bold',
        fontSize: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: 'white',
        width: 'fit-content',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
    }
})

export const TravelPlan = () => {
    const [isShowDialog, setIsShowDialog] = useState(false)
    const [payload, setPayload] = useState(null)
    const [travelPlan, setTravelPlan] = useState(null)
    const [isShowAlert, setIsShowAlert] = useState(false)

    const handleGetAllDestinations = async (user_id) => {
        const response =  await getAllData(user_id)
        return response
    }

    const maybeRemoveCity = (plan, city) => {
        for (let i =0; i < plan.response.length; ++i) {
            if (!plan.response[i].places.length) {
                plan.response = plan.response.filter(area => area.city !== city)
                return plan
            }
        }
        return plan
    }

    const handleDeleteDestination = async (city, destinationTitle, dest_id) => {
        let tempPlan = {...travelPlan}
        for (let i = 0; i < tempPlan?.response.length; ++i) {
            if (tempPlan.response[i].city === city) {
                tempPlan.response[i].places = tempPlan.response[i].places.filter(destination => destination.title !== destinationTitle)
                setTravelPlan(maybeRemoveCity(tempPlan, tempPlan.response[i].city))
                break
            }
        }
        const response = await deleteDestination(dest_id)
        setIsShowAlert(true)
        setTimeout(() => { // remove alert after 2 seconds
            setIsShowAlert(false)
        }, 2000)
    }

    const buildStructure = async () => {
        let newTemp = []
        let country_name = null
        let response_data = await handleGetAllDestinations(6)
        let temp = response_data.response.map(dest => {
            let exists = false
            for (let i = 0; i < newTemp.length; ++i) {
                if (dest[4] == newTemp[i].city) {
                    exists = true
                    break
                }
            }
            if (!exists) {
                newTemp.push({city: dest[4], places: []})
            }
            if (country_name == null) {
                country_name = dest[3]
            }
            return ({
                dest_id: dest[0],
                title: dest[1],
                type: dest[2],
                country: dest[3],
                city: dest[4],
                description: dest[5],
                imageURL: dest[6]
            })
        })
        for (let i = 0; i < newTemp.length; ++i) {
            for (let j = 0; j < temp.length; ++j) {
                if (temp[j].city === newTemp[i].city) {
                    newTemp[i].places.push({
                        title: temp[j].title,
                        type: temp[j].type,
                        description: temp[j].description,
                        dest_id: temp[j].dest_id,
                        imageURL: temp[j].imageURL
                    })
                }
            }
        }
        return {country: country_name, response: newTemp}
    }

    useEffect(() => {
        const getAllDest = async () => {
            const response_data = await buildStructure()
            setTravelPlan(response_data)
        }

        getAllDest()
    }, [])

    const classes = useStyles();

    return (
        <>
            <Collapse in={isShowAlert} sx={{zIndex: '1000', position: 'fixed', top: '100px', width: '80%', left: '10%'}}><Alert variant="filled" severity="success">Destination successfully deleted</Alert></Collapse>
            <div className={classes.container}>
                <div className={classes.innerThing}>
                    <div style={{height: '100px'}}></div>
                    <div id='TPcountry'><label>{travelPlan?.response?.length ? travelPlan?.country : null}</label></div>
                    <div id='TPsubbody'>
                        {travelPlan?.response.map(body => {
                           if (body.places.length) {
                            return (
                                <div key={body.city}>
                                    <div className='TPcity' onClick={() => {setIsShowDialog(true); setPayload({title: body.city, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut erat in mi blandit ultricies. Curabitur vulputate, justo id porttitor tincidunt, dolor orci egestas erat, non blandit tellus mauris ut risus. Vestibulum ut cursus nisi, sed aliquam magna. Phasellus vel varius turpis, non malesuada velit. Suspendisse accumsan tellus vel ex sodales.", isDelete: false});}}>{body.city}</div>
                                    <ol className={classes.orderedlist}>
                                        {body?.places?.map((item, index) => {
                                            return (
                                                <div 
                                                    className='liBox' 
                                                    onClick={() => {
                                                        setIsShowDialog(true); 
                                                        setPayload({
                                                            city: body.city, 
                                                            title: item.title, 
                                                            description: item.description, 
                                                            dest_id: item.dest_id, 
                                                            imageURL: item?.imageURL, 
                                                            isDelete: true 
                                                        });
                                                    }}
                                                    key={item.title}
                                                >
                                                    <div className={classes.liIndex}>{index + 1}</div> 
                                                    <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item.title}</div> 
                                                    <div><TypeChip type={item.type}/></div>
                                                </div>
                                            )
                                        })}
                                    </ol>
                                </div>
                            )
                           }
                           return <></>
                        }
                        )}
                        {!(travelPlan?.country && travelPlan?.response?.length) && <div className={classes.emptyListText}><div>Nothing to see here.</div><div>Build your travel plan now!</div></div>}
                    </div>
                </div>
            </div>
            <Header headerTitle='Travel Plan' buttonLabel='EXPLORE' buttonPathTo='/chooseCountry'/>
            <DialogTP isVisible={isShowDialog} setIsVisible={setIsShowDialog} payload={payload} handleDeleteDestination={handleDeleteDestination}/>
        </>
    )
}
