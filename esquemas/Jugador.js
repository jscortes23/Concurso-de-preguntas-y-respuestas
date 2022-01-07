const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jugadorEsquema = new Schema({
  nombre:  String,
  correctas: String,
  incorrectas: String
});

// Crear el modelo
const Jugador = mongoose.model('Jugador', jugadorEsquema);

module.exports = Jugador;