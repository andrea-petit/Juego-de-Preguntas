/*const categorySelect= document.getElementById('categorias');
const startButton= document.getElementById('startButton');

//Arreglo para almacenar los datos de la api
let dataPreguntas= [];

//Funcion para generar la url de la api y obtener los datos

function fetchApiData() {
    let selectedCategory= categorySelect.value;
    const apiKey = '$2b$12$kCSaaRC4OklipqPgc4D8/OsRkzGuByXdN0Y3JsJr45/8jNfBrNKFa';
    const apiUrl = `https://api.quiz-contest.xyz/questions?limit=5&page=1&category${selectedCategory}=&format=multiple`;

    fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
        .then(response => response.json())
        .then(data => {
          dataPreguntas.push(...data)
          console.log('datos obtenidos', dataPreguntas)
        })
        .catch(error => {
          console.error('Error al obtener las preguntas:', error);
        });

}

//Evento para ejecutar la funcion cuando se haga clic en el boton
startButton.addEventListener('click', fetchApiData);
*/ 

export const data = [
  {
    question: "Cual de las siguientes opciones no es un editor de codigo?",
    choices: ["vim", "vscode", "emacs", "word"],
    answer: "word",
  },
  {
    question: "Que lenguaje no es orientado a Objetos",
    choices: ["Java", "Haskell", "C++", "Python"],
    answer: "Haskell",
  },
  {
    question: "Que lenguaje no sirve para estilizar sitios web?",
    choices: ["Stylus", "Less", "Sass", "CSS", 'PostCSS', 'NextCSS'],
    answer: "NextCSS",
  },
];