const axios = require('axios')
const APPID = '12a9b2fcd4daef9492ff3c313e1eddb7'

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APPID}&units=metric`)

    return resp.data.main
}

module.exports = {
    getClima
}