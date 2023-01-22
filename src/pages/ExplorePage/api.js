import { generate } from "./Cohere.js"

const stripNewlines = (str) => {
    str.replace(/\r?\n|\r/, "");
}

// populateNodesFromCountry
export const getCountryDescription = async (country) => {
    return await generate(`Describe ${country}:`) + "...";
}

export const getCities = async (country) => {
    let citiesRaw = await generate(`List the 3 most popular cities in ${country}:`);
    stripNewlines(citiesRaw);

    // Split string by commas (and whitespace)
    let popularCities = citiesRaw.split(/,\s*/);

    return popularCities;
}

export const getCityDescriptions = async (cities) => {
    return await Promise.all(
        cities.map((city) => {
            return getCityDescription(city);
        })
    )
}

// populateNodesFromCity
export const getCityDescription = async (city) => {
    return await generate(`Describe ${city}:`) + "...";
}

export const getTypes = async (city) => {
    return ['Hotels', 'Shopping Malls', 'Restaurant'];
}

// populateNodesFromType
export const getDestinations = async (type, city, country) => {
    let destinationsRaw = await generate(`List the 3 most popular ${type} in ${city}, ${country}:`);

    // Remove newlines and numbers
    destinationsRaw = destinationsRaw.replace("\n1.", ", ");
    destinationsRaw = destinationsRaw.replace("\n2.", ", ");
    destinationsRaw = destinationsRaw.replace("\n3.", ", ");

    stripNewlines(destinationsRaw);

    // Split by spaces
    let popularDestinations = destinationsRaw.split(/,\s*/);
    popularDestinations.shift(); // shift by 1 index (because first is empty)
    return popularDestinations;
}

export const getDestinationDescriptions = async (destinations) => {
    return await Promise.all(
        destinations.map((destination) => {
            return getDestinationDescription(destination);
        })
    )
}

export const getDestinationDescription = async (destination) => {
    return await generate(`Describe ${destination}:`) + "...";
}

// Server API calls
export async function addDestination(title, type, country, city, description, user_id) {
    const lowercaseSingularType = type.toLowerCase().substring(0, type.toString());
    console.log('addDestination', type, lowercaseSingularType);

    const data = {
        "title": title,
        "type": lowercaseSingularType,
        "country": country,
        "city": city,
        "description": description,
        "user_id": user_id
    }

    const response = await fetch(`http://127.0.0.1:8080/api/add_destination`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

// Server API calls
export async function getAllData(user_id) {
    const response = await fetch(`http://127.0.0.1:8080/api/get_all_data?user_id=${user_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    return await response.json();
}
