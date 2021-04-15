import { getUser, setUser, completeTodo } from './local-storage.utils.js';

export function renderLi(todoObject) {
    const li = document.createElement('li');

    li.textContent = todoObject.todo;

    if (todoObject.completed) {
        li.style.textDecoration = 'line-through';
    };

    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
        completeTodo(todoObject.todo);
        // renderTodos();
    });

    return li;
}

export function renderTodos() {
    const ul = document.querySelector('ul');

    ul.textContent = '';

    const user = getUser();

    user.todos.forEach(todoObject => {
        const li = renderLi(todoObject);
        // const li = document.createElement('li');
        // li.textContent = todoObject.todo;

        // if (todoObject.completed) {
        //     li.style.textDecoration = 'line-through';
        // };

        // li.addEventListener('click', () => {
        //     li.style.textDecoration = 'line-through'
        //     completeTodo(todoObject.todo);
        // });

        ul.append(li);
    });
}

