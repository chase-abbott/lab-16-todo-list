import { getUser, completeTodo } from './local-storage.utils.js';

export function renderLi(todoObject) {
    const li = document.createElement('li');

    li.textContent = todoObject.todo;

    if (todoObject.completed) {
        li.style.textDecoration = 'line-through';
    };

    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
        completeTodo(todoObject.id);
    });

    return li;
}

export function renderTodos() {
    const ul = document.querySelector('ul');

    ul.textContent = '';

    const user = getUser();

    user.todos.forEach(todoObject => {
        const li = renderLi(todoObject);

        ul.append(li);
    });
}
: