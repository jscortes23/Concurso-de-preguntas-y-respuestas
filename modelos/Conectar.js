/* Para mostrar en la pagina web */
export class Conectar {
    constructor() { }

    /**
     * 
     * @param {string} pregunta mostrar pregunta en pagina web
     */
    mostrarPregunta(pregunta) {
        const titulo = document.getElementById("pregunta");
        titulo.innerHTML = pregunta;
    }

    /**
     * 
     * @param {string[]} opciones 
     */
    mostarOpciones(opciones, callback) {
        const todasOpciones = document.getElementById("opciones");
        
        /* Limpiar las opciones anteriores */
        todasOpciones.innerHTML = '';

        /* Crear botones con el nombre de las opciones */
        for (let i = 0; i < opciones.length; i++) {
            const boton = document.createElement('button');
            /* Darle nombre al boton */
            boton.innerText = opciones[i];
            /* Estilo del boton */
            boton.className = 'boton';

            /* Funcioanlidad del boton */
            boton.addEventListener('click', ()=> callback(opciones[i]));
            todasOpciones.append(boton);
        }
    }
}