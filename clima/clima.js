const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=39fcd7f6b64d3e5b065d458999b67888&units=metric`);



    return resp.data.main.temp;
};

module.exports = {
    getClima
}