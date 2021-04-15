import { createUser, isLoggedIn, setLoggedIn, usernamePwordMatch, doesUserExist, } from "./local-storage.utils.js";



isLoggedIn();

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log(username, password);

    if (doesUserExist(username)) {
        if (usernamePwordMatch(username, password)) {
            setLoggedIn(username);
            window.location = './todo';
            //if they don't match: 
        } else {
            alert('Wrong username or password.');
        }
    } else {
        setLoggedIn(username);
        createUser(username, password);
        window.location = './todo';
    }

});

