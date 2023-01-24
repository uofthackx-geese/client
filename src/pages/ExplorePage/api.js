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

    console.log('citiesRaw');
    console.log(citiesRaw);

    citiesRaw = citiesRaw.replace("\n1.", ", ");
    citiesRaw = citiesRaw.replace("\n2.", ", ");
    citiesRaw = citiesRaw.replace("\n3.", ", ");

    console.log('aftrer nums replace');
    console.log(citiesRaw);

    citiesRaw = stripNewlines(citiesRaw);

    console.log('after strip');
    console.log(citiesRaw);

    // Split string by commas (and whitespace)
    let popularCities = citiesRaw.split(/,\s*/);

    console.log('after split');
    console.log(popularCities);

    return popularCities.filter((item) => !!item);
}

export const getCityDescriptions = async (cities, country) => {
    return await Promise.all(
        cities.map((city) => {
            return getCityDescription(city, country);
        })
    )
}

// populateNodesFromCity
export const getCityDescription = async (city, country) => {
    const rawDescription = await generate(`Describe ${city} in ${country}:`) + "...";
    const strippedDescription = stripNewlines(rawDescription);
    return strippedDescription;
}

export const getTypes = async (city) => {
    return ['Hotels', 'Shopping Malls', 'Restaurants'];
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
    return popularDestinations.filter((item) => !!item);
}

export const getDestinationDescriptions = async (destinations, city, country) => {
    return await Promise.all(
        destinations.map((destination) => {
            return getDestinationDescription(destination, city, country);
        })
    )
}

export const getDestinationDescription = async (destination, city, country) => {
    const rawDescription = await generate(`Describe ${destination} in ${city}, ${country}:`) + "...";
    const strippedDescription = stripNewlines(rawDescription);
    return strippedDescription;
}

// Server API calls
export async function addDestination(title, type, country, city, description, imageURL, user_id) {
    const lowercaseSingularType = type.toLowerCase().substring(0, type.length - 1);

    const data = {
        "title": title,
        "type": lowercaseSingularType,
        "country": country,
        "city": city,
        "description": description,
        "image_url": imageURL,
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

export async function restartTP() {
    const response = await fetch(`http://127.0.0.1:8080/api/restart_TP`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    return await response.json()
}


// Unsplash API Call

export async function getImage(request) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${request}&client_id=uTDmHxbbFGFa5RNb1HNTJzdEWlmLMo5XCObl_UhZ3nE`, {
        method: 'GET'
    })
    return await response.json();
}