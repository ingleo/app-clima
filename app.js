const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        return clima.getClima(resp.lat, resp.lng);
    })
    .then(temperatura => {
        console.log(`La temperatura de: ${arg.direccion} es ${temperatura}`);
    })
    .catch(err => console.log(err));