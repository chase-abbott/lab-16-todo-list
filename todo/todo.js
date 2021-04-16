import { getUser, isLoggedIn, addTodo } from '../local-storage.utils.js';
import { renderTodos, renderLi } from '../render-utils.js';

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const logout = document.querySelector('#logout-button');
const user = getUser();


if (!isLoggedIn(user.username)) {
    window.location = '../';
}

renderTodos();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const todoMessage = formData.get('todo');

    const newTodoItem = addTodo(todoMessage);

    const newli = renderLi(newTodoItem);

    ul.append(newli);
});

logout.addEventListener('click', () => {
    localStorage.removeItem('LOGGED_IN');
    window.location = '../';
});
