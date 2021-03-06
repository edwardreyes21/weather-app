import {getFahrenheit, getCelsius} from './temperature'

function initializeHeader() {
    const header = document.querySelector('.header');

    const header_text = document.createElement('h1');
    header_text.classList.add("header-text");
    header_text.textContent = "Weather App";

    header.appendChild(header_text);
}

function initializeContent(weather_info) {
    const content = document.querySelector('.content');

    // Deletes the previous instance of the weather report
    let old_div = content.querySelector('.weather-info');
    if (old_div) {
        content.removeChild(old_div);
    }

    // Creates a new div to represent weather info
    const info_div = document.createElement('div');
    info_div.classList.add('weather-info');

    // Creates elements to represent certain aspects of the weather
    const location_text = document.createElement('h1');
    location_text.textContent = weather_info.name;

    // Temperature section
    const temperature_div = document.createElement('div');
    temperature_div.classList.add('temperature-div');

    const temperature_header = document.createElement('h2');
    temperature_header.textContent = 'Degrees: ';

    const temperature = document.createElement('h2');
    temperature.textContent = Math.round(getFahrenheit(weather_info.main.temp));

    const temperature_measurement = document.createElement('h2');
    temperature_measurement.textContent = 'degrees (fahrenheit)';

    temperature_div.appendChild(temperature_header);
    temperature_div.appendChild(temperature);
    temperature_div.appendChild(temperature_measurement);

    // Wind section
    const wind_div = document.createElement('div');
    wind_div.classList.add('wind-div');

    const wind_header = document.createElement('h2');
    wind_header.textContent = 'Wind speed: ';

    const wind_speed = document.createElement('h2');
    wind_speed.textContent = weather_info.wind.speed;

    const wind_measurement = document.createElement('h2');
    wind_measurement.textContent = 'meters/s';

    wind_div.appendChild(wind_header);
    wind_div.appendChild(wind_speed);
    wind_div.appendChild(wind_measurement);

    // Weather description section
    const desc_div = document.createElement('div');
    desc_div.classList.add('desc-div');

    const description = document.createElement('h2');
    description.textContent = `Humidity is at ${weather_info.main.humidity}% and the sky can be described as a ${weather_info.weather[0].description}.`;
    
    desc_div.appendChild(description);

    // Adds info to the div
    info_div.appendChild(location_text);
    info_div.appendChild(temperature_div);
    info_div.appendChild(wind_div);
    info_div.appendChild(desc_div);

    content.appendChild(info_div);
}

function initializeFooter() {
    const footer = document.querySelector('.footer');

    const footer_text = document.createElement('h1');
    footer_text.classList.add("footer-text");
    footer_text.textContent = "Made by Edward";

    footer.appendChild(footer_text);
}

export {initializeHeader, initializeContent, initializeFooter};