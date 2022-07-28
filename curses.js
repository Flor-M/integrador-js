/*
👉 input que borre los cursos, filtre y renderice
*/


const Cursos = [
    {
        id: 1,
        nombre: 'Curso Anatomía y Evolución de Charmander', 
        pokemon: 'CHARMANDER',
        duracion: '3 meses', 
        modalidad: 'online'
    },
    {
        id: 2,
        nombre: 'Curso Anatomía y Evolución de Squirtle',
        pokemon: 'SQUIRTLE',
        duracion: '3 meses', 
        modalidad: 'online'
    },
    {
        id: 3,
        nombre: 'Curso Anatomía y Evolución de Pikachu',
        pokemon: 'PIKACHU',
        duracion: '3 meses', 
        modalidad: 'online'
    },
    {
        id: 4,
        nombre: 'Curso Anatomía y Evolución de Bulbasaur',
        pokemon: 'BULBASAUR',
        duracion: '3 meses', 
        modalidad: 'online'
    },
    {
        id: 5,
        nombre: 'Curso Anatomía y Evolución de Ekans',
        pokemon: 'EKANS',
        duracion: '3 meses', 
        modalidad: 'en vivo'
    },
    {
        id: 6,
        nombre: 'Curso Anatomía y Evolución de Pidgey',
        pokemon: 'PIDGEY',
        duracion: '3 meses', 
        modalidad: 'online'
    },
    {
        id: 7,
        nombre: 'Curso Anatomía y Evolución de Vulpix',
        pokemon: 'VULPIX',
        duracion: '3 meses', 
        modalidad: 'en vivo'
    }
];

const userContainer = document.querySelector('.user-container');
const cursosList = document.querySelector('.cursos-list');

const nombrePoke = document.querySelector('#input-choose');
const btnChoose = document.querySelector('.chooseButton');

const userString = localStorage.getItem('user');
const userExistente = JSON.parse(userString);


const renderUser = (userExistente) => {

    const welcomeNodo = document.createElement('p');
    const welcomeText = document.createTextNode(`Hola ${userExistente} ¡Comencemos a estudiar!`);
    welcomeNodo.classList.add("user-container");

    welcomeNodo.appendChild(welcomeText);
    userContainer.appendChild(welcomeNodo);

};

const limpiarData = () => {

    while (cursosList.firstChild) {
        cursosList.removeChild(cursosList.firstChild);
    }
};

const imprimirError = (Cursos) => {

    const nodoError = document.createElement('p');
    const textError = document.createTextNode(`Ingrese un nombre válido, los nombres disponible son:
    ${Cursos.reduce((acc, value) => {
        const {pokemon} = value
        return acc+' '+pokemon
      }, [])
    }`);
    nodoError .classList.add("error");

    cursosList.appendChild(nodoError);
    nodoError.appendChild(textError);
};

const imprimirCurso = (curso) => {

    const cursoItem = document.createElement('li');
    cursoItem.classList.add("curso-item");

    const cursoTitle = document.createElement('h3');
    const cursoTitleText = document.createTextNode(`${curso.nombre}`);
    cursoTitle.classList.add("curso-title");

    cursoTitle.appendChild(cursoTitleText);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add("curso-info");

    const infoDuration = document.createElement('div');
    infoDuration.classList.add("curso-info-text");

    const durationTitle = document.createElement('p');
    const durationTitleText = document.createTextNode(`Duración`);

    durationTitle.appendChild(durationTitleText);

    const duration = document.createElement('span');
    const durationText = document.createTextNode(`${curso.duracion}`);

    duration.appendChild(durationText);

    const infoModalidad = document.createElement('div');
    infoModalidad.classList.add("curso-info-text");

    const modalidadTitle = document.createElement('p');
    const modalidadTitleText = document.createTextNode(`Modalidad`);

    modalidadTitle.appendChild(modalidadTitleText);

    const modalidad = document.createElement('span');
    const modalidadText = document.createTextNode(`${curso.modalidad}`);

    modalidad.appendChild(modalidadText);

    cursosList.appendChild(cursoItem);

    cursoItem.appendChild(cursoTitle);
    cursoItem.appendChild(infoContainer);

    infoContainer.appendChild(infoDuration);
    infoContainer.appendChild(infoModalidad);

    infoDuration.appendChild(durationTitle);
    infoDuration.appendChild(duration);

    infoModalidad.appendChild(modalidadTitle);
    infoModalidad.appendChild(modalidad);

};

const renderCursos = (Cursos) => {

    Cursos.forEach(curso => {
        imprimirCurso(curso)
    });
};

document.addEventListener("DOMContentLoaded", (e) => {

    localStorage.setItem('cursos', JSON.stringify(Cursos));

    renderUser(userExistente);

    renderCursos(Cursos);

});

btnChoose.addEventListener('click', (e) => {

    limpiarData();
    
    const curso = Cursos.find((curso) => curso.pokemon == nombrePoke.value.toUpperCase());

    !curso ? imprimirError(Cursos) : imprimirCurso(curso);

    nombrePoke.value = '';

});

