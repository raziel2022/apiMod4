// const db = 'infoGN';
// const dbUser = 'kain87';
// const dbPass = '...qwe123';
// const uri= `mongodb+srv://kain87:...qwe123@cluster0.obolh5v.mongodb.net/infoGN?retryWrites=true&w=majority`;

//Load app dependencies  
var express = require('express'),  
  mongoose = require('mongoose'),  
  http = require('http');  
var app = express();  
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


  
//Start the server  
app.listen(process.env.PORT, ()=>{
  console.log("El servidor esta listo");
});
//start mongoDB
mongoose.connect(process.env.MONGOURI,
  (err) => {
      if (!err) {
          //alert if a successful connection is made 
          console.log('Conexión Correcta con MongoDB')
      }
      else {
          //alert if there is an error in the connection
          console.log("Error en la conexón MongoDB: " + JSON.stringify(err, undefined, 2)); 
      }
  }
);



app.use('/',require('./src/routes'))

app.get('/',(req, res) => res.send("Bienvenido al Proyecto Modulo 4"))