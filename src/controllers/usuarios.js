const { response } = require("express");
const mongoose = require("mongoose");
const Usuario=require("../modules/Usuario")


//CREATE
function crearUsuario(req,res){
    const info = req.body;
    const user = new Usuario(info);
    user.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}


//READ-->obtenemos todos los productos por nombre
function obtenerUsuarios(req,res){
    Usuario.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

//Obtener por id
function findUsuario(req, res) {  
    const pid=req.params.id;
    Usuario.findById({_id: pid})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
};  


//UPDATE -->actualizamos un solo elmento por ID

function modificarUsuario(req, res) {
    const pid = req.params.id;
    const body=req.body;
    Usuario.updateOne(
        {_id: pid},
        body,
        (err,user)=>{
            res.send(user)
        }
    )
}



//DELETE
function eliminarUsuario(req,res){
    const name = req.params.nombre;
    Usuario.findOneAndRemove({nombre : name})
    .then(data => res.send({message:`Se elimino el producto correctamente: ${name} `}))
    .catch(err => res.status(500).send({message:`No se elimino correctamnte el producto: ${name}`}))
}

//modulos exportados
module.exports={
    obtenerUsuarios,
    findUsuario,
    crearUsuario,
    modificarUsuario,
    eliminarUsuario
}
