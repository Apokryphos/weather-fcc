const fs = require('fs');
const test = require('tape');
const WeatherData = require('./../src/js/weather/weather-data.js');
const WeatherStatus = require('./../src/js/weather/weather-status.js');

test('Rain - Shuzenji, JP', t => {
  const json = require('./weather-api-data/01.json');
  const data = new WeatherData(json);
  t.equal(data.location, 'Shuzenji, JP');
  t.equal(data.temperature, 12);
  t.equal(data.status.some(s => s === WeatherStatus.RAIN), true);
  t.end();
});

test('Clouds - Shuzenji, JP', t => {
  const json = require('./weather-api-data/02.json');
  const data = new WeatherData(json);
  t.equal(data.location, 'Shuzenji, JP');
  t.equal(data.temperature, 28.23);
  t.equal(data.status.some(s => s === WeatherStatus.CLOUDY), true);
  t.end();
});
