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

const getLugarLatLng = async (direccion) => {
    let encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'f1e1f548bamsh627a22b6590fcd4p10c343jsn964e78ca3a2b' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = response.data.Results[0];
    const name = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion: name,
        lat: latitud,
        lng: longitud
    }
}


module.exports = {
    getLugarLatLng
}