const mongoose = require('../config/connection');

const schemaCliente = new mongoose.Schema({
    nombre: {
        type: String,
        requiered: true
    },
    cedula: {
        type: String,
        requiered: true,
        unique: true
    },
    telefono: {
        type: String,
        requiered: true
    },
    ubicacion: {
        type: String,
        requiered: true
    },
    totalComprado: {
        type: Number
    },
    historialCompras: {
        type: String
    }
});


const cliente = mongoose.model('cliente', schemaCliente);
module.exports = cliente
