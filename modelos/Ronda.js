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
        this.preguntaActual++;
    }

    /**
     * 
     * @param {Pregunta} preguntas 
     * @returns 
     */
    facil(preguntas){
        const preguntaFacil = [];
        for (let i=0; i<preguntas.length; i++) {
            if (preguntas[i].dificultad === 'facil') {
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