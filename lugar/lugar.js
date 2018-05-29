const axios = require('axios');

//Ecmascript 6
// const getLugarLatLng = (direccion) => {
//     let encodeUrl = encodeURI(direccion);

//     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl}&key=AIzaSyD5v1N5Ex-bH1sqRPzwCPuqMN27uaN3sXU`)
//         .then(resp => {

//             console.log(resp.data.results[0].formatted_address);
//             console.log(resp.data.results[0].geometry.location.lat, resp.data.results[0].geometry.location.lng);

//         })
//         .catch(err => console.log('Error ', err));

// }

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl}&key=AIzaSyD5v1N5Ex-bH1sqRPzwCPuqMN27uaN3sXU`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion}`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}


module.exports = {
    getLugarLatLng
}