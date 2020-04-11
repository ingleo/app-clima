const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=2915fd843067a1e7ca54678f79f94f00`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}