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
    getDestinationDescriptions,
    addDestination
} from './api';
import { useParams, useNavigate } from 'react-router-dom';

export const ExplorePageContainer = () => {
    const [originNodeInfo, setOriginNodeInfo] = useState(null);
    const [firstNodeInfo, setFirstNodeInfo] = useState(null);
    const [secondNodeInfo, setSecondNodeInfo] = useState(null);
    const [thirdNodeInfo, setThirdNodeInfo] = useState(null);

    const { country } = useParams();
    const [city, setCity] = useState(null);
    const [type, setType] = useState(null);

    // Stack of node history objects, which are just {originNodeInfo, firstNodeInfo, secondNodeInfo, thirdNodeInfo, city, type}
    const [nodesHistory, setNodesHistory] = useState([]);

    // Used for animation
    const [inProp, setInProp] = useState(true);

    useEffect(() => {
        if (type) { // Next nodes are destinations
            const populateNodesFromType = async () => {
                const destinations = await getDestinations(type, city, country);
                setOriginNodeInfo({
                    title: type,
                });

                const descriptions = await getDestinationDescriptions(destinations, city, country);
                setFirstNodeInfo({
                    title: destinations[0],
                    description: descriptions[0],
                    isTerminal: true,
                })
                setSecondNodeInfo({
                    title: destinations[1],
                    description: descriptions[1],
                    isTerminal: true,
                })
                setThirdNodeInfo({
                    title: destinations[2],
                    description: descriptions[2],
                    isTerminal: true,
                })
                setInProp(true);
            }
            populateNodesFromType();
        } else if (city) { // Next nodes are destination categories
            const populateNodesFromCity = async () => {
                const [cityDescription, types] = await Promise.all([ getCityDescription(city, country), getTypes(city)])
                setOriginNodeInfo({
                    title: city,
                    description: cityDescription,
                });
                setFirstNodeInfo({
                    title: types[0],
                });
                setSecondNodeInfo({
                    title: types[1],
                })
                setThirdNodeInfo({
                    title: types[2],
                });
                setInProp(true);
            }
            populateNodesFromCity();
        } else { // Next nodes are cities
            const populateNodesFromCountry = async () => {
                const [countryDescription, cities] = await Promise.all([getCountryDescription(country), getCities(country)]);
                setOriginNodeInfo({
                    title: country,
                    description: countryDescription,
                });
                const descriptions = await getCityDescriptions(cities, country);
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
                setInProp(true);
            }
            populateNodesFromCountry();
        }
    }, [country, city, type])

    const handleTravelClick = (title) => {
        setInProp(false);

        if (type) { // Clicking on the next nodes (destinations) when we're already at a type shouldn't do anything.
            return;
        }

        if (city) {
            setNodesHistory(nodesHistory.concat([
                {
                    originNodeInfo,
                    firstNodeInfo,
                    secondNodeInfo,
                    thirdNodeInfo,
                    city,
                    type
                }
            ]));
            setType(title)
        } else if (country) {
            setNodesHistory(nodesHistory.concat([
                {
                    originNodeInfo,
                    firstNodeInfo,
                    secondNodeInfo,
                    thirdNodeInfo,
                    city,
                    type
                }
            ]))
            setCity(title);
        }
    }

    const navigate = useNavigate();
    const getLastElement = (arr) => arr[arr.length-1];

    const handleBackArrowClick = () => {
        if (!nodesHistory.length) { // No history, go back to choose country
            navigate('/chooseCountry');
        }

        const historyToUse = getLastElement(nodesHistory);
        setNodesHistory(nodesHistory.slice(0, nodesHistory.length - 1)); // Pop the history off the stack
        setOriginNodeInfo(historyToUse.originNodeInfo);
        setFirstNodeInfo(historyToUse.firstNodeInfo);
        setSecondNodeInfo(historyToUse.secondNodeInfo);
        setThirdNodeInfo(historyToUse.thirdNodeInfo);
        setCity(historyToUse.city);
        setType(historyToUse.type);
    }

    const handleAddDestination = async (title, description, imageURL) => {
        const response =  await addDestination(title, type, country, city, description, imageURL, 6)
        //console.log(response)
    }

    return originNodeInfo && firstNodeInfo && secondNodeInfo && thirdNodeInfo
        ? <ExplorePagePresentation
            originNodeInfo={originNodeInfo}
            firstNodeInfo={firstNodeInfo}
            secondNodeInfo={secondNodeInfo}
            thirdNodeInfo={thirdNodeInfo}
            handleTravelClick={handleTravelClick}
            inProp={inProp}
            handleAddDestination={handleAddDestination}
            handleBackArrowClick={handleBackArrowClick}
        />
        : <Loader />
}
