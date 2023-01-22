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
    /*const [travelPlan, setTravelPlan] = useState({
        country: 'Canada',
        response: [
            {
                city: 'Toronto',
                places: [
                    {
                        title: 'Ontario Science Centre',
                        type: 'restaurant',
                        description: 'fwefwfwfwfw'
                    },
                    {
                        title: 'CN Tower',
                        type: 'shopping mall',
                        description: '382r238hio2h23hr32rh293hr- 293rh3rh92'
                    },
                    {
                        title: 'Royal Ontario Gallery',
                        type: 'hotel',
                        description: 'ee2e21c 328ry23 r9rh2hf'
                    }
                ]
            },
            {
                city: 'Ottawa',
                places: [
                    {
                        title: 'Ontario Science Centre',
                        type: 'restaurant',
                        description: 'fwefwfwfwfw'
                    },
                    {
                        title: 'CN Tower',
                        type: 'shopping mall',
                        description: '382r238hio2h23hr32rh293hr- 293rh3rh92'
                    },
                    {
                        title: 'Royal Ontario Gallery',
                        type: 'hotel',
                        description: 'ee2e21c 328ry23 r9rh2hf'
                    }
                ]
            },
            {
                city: 'Vancouver',
                places: [
                    {
                        title: 'Ontario Science Centre',
                        type: 'restaurant',
                        description: 'fwefwfwfwfw'
                    },
                    {
                        title: 'CN Tower',
                        type: 'shopping mall',
                        description: '382r238hio2h23hr32rh293hr- 293rh3rh92'
                    },
                    {
                        title: 'Royal Ontario Gallery',
                        type: 'hotel',
                        description: 'ee2e21c 328ry23 r9rh2hf'
                    }
                ]
            }
        ]
    })*/
    const [isShowDialog, setIsShowDialog] = useState(false)
    const [payload, setPayload] = useState(null)
    const [travelPlan, setTravelPlan] = useState(null)
    const [isShowAlert, setIsShowAlert] = useState(false)

    const handleGetAllDestinations = async (user_id) => {
        const response =  await getAllData(user_id)
        return response
    }


    const handleDeleteDestination = async (city, destinationTitle, dest_id) => {
        let tempPlan = {...travelPlan}
        for (let i = 0; i < tempPlan?.response.length; ++i) {
            if (tempPlan.response[i].city === city) {
                tempPlan.response[i].places = tempPlan.response[i].places.filter(destination => destination.title !== destinationTitle)
                setTravelPlan(tempPlan)
                break
            }
        }
        const response = await deleteDestination(dest_id)
        setIsShowAlert(true)
    }

    const test = [
        [
            4,
            "Great Wall of China",
            "hotel",
            "China",
            "Beijing",
            "its a hotel"
        ],
        [
            5,
            "Canada's Wonderland",
            "shopping mall",
            "Canada",
            "Toronto",
            "its a hotel"
        ],
        
        [
            6,
            "Cool Land",
            "hotel",
            "Canada",
            "Toronto",
            "its a hotel"
        ],
        [
            7,
            "COOL WALL", // title
            "restaurant", // type
            "China", // country
            "Beijing", // city
            "its a hotel" // description
        ]
    ]

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
                description: dest[5]
            })
        })
        for (let i = 0; i < newTemp.length; ++i) {
            for (let j = 0; j < temp.length; ++j) {
                if (temp[j].city === newTemp[i].city) {
                    newTemp[i].places.push({
                        title: temp[j].title,
                        type: temp[j].type,
                        description: temp[j].description,
                        dest_id: temp[j].dest_id
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
            <Collapse in={isShowAlert} sx={{zIndex: '1000', position: 'fixed', top: '100px', width: '80%', left: '10%'}}><Alert onClose={() => setIsShowAlert(false)}>Destination successfully deleted</Alert></Collapse>
            <div className={classes.container}>
                <div className={classes.innerThing}>
                    <div style={{height: '100px'}}></div>
                    <div id='TPcountry'><label>{travelPlan?.country}</label></div>
                    <div id='TPsubbody'>
                        {travelPlan?.response.map(body => {
                           if (body.places.length) {
                            return (
                                <div>
                                    <div className='TPcity' onClick={() => {setIsShowDialog(true); setPayload({title: body.city, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut erat in mi blandit ultricies. Curabitur vulputate, justo id porttitor tincidunt, dolor orci egestas erat, non blandit tellus mauris ut risus. Vestibulum ut cursus nisi, sed aliquam magna. Phasellus vel varius turpis, non malesuada velit. Suspendisse accumsan tellus vel ex sodales."});}}>{body.city}</div>
                                    <ol className={classes.orderedlist}>{body?.places?.map((item, index) => <div className='liBox' onClick={() => {setIsShowDialog(true); setPayload({city: body.city, title: item.title, description: item.description, dest_id: item.dest_id });}}><div className={classes.liIndex}>{index + 1}</div> <div style={{width: 'fit-content', wordBreak: 'break-all'}}>{item.title}</div> <div><TypeChip type={item.type}/></div></div>)}</ol>
                                </div>
                            )
                           }
                           return <></>
                        }
                        )}
                        {travelPlan?.country == null && <div className={classes.emptyListText}><div>Nothing to see here.</div><div>Build your travel plan now!</div></div>}
                    </div>
                </div>
            </div>
            <Header title='Explore' pathTo='/explore'/>
            <DialogTP isVisible={isShowDialog} setIsVisible={setIsShowDialog} payload={payload} handleDeleteDestination={handleDeleteDestination}/>
        </>
    )
}
