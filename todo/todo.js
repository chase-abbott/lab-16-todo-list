import { getUser, isLoggedIn } from '../local-storage.utils.js';


const user = getUser();


if (!isLoggedIn(user.username)) {
    window.location = '../';
}

renderTodos();