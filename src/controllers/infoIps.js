const { response } = require("express");
const mongoose = require("mongoose");
const InfoIp=require("../modules/InfoIp")


//CREATE
function crearInfoIp(req,res){
    const info = req.body;
    const user = new InfoIp(info);
    user.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}


//READ-->obtenemos todos los productos por nombre
function obtenerInfoIps(req,res){
    InfoIp.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

//Obtener por id
function findInfoIp(req, res) {  
    const pid=req.params.id;
    InfoIp.findById({_id: pid})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
};  


//UPDATE -->actualizamos un solo elmento por ID

function modificarInfoIp(req, res) {
    const pid = req.params.id;
    const body=req.body;
    InfoIp.updateOne(
        {_id: pid},
        body,
        (err,user)=>{
            res.send(user)
        }
    )
}



//DELETE
function eliminarInfoIp(req,res){
    const name = req.params.nombre;
    InfoIp.findOneAndRemove({nombre : name})
    .then(data => res.send({message:`Se elimino el producto correctamente: ${name} `}))
    .catch(err => res.status(500).send({message:`No se elimino correctamnte el producto: ${name}`}))
}

//modulos exportados
module.exports={
    obtenerInfoIps,
    findInfoIp,
    crearInfoIp,
    modificarInfoIp,
    eliminarInfoIp
}
