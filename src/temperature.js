// OpenWeather API has Kelvins as the default measurement

function getFahrenheit(kelvins) {
    return ((kelvins - 273.15) * 1.8) + 32;
}

function getCelsius(kelvins) {
    return kelvins - 273.15;
}

export {getFahrenheit, getCelsius};