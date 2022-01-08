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
        console.log(concurso.puntaje)

    } else {
        conectar.mostrarPregunta(concurso.preguntaEnJuego().pregunta, concurso.preguntaEnJuego().categoria, concurso.preguntaEnJuego().dificultad);
        conectar.mostarOpciones(concurso.preguntaEnJuego().opciones, (opcionElegida) => {
            concurso.respondio(opcionElegida);
            nuevaPregunta(concurso, conectar);
            concurso.cambiarNivel();
        });
        conectar.mostrarProgreso(concurso.preguntaActual, concurso.preguntas.length);
        console.log(concurso.aumenta);
    }
}

function main() {
    const nivel = ['facil','medio','dificil','avanzado','imposible'];
    const ronda = new Ronda(preguntas);
    //const concurso = new Concurso(ronda.facil(preguntas, nivel[concurso.cambiarNivel()]));
    //const concurso = new Concurso(ronda.facil(preguntas, nivel[2]));
    const concurso = new Concurso(preguntas);
    const conectar = new Conectar();
    nuevaPregunta(concurso, conectar);
}

main();