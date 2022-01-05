/* Logica de la aplicación */
import { preguntas } from './datos/preguntas.js';
import { Concurso } from './modelos/Concurso.js'
import { Conectar } from './modelos/Conectar.js'

/**
 * 
 * @param {Concurso} concurso 
 * @param {Conectar} conectar 
 */
const nuevaPregunta = (concurso, conectar) => {
    if (concurso.finJuego()) {
        console.log(concurso.puntaje)
    } else {
        conectar.mostrarPregunta(concurso.preguntaEnJuego().pregunta);
        conectar.mostarOpciones(concurso.preguntaEnJuego().opciones, (opcionElegida) => {
            concurso.respondio(opcionElegida);
            nuevaPregunta(concurso, conectar);
        });
    }
}

function main() {
    const concurso = new Concurso(preguntas);
    const conectar = new Conectar();
    console.log(concurso)
    nuevaPregunta(concurso, conectar);
}

main();