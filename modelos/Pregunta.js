/* Clase pregunta */
class Pregunta {

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

    /* Metodos */
    VerificarRespuesta(opcion) {
        return opcion === this.respuesta;
    }
}
