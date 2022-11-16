const router = require("express").Router();

router.get('/', (req,res) =>{
    res.send("Bienvenido al Proyecto Modulo 4")
})

router.use('/usuarios', require('./usuario'))
router.use('/infoIp', require('./infoIp'))

module.exports =router;
