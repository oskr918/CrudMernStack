const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('coneccion correcta a mongoDB')})
objetobd.on('error', ()=>{console.log('error en la conexion a mongoDB')})

module.exports = mongoose