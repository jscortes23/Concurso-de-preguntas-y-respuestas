/* Clase pregunta */
export class Pregunta {

    /**
     * 
     * @param {string} pregunta Es la pregunta
     * @param {string[]} opciones Son las opciones de la pregunta
     * @param {string} respuesta Es la respuesta de la pregunta
     */

    /* Propiedades */
    constructor(pregunta, opciones, respuesta){
        this.pregunta = pregunta
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} opcion texto de la opcion elegida
     * @returns {boolean} es true si la respuesta es correcta
     */

    /* Metodos */
    VerificarRespuesta(opcion) {
        return opcion === this.respuesta;
    }
}
