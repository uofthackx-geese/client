import { generate } from "./Cohere.js"

const stripNewlines = (str) => {
    return str.replace(/\r?\n|\r/, "");
}

// populateNodesFromCountry
export const getCountryDescription = async (country) => {
    const rawDescription = await generate(`Describe ${country}:`) + "...";
    const strippedDescription = stripNewlines(rawDescription);
    return strippedDescription;
}

export const getCities = async (country) => {
    let citiesRaw = await generate(`List the 3 most popular cities in ${country}:`);
    citiesRaw = stripNewlines(citiesRaw);

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
    const rawDescription = await generate(`Describe ${city}:`) + "...";
    const strippedDescription = stripNewlines(rawDescription);
    return strippedDescription;
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

    destinationsRaw = stripNewlines(destinationsRaw);

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
    const rawDescription = await generate(`Describe ${destination}:`) + "...";
    const strippedDescription = stripNewlines(rawDescription);
    return strippedDescription;
}

// Server API calls
export async function addDestination(title, type, country, city, description, user_id) {
    const lowercaseSingularType = type.toLowerCase().substring(0, type.length - 1);

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

export async function getAllData(user_id) {
    const response = await fetch(`http://127.0.0.1:8080/api/get_all_data?user_id=${user_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    return await response.json();
}

export async function deleteDestination(dest_id) {
    const response = await fetch(`http://127.0.0.1:8080/api/delete_destination`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({dest_id: dest_id})
    })
    return await response.json()
}