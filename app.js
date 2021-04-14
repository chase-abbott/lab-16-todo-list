import { createUser, isLoggedIn, setLoggedIn } from "./local-storage.utils.js";



isLoggedIn()

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log(username, password);

    if (usernamePwordMatch(username, password)) {
        setLoggedIn(username);
        window.location = './todo';
        //if they don't match: 
    } else {
        alert('Wrong username or password.') 
        window.location = './todo';
    

});

createUser(username, password)