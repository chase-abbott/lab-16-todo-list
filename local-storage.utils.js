
const LOGGED_IN = 'LOGGED_IN';

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

export function isLoggedIn(username) {
    const login = getLoggedIn();

    if (login === username) return true;

    return false;
}
