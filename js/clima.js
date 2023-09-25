const API_KEY = "0320d5d15eb1ac4b440322520fda8818";

const fetchData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
       .then(response => response.json())
       .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        locacion: data.name,
        descripcion: data.weather[0].main,
        humedad: data.main.humidity,
        presion: data.main.pressure,
        temperatura: data.main.temp,
        fecha: getDate(),
    }
    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key]
    });

    cambioLoader();
}

const cambioLoader = () => {
    let container = document.getElementById("container");
    let loader = document.getElementById("loader");

    loader.style.display = "none";
    container.style.display = "flex";
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${( "0" + (date.getMonth()+1)).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}