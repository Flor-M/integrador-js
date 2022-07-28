/*
👉 arreglar que no persista el error en password cuando quiero complertarla 
y seguir
*/

const formContainer = document.querySelector('.form-container');

const inputUser = document.querySelector('.input-name');
const errorUser = document.getElementById('error-name');

const inputPassword = document.querySelector('.input-password');
const errorPassword = document.getElementById('error-password');

const limpiarError = (e) =>{
    while (errorUser.firstChild || errorPassword.firstChild) {
        errorUser.removeChild(errorUser.firstChild);
        errorPassword.removeChild(errorPassword.firstChild);
    }
};

const validateField = (e) =>{
    
    const userName = inputUser.value.trim()
    const userPassword = inputPassword.value.trim()

    limpiarError();

    if (!userName) {
        const nodoError = document.createElement('p');
        const textError = document.createTextNode('Ingrese un nombre válido');
        nodoError.classList.add("errorText");

        errorUser.appendChild(nodoError);
        nodoError.appendChild(textError);

    } if (!userPassword) {
        const nodoError = document.createElement('p');
        const textError = document.createTextNode('Ingrese una contraseña válida');
        nodoError.classList.add("errorText");

        errorPassword.appendChild(nodoError);
        nodoError.appendChild(textError);
    } else {

        localStorage.setItem('user', JSON.stringify(userName));

        window.location.href="./curses.html";

    };

};

formContainer.addEventListener('submit', (e) => {

    e.preventDefault();

    validateField();

});