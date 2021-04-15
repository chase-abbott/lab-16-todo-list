
const LOGGED_IN = 'LOGGED_IN';
const USER = 'USER'

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
    const user = localStorage.getItem(USER);
    const parsedUser = JSON.parse(user);

    if (!parsedUser) return {};

    return parsedUser;
}

export function usernamePwordMatch(username, password) {
    const user = getUser();

    if (username === user.username && password === user.password) {
        return true;
    }
}

export function createUser(username, password) {
    const user = {
        username,
        password,
        todos: []
    };

    setUser(user);
}
export function doesUserExist(username) {
    const user = getUser();
    if (!user) return false;

    return user.username === username;

}

export function addTodo(todo) {
    const user = getUser();

}
