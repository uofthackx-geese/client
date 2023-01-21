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

    // const results = await Promise.all(cities.map(async (city) => {
    //     console.log()
    //     return await getCityDescription(city);
    // }))

    // return results;
    // // Promise.all(cities.map(async (city) => {
    // //     await getCityDescription(city);
    // // })).then((values) => {
    // //     console.log(values)
    // //     return values;
    // // });
    return Promise.resolve(['toronto desc', 'waterloo desc', 'vanc desc']);
}

export const getCityDescription = async (city) => {
    console.log(city);
    return Promise.resolve(`This is description for ${city}`);
}
