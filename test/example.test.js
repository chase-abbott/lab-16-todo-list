// IMPORT MODULES under test here:
import { getLoggedIn, isLoggedIn } from '../local-storage.utils.js';

const test = QUnit.test;

test('Test getLoggedIn function', (expect) => {
    const userdata = JSON.stringify('hello');

    localStorage.setItem('LOGGED_IN', userdata);

    const expected = JSON.parse(localStorage.getItem('LOGGED_IN'));

    const actual = getLoggedIn();

    expect.deepEqual(actual, expected);
});

test('Test isLoggedIn function', (expect) => {
    const username = 'chase';

    const stringyUser = JSON.stringify(username);

    localStorage.setItem('LOGGED_IN', stringyUser);

    const actual = isLoggedIn('chase');

    const expected = true;

    expect.deepEqual(actual, expected);
});
