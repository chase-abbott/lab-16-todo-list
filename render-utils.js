import { getUser, setUser } from './local-storage.utils.js';

export function renderTodos() {

    const ul = document.querySelector('ul');
    const user = getUser();

    user.todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.todo;
        if (todo.completed = true) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
            todo.completed = true;
            setUser(user);
        })
        ul.append(li);
    }
    );
    return ul;
}

export function renderLi(todomessage) {
    const li = document.createElement('li');

    li.textContent = todomessage;
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
    })

    return li;
}


