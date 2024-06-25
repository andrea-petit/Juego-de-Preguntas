//@ts-check
import { Pregunta } from "./Pregunta.js";

export class Quiz {
  puntos = 0;
  preguntaIndex = 0;

  /**
   *
   * @param {Pregunta[]} preguntas arreglo de objetos pregunta (con sus propiedades y metodos)
   */
  constructor(preguntas) {
    this.preguntas = preguntas;
  }

  /**
   *
   * @returns {Pregunta} objeto pregunta, ubica la pregunta que responderá el usuario
   */
  getPreguntaIndex() {
    return this.preguntas[this.preguntaIndex];
  }

  finalizado() {
    return this.preguntas.length === this.preguntaIndex;
  }
  /**
   * 
   * @param {string} answer recibe la respuesta seleccionada, añade puntos si es correcta y sube el indice de pregunta
   */

  adivina(answer) {
    if (this.getPreguntaIndex().correctAnswer(answer)) {
      this.puntos++;
    }
    this.preguntaIndex++;
  }
}