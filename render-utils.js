import { getUser } from './local-storage.utils.js';

export function renderTodos() {

    const ul = document.querySelector('ul');
    const user = getUser();

    user.todos.forEach(todo => li.textContent);
    ul.append;
    return ul;
}



