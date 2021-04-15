import { createUser, isLoggedIn, setLoggedIn, doesUserExist } from '../local-storage.utils.js';


const errorSpan = document.querySelector('#error-span');
const button = document.querySelector('#login');

if (isLoggedIn()) {
    window.location = '../todo';
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if (doesUserExist(username)) {
    
        errorSpan.textContent = 'User with that name already exists. Go back to login page:';

    } else {
        createUser(username, password);
        setLoggedIn(username);
        window.location = '../todo';
    }});

button.addEventListener('click', () => {

    window.location = '../';
    
});