//@ts-check
import { Quiz } from "./models/Quiz.js";
import { preguntas } from "./data/preguntas.js";
import { Interfaz } from "./models/Interfaz.js";

const renderPage= (quiz, interfaz) => {
    if(quiz.finalizado()){
        interfaz.showPuntos(quiz.puntos)
    } else{
        interfaz.showQuestion(quiz.getPreguntaIndex().text)
        interfaz.showChoices(quiz.getPreguntaIndex().choices, (currentChoice) => {
            quiz.adivina(currentChoice);
            renderPage(quiz, interfaz);
        });
        interfaz.showProgress(quiz.preguntaIndex + 1, quiz.preguntas.length);
    }
}

function main() {
    const quiz = new Quiz(preguntas);
    const interfaz= new Interfaz();

    renderPage(quiz, interfaz)
}
  
main();