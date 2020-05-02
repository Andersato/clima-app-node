const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccón de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const getInfo = async(direccion) => {
    try {
        const infoLugar = await lugar.getLugarLatLng(direccion)
        const tiempo = await clima.getClima(infoLugar.lat, infoLugar.lng)

        return `El clima de ${direccion} es de ${tiempo.temp}`
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })