const routerI=require('express').Router();

const {
    obtenerInfoIps,
    findInfoIp,
    crearInfoIp,
    modificarInfoIp,
    eliminarInfoIp
} =  require("../controllers/infoIps");


routerI.get('/', obtenerInfoIps)
routerI.get('/:id', findInfoIp)
routerI.post('/',crearInfoIp)
routerI.put('/:id',modificarInfoIp)
routerI.delete('/:nombre', eliminarInfoIp)


module.exports = routerI;