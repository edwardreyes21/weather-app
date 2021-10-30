import getWeather from "./weather";
import {initializeHeader, initializeContent, initializeFooter} from "./website";

initializeHeader();
initializeContent();
initializeFooter();

const submit = document.querySelector('#submit');

// Default location is Las Vegas
let location = 'Las Vegas';

submit.addEventListener('click', () => {
    location = document.querySelector('#location').value;
    getWeather(location);
});