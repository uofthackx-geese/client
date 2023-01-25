import React, { useEffect, useState, useReducer } from 'react'
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
    const { country } = useParams();
    const [nodesInfo, setNodesInfo] = useState({
        origin: null,
        first: null,
        second: null,
        third: null,
        city: null,
        type: null,
    });

    // Stack of nodeInfo objects
    const [nodesHistory, setNodesHistory] = useState([]);

    // Used for animation
    const [inProp, setInProp] = useState(true);

    useEffect(() => {
        console.log('useEffect', nodesInfo);
        if (nodesInfo.type) { // Next nodes are destinations
            const populateNodesFromType = async () => {
                const destinations = await getDestinations(nodesInfo.type, nodesInfo.city, country);
                const descriptions = await getDestinationDescriptions(destinations, nodesInfo.city, country);

                const updatedNodesInfo = {
                    ...nodesInfo,
                    origin: {
                        title: nodesInfo.type,
                    },
                    first: {
                        title: destinations[0],
                        description: descriptions[0],
                        isTerminal: true,
                    },
                    second: {
                        title: destinations[1],
                        description: descriptions[1],
                        isTerminal: true,
                    },
                    third: {
                        title: destinations[2],
                        description: descriptions[2],
                        isTerminal: true,
                    },
                }
                setNodesInfo(updatedNodesInfo);

                setInProp(true);
            }
            populateNodesFromType();
        } else if (nodesInfo.city) { // Next nodes are destination categories
            const populateNodesFromCity = async () => {
                const [cityDescription, types] = await Promise.all([ getCityDescription(nodesInfo.city, country), getTypes(nodesInfo.city)])

                const updatedNodesInfo = {
                    ...nodesInfo,
                    origin: {
                        title: nodesInfo.city,
                        description: cityDescription,
                    },
                    first: {
                        title: types[0],
                    },
                    second: {
                        title: types[1],
                    },
                    third: {
                        title: types[2],
                    },
                }
                setNodesInfo(updatedNodesInfo);

                setInProp(true);
            }
            populateNodesFromCity();
        } else { // Next nodes are cities
            const populateNodesFromCountry = async () => {
                const [countryDescription, cities] = await Promise.all([getCountryDescription(country), getCities(country)]);
                const descriptions = await getCityDescriptions(cities, country);

                const updatedNodesInfo = {
                    ...nodesInfo,
                    origin: {
                        title: country,
                        description: countryDescription,
                    },
                    first: {
                        title: cities[0],
                        description: descriptions[0],
                    },
                    second: {
                        title: cities[1],
                        description: descriptions[1],
                    },
                    third: {
                        title: cities[2],
                        description: descriptions[2],
                    },
                }
                setNodesInfo(updatedNodesInfo);
                
                setInProp(true);
            }
            populateNodesFromCountry();
        }
    }, [country, nodesInfo.city, nodesInfo.type])

    const handleTravelClick = (title) => {
        setInProp(false);

        if (nodesInfo.type) { // Clicking on the next nodes (destinations) when we're already at a type shouldn't do anything.
            return;
        }

        if (nodesInfo.city) {
            setNodesHistory(nodesHistory.concat([nodesInfo]));
            setNodesInfo({
                ...nodesInfo,
                type: title
            })
        } else if (country) {
            setNodesHistory(nodesHistory.concat([nodesInfo]));
            setNodesInfo({
                ...nodesInfo,
                city: title,
            })
        }
    }

    const navigate = useNavigate();
    const getLastElement = (arr) => arr[arr.length-1];

    const handleBackArrowClick = () => {
        if (!nodesHistory.length) { // No history, go back to choose country
            navigate('/chooseCountry');
        }

        setInProp(false);
        const historyToUse = getLastElement(nodesHistory);
        setNodesHistory(nodesHistory.slice(0, nodesHistory.length - 1)); // Pop the history off the stack
        setNodesInfo(historyToUse);
    }

    const handleAddDestination = async (title, description, imageURL) => {
        await addDestination(title, nodesInfo.type, country, nodesInfo.city, description, imageURL, 6);
    }

    return nodesInfo.origin && nodesInfo.first && nodesInfo.second && nodesInfo.third
        ? <ExplorePagePresentation
            nodesInfo={nodesInfo}
            handleTravelClick={handleTravelClick}
            inProp={inProp}
            handleAddDestination={handleAddDestination}
            handleBackArrowClick={handleBackArrowClick}
        />
        : <Loader />
}
