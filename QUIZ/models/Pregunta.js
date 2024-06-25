/*Modelo de estructura de objeto
Devuelve un nuevo objeto con las propiedades determinadas
tambien contiene un metodo para saber si la respuesta elegida es la correcta
*/


class Pregunta {
    /**
     *
     * @param {string} text el texto de la pregunta
     * @param {string[]} choices arreglo de opciones de respuesta a la pregunta
     * @param {string} answer la respuesta de la pregunta
     */
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    /**
     *
     * @param {string} choice opcion seleccionada por el usuario
     * @returns {boolean} devuelve si la respuesta es correcta o no
     */
    correctAnswer(choice) {
      return choice === this.answer;
    }
}
  
export { Pregunta };
