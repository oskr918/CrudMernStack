const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})
const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/*router.get('/ejemplo', (req, res)=>{
    res.end('saludo carga desde ruta de ejemplo')
})*/

router.post('/agregarusuario', (req, res)=>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})




router.get('/obtenerusuarios', (req, res)=>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send("exito")
        }else{
            res.send(err)
        }
    })
})


router.post('/obtenerdatausuario', (req, res)=>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send("exito")
        }else{
            res.send(err)
        }
    })
})

router.post('/actualizarusuario', (req, res)=>{
  ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono
    },(err)=>{
        if(!err){
            res.send('usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })

    router.post('/borrarusuario', (req, res)=>{
        ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err)=>{
            if(!err){
                res.send('usuario borrado correctamente')
            }else{
                res.send(err)
            }
        })
    })

})