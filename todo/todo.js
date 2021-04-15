import { getUser, setUser, isLoggedIn } from '../local-storage.utils.js';
import { renderTodos, renderLi } from '../render-utils.js';

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const user = getUser();


if (!isLoggedIn(user.username)) {
    window.location = '../';
}

// renderTodos();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const todoMessage = formData.get('todo');

    const todoObject = {};
    todoObject.todo = todoMessage;
    todoObject.completed = false;
    user.todos.push(todoObject);

    setUser(user);

    // const newli = renderLi(todoMessage);

    ul.append(newli);
})