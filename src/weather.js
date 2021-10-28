import getCity from "./city";

// Asynchronous function to get the weather
async function getWeather() {
    // Stores whatever is returned from the 'fetch' promise into a variable 'results'
    const results = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4582f42658211134cda9749fe21a3065',
        {mode: 'cors'});

    // .json() is a promise, so whatever it returns upon being resolved is stored into 'response'
    const response = await results.json();

    // Finally, logs the contents of 'response' into console
    console.log(response);
}

export default getWeather;