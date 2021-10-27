function getWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4582f42658211134cda9749fe21a3065',
        {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })
}

export default getWeather;