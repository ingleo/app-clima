const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxx`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}