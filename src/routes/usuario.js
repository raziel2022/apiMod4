const routerU=require('express').Router();

const {
    obtenerUsuarios,
    findUsuario,
    crearUsuario,
    modificarUsuario,
    eliminarUsuario
} =  require("../controllers/usuarios");


routerU.get('/', obtenerUsuarios)
routerU.get('/:id', findUsuario)
routerU.post('/',crearUsuario)
routerU.put('/:id',modificarUsuario)
routerU.delete('/:id', eliminarUsuario)


module.exports = routerU;
