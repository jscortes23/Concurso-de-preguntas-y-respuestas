/* Conexion a base de datos */
const mongoose = require('mongoose');

const usuario = "sofka"
const clave = "sofka"
const db = "db_concurso"

const uri = `mongodb+srv://${usuario}:${clave}@clusterprogweb.qka5w.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Conectado"))
.catch(e => console.log(e))

const Jugador = require('./esquemas/Jugador.js');
