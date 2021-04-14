import { getLoggedIn, setLoggedIn } from "./local-storage.utils.js";

setLoggedIn('chase');

console.log(getLoggedIn());