import { Pregunta } from "./Pregunta.js";
/* Logica del concurso */
export class Concurso {


    /* iniciar desde 0 */
    preguntaActual = 0;
    puntaje = 0;
    aumenta = 0;

    /**
     * 
     * @param {Pregunta[]} preguntas 
     */

    /* Propiedades */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /* Metodos */
    /* Pasar en que pregunta va */

    /**
     * 
     * @returns {Pregunta} pregunta encontrada
     */

    preguntaEnJuego(){
        return this.preguntas[this.preguntaActual];
    }


    
    finJuego(){
        return this.preguntas.length === this.preguntaActual;
    }


    /**
     * 
     * @returns {number} numero de cambios de nivel
     */
    cambiarNivel(){
        if (this.preguntaActual%5 == 0) {
            this.aumenta++;
        }
    }


    /**
     * 
     * @param {string} respuesta texto de respuesta elegida 
     */

    /* Para avanzar */
    respondio(respuesta){
        if (this.preguntaEnJuego().VerificarRespuesta(respuesta)) {
            this.puntaje++;
        }
        this.preguntaActual++;
    }
}