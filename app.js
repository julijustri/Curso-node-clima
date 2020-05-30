const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     });

// clima.getClima(40.419998, -3.700000)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {

    try {
        let lugarx = await lugar.getLugarLatLong(direccion);
        let climax = await clima.getClima(lugarx.lat, lugarx.lng);
        return `El clima de ${direccion} es de ${climax} grados.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }

    // Salida
    // El clima de xxx es de xxx es xxx
    // No se pudo determinar el clima de xxx

};

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    });