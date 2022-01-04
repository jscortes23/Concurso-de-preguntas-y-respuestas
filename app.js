/* Logica de la aplicación */
import { preguntas } from './datos/preguntas.js';
import { Concurso } from './modelos/Concurso.js'

function main(params) {
    const concurso = new Concurso(preguntas);

    concurso.respondio('sadasd');
    console.log(concurso);
}

main();