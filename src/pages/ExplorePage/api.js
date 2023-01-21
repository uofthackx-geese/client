// TODO: call cohere api instead of hard-code
export const getCitiesByCountry = (country) => { 
    return ['Toronto', 'Waterloo', 'Vancouver']
}

// TODO: call cohere api instead of hard-code
export const getAttractionsByCity = (city) => {
    return ['Toronto Zoo', 'Canada\'s Wonderland', 'CN Tower']
}

/// newly added:

export const getCountryDescription = async (country) => {
    return Promise.resolve('this is canada');
}

export const getCities = async (country) => {
    return Promise.resolve(['Toronto', 'Waterloo', 'Vancouver']);
}

export const getCityDescriptions = async (cities) => {
    return Promise.all(cities.map(async (city) => {
        return await getCityDescription(city);
    }));
}

export const getCityDescription = async (city) => {
    return Promise.resolve(`This is description for ${city}`);
}
