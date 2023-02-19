const express = require('express')
const bodyParser  = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


require('dotenv').config()
const port = process.env.PORT||4000

//Conexión a la Base de Datos
//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales



const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.westfkq.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;



mongoose.set('strictQuery', false);

mongoose.connect(uri,
  { useNewUrlParser: true}
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

//Middleware
app.use(express.static(__dirname+'/public'));

//Motor de plantillas
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

//Llamadas a las rutas
app.use('/', require('./router/rutas'))
app.use('/inicio', require('./router/inicio'))
app.use('/partidos', require('./router/partidos'))

   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})