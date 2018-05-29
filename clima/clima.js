const axios = require('axios');

const getClima = async(latitud, longitud) => {

    console.log(latitud, longitud);

    let encodeLat = encodeURI(latitud);
    let encodeLng = encodeURI(longitud);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeLat}&lon=${encodeLng}&units=metric&appid=2915fd843067a1e7ca54678f79f94f00`);

    console.log(JSON.stringify(resp), undefined, 2);
    return resp.main.temp;
}

module.exports = {
    getClima
}