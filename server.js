const express = require('express')
const app = express()

const archivoDB = require('./conexion')

const rutausuario = require('./rutas/usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res)=>{
    res.end("Bienvenidos a mi servidor")
})

app.listen(5000, function(){
    console.log('el servidor esta escuchando')
})