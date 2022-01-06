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


    /**
     * 
     * @param {number} puntaje total de puntos
     */
    mostrarPuntaje(puntaje){
        const totalPuntaje = `
        <h1>Finalizado</h1>
        <h2>Tu puntaje fue: ${puntaje}</h2>
        `
        const elemento = document.getElementById("concurso");
        elemento.innerHTML = totalPuntaje;
    }

    /**
     * 
     * @param {number} preguntaEnJuego pregunta actual a responder
     * @param {number} total total de preguntas a reponder
     */
    mostrarProgreso(preguntaEnJuego, total){
        const progreso = document.getElementById("progreso");
        progreso.innerHTML = `Pregunta ${preguntaEnJuego+1} de ${total}`;
    }
}