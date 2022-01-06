import { Pregunta } from '../modelos/Pregunta.js';
import {datos} from "./datos.js";

/* Recorrer arreglo y convertir en una clase */
export const preguntas = datos.map(pregunta =>  new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta, pregunta.dificultad, pregunta.categoria));
