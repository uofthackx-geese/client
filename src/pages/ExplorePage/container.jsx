import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader';
import { ExplorePagePresentation } from './presentation';
import { 
    getCountryDescription, 
    getCities, 
    getCityDescriptions, 
    getCityDescription, 
    getTypes,
    getDestinations, 
    getDestinationDescriptions
} from './api';

export const ExplorePageContainer = () => {
    // useFetch hook, may need a subcomponent to call useFetch on prop = current node??

    const [originNodeInfo, setOriginNodeInfo] = useState(null);
    const [firstNodeInfo, setFirstNodeInfo] = useState(null);
    const [secondNodeInfo, setSecondNodeInfo] = useState(null);
    const [thirdNodeInfo, setThirdNodeInfo] = useState(null);

    const [country, setCountry] = useState('Canada'); // TODO: make user input for getting country
    const [city, setCity] = useState(null);
    const [type, setType] = useState(null);

    // temporary until we actually call the APIs
    useEffect(() => {
        if (type) { // Next nodes are destinations
            const populateNodesFromType = async () => {
                const destinations = await getDestinations(type);
                setOriginNodeInfo({
                    title: type,
                });

                const descriptions = await getDestinationDescriptions(destinations);
                setFirstNodeInfo({
                    title: destinations[0],
                    description: descriptions[0],
                })
                setSecondNodeInfo({
                    title: destinations[1],
                    description: descriptions[1],
                })
                setThirdNodeInfo({
                    title: destinations[2],
                    description: descriptions[2],
                })
            }
            populateNodesFromType();
        } else if (city) { // Next nodes are destination categories
            const populateNodesFromCity = async () => {
                let cityDescription = '';
                let types = [];

                Promise.all([await getCityDescription(city), await getTypes(city)])
                .then((values) => {
                    [cityDescription, types] = values;
                    setOriginNodeInfo({
                        title: city,
                        description: cityDescription,
                    });
                    setFirstNodeInfo({
                        title: types[0],
                    })
                    setSecondNodeInfo({
                        title: types[1],
                    })
                    setThirdNodeInfo({
                        title: types[2],
                    })
                });
            }
            populateNodesFromCity();
        } else { // Next nodes are cities
            const populateNodesFromCountry = async () => {
                let countryDescription = '';
                let cities = [];

                Promise.all([await getCountryDescription(country), await getCities(country)])
                .then((values) => {
                    [countryDescription, cities] = values;
                    setOriginNodeInfo({
                        title: country,
                        description: countryDescription,
                    });
                });
                const descriptions = await getCityDescriptions(cities);
                setFirstNodeInfo({
                    title: cities[0],
                    description: descriptions[0],
                })
                setSecondNodeInfo({
                    title: cities[1],
                    description: descriptions[1],
                })
                setThirdNodeInfo({
                    title: cities[2],
                    description: descriptions[2],
                })
            }
            populateNodesFromCountry();
        }
    }, [country, city, type])

    return originNodeInfo && firstNodeInfo && secondNodeInfo && thirdNodeInfo 
        ? <ExplorePagePresentation 
            originNodeInfo={originNodeInfo} 
            firstNodeInfo={firstNodeInfo} 
            secondNodeInfo={secondNodeInfo} 
            thirdNodeInfo={thirdNodeInfo}
            /> 
        : <Loader />
}
