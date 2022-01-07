/* Logica de la aplicación */
import { preguntas } from './datos/preguntas.js';
import { Concurso } from './modelos/Concurso.js';
import { Conectar } from './modelos/Conectar.js';
import { Ronda } from './modelos/Ronda.js';

/**
 * 
 * @param {Concurso} concurso 
 * @param {Conectar} conectar 
 */
const nuevaPregunta = (concurso, conectar) => {
    if (concurso.finJuego()) {
        conectar.mostrarPuntaje(concurso.puntaje);
    } else {
        conectar.mostrarPregunta(concurso.preguntaEnJuego().pregunta, concurso.preguntaEnJuego().categoria, concurso.preguntaEnJuego().dificultad);
        conectar.mostarOpciones(concurso.preguntaEnJuego().opciones, (opcionElegida) => {
            concurso.respondio(opcionElegida);
            nuevaPregunta(concurso, conectar);
        });
        conectar.mostrarProgreso(concurso.preguntaActual, concurso.preguntas.length);
    }
}

function main() {
    const conectar = new Conectar();
    const ronda = new Ronda(preguntas);
    const concurso = new Concurso(ronda.facil(preguntas));
    console.log(ronda.facil(preguntas));
    nuevaPregunta(concurso, conectar);
}

main();