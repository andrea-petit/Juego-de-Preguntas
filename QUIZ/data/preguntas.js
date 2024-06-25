import { Pregunta } from "../models/Pregunta.js";
import { data } from "./data.js";

export const preguntas = data.map(
  (question) =>
    new Pregunta(question.question, question.choices, question.answer)
);

/*Con esto obtendremos un nuevo arreglo a partir del que teniamos en data
este arreglo tiene los objetos con las propiedades que le dio la clase
(text, choices y answer) y su metodo correctAnswer
*/
