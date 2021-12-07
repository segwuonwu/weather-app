//Getting the html elements
const input = document.getElementById('cityinput');
const submit = document.getElementById('add');
const city = document.getElementById('city');
const condition = document.getElementById('condition');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const weatherDisplay = document.getElementById('display');

//weather api_key
api_key = "4d91e309ccabca359c07956e0ec6451f";

//converstion: 1 Kelvin = -272.15 Celsius
const convert = (value) => {
    return (value - 273).toFixed(2);
};

weatherDisplay.style.display = "none";

// Using fetch to get the weather information
submit.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const name = data.name;
            const description = data.weather[0].description;
            const val = data.main.temp;
            const temperature = convert(val);

            city.innerHTML = `Weather of <span>${name}</span>`;
            condition.innerHTML = `Sky Conditions: <span>${description}</span>`;
            temp.innerHTML = `Temperature: <span>${temperature}℃ </span> `
            weatherDisplay.style.display = "block";

        })

})
