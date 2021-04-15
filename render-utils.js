import { getUser, setUser } from './local-storage.utils.js';

export function renderLi(todoObject) {
    const li = document.createElement('li');

    li.textContent = todoObject.todo;

    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
        const user = getUser();
        
        const matchingTodo = user.todos.find(todo => {
            
        })
    
    });

    return li
}

















// export function renderTodos() {

//     const ul = document.querySelector('ul');
//     const user = getUser();

//     user.todos.forEach(todo => {
//         console.log(todo)
//         console.log(todo.completed)
//         const li = document.createElement('li');
//         li.textContent = todo.todo;
//         if (todo.completed) {
//             li.style.textDecoration = 'line-through';
//         }
//         li.addEventListener('click', () => {
//             li.style.textDecoration = 'line-through';
//             todo.completed = true;
//             console.log(todo.completed)

//             setUser(user);
//             console.log(user)
//         })
//         ul.append(li);
//     }
//     );
//     return ul;
// }

// export function renderLi(todo) {
//     const li = document.createElement('li');
//     const user = getUser();

//     li.textContent = todo.todo;

//     li.addEventListener('click', () => {
//         li.style.textDecoration = 'line-through';
//         todo.completed = true;
//         setUser(user);
//     });

//     return li;
// }


