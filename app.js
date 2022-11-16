//Cargando dependencias
var express = require('express'),  
  mongoose = require('mongoose'),  
  http = require('http');  
var app = express();  
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


  
//Inicia Server  
app.listen(process.env.PORT, ()=>{
  console.log("El servidor esta listo");
});
//Inicia mongoDB
mongoose.connect(process.env.MONGOURI,
  (err) => {
      if (!err) {
          //Alerta de conexión exitosa a la Base de Datos
          console.log('Conexión Correcta con MongoDB')
      }
      else {
          //Alerta de error en la conexión a la Base de datos
          console.log("Error en la conexón MongoDB: " + JSON.stringify(err, undefined, 2)); 
      }
  }
);



app.use('/',require('./src/routes'))

