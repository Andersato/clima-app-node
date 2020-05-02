const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        timeout: 1000,
        headers: { 'X-RapidAPI-key': '20e11457ddmshfbf482e09a9735fp190351jsnc9696f460645' }
    });

    const resp = await instance.get()

    if (0 === resp.data.Results.length) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}