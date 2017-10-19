const WeatherData = require('./weather-data.js');
const WeatherStatus = require('./weather-status.js');

const WeatherApi = (function() {
  const endpoint = 'https://fcc-weather-api.glitch.me';

  const fetchData = function(latitude, longitude, callback) {
    const query = `lat=${latitude}&lon=${longitude}`;
    const url = `${endpoint}/api/current?${query}`;

    console.log(url);

    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }

        return new Error('Request failed.');
      })
      .then(function(data) {
        if (callback) {
          callback(data);
        }
      });
  };

  const getWeather = function(callback) {
    if ('geolocation' in navigator) {
      const success = function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetchData(latitude, longitude, function(json) {
          console.log(JSON.stringify(json));

          if (callback) {
            callback(new WeatherData(json));
          }
        });
      };

      const error = function(e) {
        console.error(e);
      };

      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      //  Geolocation is unavailable.
    }
  };

  const getMockWeather = function(callback, status = WeatherStatus.CLEAR) {
    if (callback) {
      callback({
        location: 'MOCK',
        temperature: 25,
        status
      });
    }
  };

  return {
    getWeather: getMockWeather
  };
})();

module.exports = WeatherApi;
