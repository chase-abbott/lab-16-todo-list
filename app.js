import { isLoggedIn, setLoggedIn, usernamePwordMatch, doesUserExist, } from './local-storage.utils.js';

const errorSpan = document.querySelector('#error-span');

if (isLoggedIn()) {
    window.location = './todo';
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if (doesUserExist(username)) {
        if (usernamePwordMatch(username, password)) {
            setLoggedIn(username);
            window.location = './todo';
            //if they don't match: 
        } else {
            errorSpan.textContent = 'Wrong Username or password! If you have not already signed up, do so here:';
        }
        
    } errorSpan.textContent = 'Username does not exist. Please sign up using the link below.';
});

//get rid of this 
// } else {
//     setLoggedIn(username);
//     createUser(username, password);
//     window.location = './todo';
// }


