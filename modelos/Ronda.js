import { Pregunta } from "./Pregunta.js";
/* Clase Ronda */
export class Ronda {

    /* iniciar desde 0 */
    rondaActual = 0;


    /**
     * 
     * @param {Pregunta[]} preguntas lista de clase Pregunta
     */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /**
     * 
     * @returns {Pregunta} pregunta actual
     */
    rondaEnJuego(){
        return this.preguntas[this.rondaActual]
    }
    
    /**
     * 
     * @returns {boolean} indica que la ronda termino
     */
    finRonda(){
        return this.preguntas.length === this.rondaActual;
    }


    jugar(respuesta){
        if (this.rondaEnJuego().VerificarRespuesta(respuesta)) {
            this.puntaje++;
        }
        this.rondaActual++;
    }

    /**
     * 
     * @returns {number} numero de cambios de nivel
     */
    cambiarNivel(){
        if (this.preguntaActual%5==0) {
            return this.aumenta++;
        }
    }


    /**
     * 
     * @param {pregunta[]} preguntas lista de preguntas
     * @param {string} nivel nivel de dificultad
     * @returns 
     */
    facil(preguntas, nivel){
        const preguntaFacil = [];
        for (let i=0; i<preguntas.length; i++) {
            if (preguntas[i].dificultad === nivel) {
                preguntaFacil.push(preguntas[i]);
            }
        }
        return preguntaFacil;
    }

    medio(){

    }

    dificil(){

    }

    avanzado(){

    }

    imposible(){

    }
}