// TODO: call cohere api instead of hard-code
export const getCitiesByCountry = (country) => { 
    return ['Toronto', 'Waterloo', 'Vancouver']
}

// TODO: call cohere api instead of hard-code
export const getAttractionsByCity = (city) => {
    return ['Toronto Zoo', 'Canada\'s Wonderland', 'CN Tower']
}

// populateNodesFromCountry
export const getCountryDescription = async (country) => {
    return Promise.resolve('this is canada');
}

export const getCities = async (country) => {
    return Promise.resolve(['Toronto', 'Waterloo', 'Vancouver']);
}

export const getCityDescriptions = async (cities) => {
    // TODO: call getCityDescriptions
    return Promise.resolve(['toronto desc', 'waterloo desc', 'vanc desc']);
}

// populateNodesFromCity
export const getCityDescription = async (city) => {
    return Promise.resolve(`This is description for ${city}`);
}

export const getTypes = async (city) => {
    return Promise.resolve(['Zoo', 'Restaurant', 'Hotel']);
}

// populateNodesFromType
export const getDestinations = async (type) => {
    return Promise.resolve(['COPS Donut', 'Chipotle', 'PAI']);
}

export const getDestinationDescriptions = async (destinations) => {
    // TODO: call getDestinationDescription
    return Promise.resolve(['yummy donuts are here please come visit',
    'chipotle is the best', 'pai is expensive apparently yummy']);
}

export const getDestinationDescription = async (destination) => {
    return Promise.resolve('destination description was gotten here you go');
}
