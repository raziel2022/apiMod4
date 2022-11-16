const mongoose = require("mongoose");

const UsuarioSchema=mongoose.Schema
({
    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    email: {type: String, require: true},
    pass: {type: String, require: true}
},{
    collection: "Usuarios",
    timestamps: true
})


const Usuario= mongoose.model("Usuario",UsuarioSchema);

module.exports=Usuario