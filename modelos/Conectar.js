import { Concurso } from "./Concurso.js";

/* Para mostrar en la pagina web */
export class Conectar {
    constructor() { }

    /**
     * 
     * @param {string} pregunta texto de la pregunta
     * @param {string} categoria texto de la categoria
     */
    mostrarPregunta(pregunta, categoria, dificultad) {
        const titulo = document.getElementById("pregunta");
        titulo.innerHTML = pregunta;
        const subTitulo = document.getElementById("categoria");
        subTitulo.innerHTML = `Categoria: ${categoria} - Nivel: ${dificultad}`;
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
            boton.addEventListener('click', () => callback(opciones[i]));
            todasOpciones.append(boton);
        }
    }


    /**
     * 
     * @param {number} puntaje total de puntos
     */
    mostrarPuntaje(puntaje) {
        var totalPuntaje = "";
        /* const totalPuntaje = `
        <h1>Finalizado</h1>
        <h2>Tu puntaje fue: ${puntaje}</h2>
        <p>No has obtenido premio</p>
        <a href="registro.html" id="fin">Volver</a>
        ` */
        if (puntaje >= 12 && puntaje < 15) {
             totalPuntaje = `
        <h1>Finalizado</h1>
        <h2>Tu puntaje fue: ${puntaje}</h2>
        <p>Has ganado 2 Boletos para ver Kimi no wa</p>
        <a href="registro.html" id="fin">Volver</a>

        `
        } else if (puntaje >= 15 && puntaje < 20) {
             totalPuntaje = `
            <h1>Finalizado</h1>
            <h2>Tu puntaje fue: ${puntaje}</h2>
            <p>Has ganado un viaje a Inglaterra</p>
        <a href="registro.html" id="fin">Volver</a>

            `
        } else if (puntaje >= 20 && puntaje <= 25) {
             totalPuntaje = `
            <h1>Finalizado</h1>
            <h2>Tu puntaje fue: ${puntaje}</h2>
            <p>Has ganado un $1.000.000</p>
        <a href="registro.html" id="fin">Volver</a>

            `
        } else {
             totalPuntaje = `
        <h1>Finalizado</h1>
        <h2>Tu puntaje fue: ${puntaje}</h2>
        <p>No has obtenido premio</p>
        <a href="registro.html" id="fin">Volver</a>

        `
        }
        const elemento = document.getElementById("concurso");
        elemento.innerHTML = totalPuntaje;
    }

    /**
     * 
     * @param {number} preguntaEnJuego pregunta actual a responder
     * @param {number} total total de preguntas a reponder
     */
    mostrarProgreso(preguntaEnJuego, total) {
        const progreso = document.getElementById("progreso");
        progreso.innerHTML = `Pregunta ${preguntaEnJuego + 1} de ${total}`;
    }

    finalizarJuego(Concurso) {
        const botonFin = document.getElementById("fin");
        botonFin.addEventListener('click', () => Concurso.finalizar());
    }
}