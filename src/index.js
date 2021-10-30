import getWeather from "./weather";
import {initializeHeader, initializeContent, initializeFooter} from "./website";
import {getFahrenheit, getCelsius} from './temperature'

initializeHeader();
initializeFooter();

const submit = document.querySelector('#submit');

// Default location is Las Vegas
let location = 'Las Vegas';
let response = getWeather(location);
let weather_info;
response.then((value) => {
    weather_info = value;
    console.log(weather_info);
    console.log(getFahrenheit(weather_info.main.temp));
    initializeContent(weather_info);
});

// When user clicks 'Get weather', process location
submit.addEventListener('click', () => {
    location = document.querySelector('#location').value;

    // Only retrieve weather if the user inputted something
    if (location != '') {
        // getWeather is an async function, so it will ultimately return a promise
        response = getWeather(location);
        // As a result, we use .then() to access the value of the promise
        response.then((value) => {
            weather_info = value;
            console.log(weather_info);
            initializeContent(weather_info);
        });
    }
});