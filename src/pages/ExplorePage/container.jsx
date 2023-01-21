import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader';
import { ExplorePagePresentation } from './presentation';

export const ExplorePageContainer = () => {
    // useFetch hook, may need a subcomponent to call useFetch on prop = current node??

    const country = 'Canada' // TODO: make user input for getting country

    const [originNodeInfo, setOriginNodeInfo] = useState(null);
    const [firstNodeInfo, setFirstNodeInfo] = useState(null);
    const [secondNodeInfo, setSecondNodeInfo] = useState(null);
    const [thirdNodeInfo, setThirdNodeInfo] = useState(null);

    // temporary until we actually call the APIs
    useEffect(() => {
        setOriginNodeInfo({
            title: 'Canada',
            description: 'this is canada description',
        });
        setFirstNodeInfo({
            title: 'Toronto',
            description: 'this is toronto description',
        })
        setSecondNodeInfo({
            title: 'Waterloo',
            description: 'this is waterloo description',
        })
        setThirdNodeInfo({
            title: 'Vancouver',
            description: 'this is vancouver description',
        })
    }, [])

    return originNodeInfo && firstNodeInfo && secondNodeInfo && thirdNodeInfo 
        ? <ExplorePagePresentation 
            originNodeInfo={originNodeInfo} 
            firstNodeInfo={firstNodeInfo} 
            secondNodeInfo={secondNodeInfo} 
            thirdNodeInfo={thirdNodeInfo}
            /> 
        : <Loader />
}
