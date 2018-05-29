const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//Ecmascript 6
// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         return clima.getClima(resp.lat, resp.lng);
//     })
//     .then(temperatura => {
//         console.log(`La temperatura de ${argv.direccion} es: ${temperatura} grados centigrados`);
//     })
//     .catch(err => console.log(err));



let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let tempeartura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `EL clima en ${ coordenadas.direccion} es de ${ tempeartura}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));