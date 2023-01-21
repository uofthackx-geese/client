import { generate } from "./Cohere.js"

// populateNodesFromCountry
export const getCountryDescription = async (country) => {
    return Promise.resolve(await generate(`Describe ${country}:`) + "...");
}

export const getCities = async (country) => {
    let citiesRaw = await generate(`List the 3 most popular cities in ${country}:`);
    // Remove newlines and numbers
    citiesRaw = citiesRaw.replace("\n1.", "");
    citiesRaw = citiesRaw.replace("\n2.", "");
    citiesRaw = citiesRaw.replace("\n3.", "");

    // Split by spaces
    let popularCities = citiesRaw.split(" ");
    popularCities.shift(); // shift by 1 index (because first is empty)

    return Promise.resolve(popularCities);
}

export const getCityDescriptions = async (cities) => {
    // TODO: call getCityDescriptions
    return Promise.resolve(['toronto desc', 'waterloo desc', 'vanc desc']);
}

// populateNodesFromCity
export const getCityDescription = async (city) => {
    return Promise.resolve(await generate(`Describe ${city}:`) + "...");
}

export const getTypes = async (city) => {
    return Promise.resolve(['Hotels', 'Shopping Malls', 'Restaurants']);
}

// populateNodesFromType
export const getDestinations = async (type, city, country) => {
    let destinationsRaw = await generate(`List the 3 most popular ${type} in ${city}, ${country}:`);
    
    // Remove newlines and numbers
    destinationsRaw = destinationsRaw.replace("\n1.", "");
    destinationsRaw = destinationsRaw.replace("\n2.", "");
    destinationsRaw = destinationsRaw.replace("\n3.", "");

    // Split by spaces
    let popularDestinations = destinationsRaw.split(" ");
    popularDestinations.shift(); // shift by 1 index (because first is empty)
    
    return Promise.resolve(popularDestinations);
}

export const getDestinationDescriptions = async (destinations) => {
    // TODO: call getDestinationDescription
    return Promise.resolve(['yummy donuts are here please come visit',
    'chipotle is the best', 'pai is expensive apparently yummy']);
}

export const getDestinationDescription = async (destination) => {
    return Promise.resolve(await generate(`Describe ${destination}:`) + "...");
}
