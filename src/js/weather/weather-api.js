const WeatherData = require('./weather-data.js');
const WeatherStatus = require('./weather-status.js');

const WeatherApi = (function() {
  const endpoint = 'https://fcc-weather-api.glitch.me';

  const fetchData = function(latitude, longitude, callback) {
    const query = `lat=${latitude}&lon=${longitude}`;
    const url = `${endpoint}/api/current?${query}`;

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

  const getMockWeather = function(callback, status = null) {
    if (!status) {
      const statuses = [
        WeatherStatus.CLEAR,
        WeatherStatus.CLOUDY,
        WeatherStatus.DRIZZLE,
        WeatherStatus.RAIN,
        WeatherStatus.SNOW,
        WeatherStatus.STORM
      ];

      //  Make an array with a random status in it
      status = [statuses[Math.floor(Math.random() * statuses.length)]];
    }

    if (callback) {
      callback({
        condition: WeatherStatus.toString(status[0]),
        location: 'MOCK',
        temperature: 25,
        status: status
      });
    }
  };

  return {
    getWeather
  };
})();

module.exports = WeatherApi;
