import { getUser, setUser, completeTodo } from './local-storage.utils.js';

export function renderLi(todoObject) {
    const li = document.createElement('li');

    li.textContent = todoObject.todo;

    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';

        completeTodo(todoObject.todo);
    });

    return li;
}

export function renderTodos() {
    const ul = document.querySelector('ul');

    ul.textContent = '';
    const user = getUser();
    user.todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.todo;
        ul.append(li);
    });
}

