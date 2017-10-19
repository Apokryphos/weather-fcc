const App = require('./app/app.jsx');
const WeatherApi = require('./weather-api');
const React = require('react');
const ReactDom = require('react-dom');

if ('geolocation' in navigator) {
  const success = function(position) {
    WeatherApi.fetchData(
      position.coords.latitude,
      position.coords.longitude,
      function(data) {
        console.log(JSON.stringify(data));
      }
    );
  };

  const error = function(e) {
    console.error(e);
  };

  // navigator.geolocation.getCurrentPosition(success, error);
} else {
  //  Geolocation is unavailable.
}

ReactDom.render(<App />, document.getElementById('root'));
