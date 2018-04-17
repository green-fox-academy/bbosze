const express = require('express');
const app = express();
const PORT = 8080;
const request = require('request');

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));
app.use(express.json());

const forecasts = [
  {
    city: 'Seattle',
    location: 'Washington, United States',
    weather: [
      { temp: 11, icon: 'cloudy', message: 'Complete Grey' },
      { temp: 11, icon: 'cloudy', message: 'Just stay in bed.' },
      { temp: 13, icon: 'cloudy', message: 'Meh...' },
      { temp: 12, icon: 'cloudy', message: 'Still meh...' },
      { temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.' },
    ],
  },
  {
    city: 'Miami',
    location: 'Florida, United States',
    weather: [
      { temp: 33, icon: 'sunny', message: 'Hot.' },
      { temp: 35, icon: 'sunny', message: 'Too hot!' },
      { temp: 34, icon: 'sunny', message: 'Sunny.' },
      { temp: 34, icon: 'sunny', message: 'Beach time!' },
      { temp: 35, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'Barcelona',
    location: 'Spain',
    weather: [
      { temp: 19, icon: 'sunny', message: 'Sunny.' },
      { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 17, icon: 'sunny', message: 'So far so good.' },
      { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella' },
      { temp: 18, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'London',
    location: 'United Kingdom',
    weather: [
      { temp: 4, icon: 'snowy', message: 'Go home winter.' },
      { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?' },
      { temp: 10, icon: 'rainy', message: 'It\'s rainy.' },
      { temp: 9, icon: 'rainy', message: 'Meh...' },
      { temp: 11, icon: 'rainy', message: 'Meh... Again.' },
    ],
  },
  {
    city: 'Budapest',
    location: 'Hungary',
    weather: [
      { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.' },
      { temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
      { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
      { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 19, icon: 'partly_cloudy', message: 'So far so good.' },
    ],
  },
];

let cities = ['Madrid', 'Miami', 'Barcelona', 'London', 'Budapest', 'Kingston', 'Szeged', 'Moscow', 'Szentendre'];
let oneDayForecast = [];
let fiveDaysForecast = [];



for (let i = 0; i < cities.length; i++) {
  let url = `http://api.apixu.com/v1/current.json?key=6f2e05b3086f4fd2842183125180504&q=${cities[i]}`;
  request(url, (err, res, body) => {
    let data = JSON.parse(body);
    oneDayForecast.push([data.location.name, data.location.region, data.current.temp_c, data.current.condition.icon, data.current.condition.text]);
  });

}

app.get('/', (req, res) => {
  let cityIndex = 0;
  let chosenCity = req.query.city;
  if (req.query.city === undefined) {
    res.render('home', {
      forecasts,
      oneDayForecast,
  })}
  else {
  forecasts.forEach((e, i) => {
    if (e.city === chosenCity) {
      cityIndex = i;
  }})
  res.render('city', {
    forecasts,
    chosenCity,
    cityIndex,
  })}
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
