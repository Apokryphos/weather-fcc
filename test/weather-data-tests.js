const fs = require('fs');
const test = require('tape');
const WeatherData = require('./../src/js/weather-api/weather-data.js');

test('Shuzenji, JP', t => {
  const json = require('./weather-api-data/01.json');
  const data = new WeatherData(json);
  t.equal(data.location, 'Shuzenji, JP');
  t.equal(data.temperature, 12);
  t.end();
});
