const router = require("express").Router();

router.get('/', (req,res) =>{
    res.send("Bienvenido al Proyecto Modulo 4")
})

router.use('/usuarios', require('./usuario'))

module.exports =router;
