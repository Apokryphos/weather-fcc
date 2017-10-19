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

  return {
    fetchData
  };
})();

module.exports = WeatherApi;
