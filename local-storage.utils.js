
const LOGGED_IN = 'LOGGED_IN';
const USER = 'USER';

export function setLoggedIn(username) {
    const stringyUsername = JSON.stringify(username);

    localStorage.setItem(LOGGED_IN, stringyUsername);
}

export function getLoggedIn() {
    const user = localStorage.getItem(LOGGED_IN);
    const parsedLogIn = JSON.parse(user);

    if (!parsedLogIn) return '';

    return parsedLogIn;
}

export function isLoggedIn() {
    const login = getLoggedIn();

    if (login) return true;

}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const username = JSON.parse(localStorage.getItem('LOGGED_IN'));
    const users = localStorage.getItem(USER);
    const parsedUsers = JSON.parse(users);

    if (!parsedUsers) return {};

    const matchingUser = parsedUsers.find(user => user.username === username);

    if (!matchingUser) return {};

    return matchingUser;
}

export function usernamePwordMatch(username, password) {
    const user = getUser(username);

    if (username === user.username && password === user.password) {
        return true;
    }
}

export function createUser(username, password) {
    let localStorageUser = localStorage.getItem(USER);

    if (!localStorageUser) {
        localStorageUser = [];
    }

    const user = {
        username,
        password,
        todos: []
    };
    localStorageUser.push(user);
    setUser(localStorageUser);
}
export function doesUserExist(username) {
    const user = getUser(username);
    if (!user) return false;

    return user.username === username;

}

export function completeTodo(todoId) {
    const user = getUser(localStorage.getItem('LOGGED_IN'));

    const matchingTodo = user.todos.find(todo => todo.id === todoId);

    matchingTodo.completed = true;

    setUser(user);
}

export function addTodo(todoMessage) {
    const user = getUser(JSON.parse(localStorage.getItem('LOGGED_IN')));

    const todoObject = {};

    todoObject.id = Math.floor(Math.random() * 10000000000);
    todoObject.todo = todoMessage;
    todoObject.completed = false;

    user.todos.push(todoObject);

    setUser(user);

    return todoObject;
}
