/**
* @param {string} movieName
* @returns {Promise<object>}
*/

// TODO: make this a class
const movieModel = {
    title: '',
    preview_image: '',
    description: '',
    available: false,
    provider: '',
    link: ''
}

export default async function getMovieData(movieName) {

    // fetch() here to get updated provider list every time
    const providers = [];

    

    // array to store all results from scraping, storing movieModels
    let movieData = [];

    providers.forEach((provider, idx) => {
        // call custom functions for each provider that fill in the information for a movieModel object
        // and add a new movieModel to the movieData array
    })

    return movieData;
}