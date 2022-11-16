const router = require("express").Router();

router.get('/', (req,res) =>{
    res.send("Bienvenido a BeduShop")
})

router.use('/usuarios', require('./usuario'))

module.exports =router;
