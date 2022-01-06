/* Clase Ronda */
export class Ronda {

    /**
     * 
     * @param {preguntas} preguntas lista de clase Pregunta
     */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /**
     * 
     * @param {*} preguntas 
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