const axios = require('axios');

const getLugarLatLong = async(dir) => {

    console.log(dir);

    // URL segura, tranasforma los caracteres especiales
    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        // timeout: 1000,
        headers: { 'x-rapidapi-key': '272a2c6831mshfc3fe47c30d8465p1d7e25jsn10dfa0c75859' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLong
};