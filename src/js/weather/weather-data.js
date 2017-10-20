const WeatherStatus = require('./weather-status.js');

function WeatherData(json) {
  this.location = `${json.name}, ${json.sys.country}`;
  this.temperature = json.main.temp;
  this.condition = null;
  this.status = [];

  json.weather.forEach(item => {
    if (item.main) {
      const statusStr = item.main.toLowerCase();
      const status = WeatherStatus.fromString(statusStr);
      if (status) {
        if (!this.condition) {
          this.condition = WeatherStatus.toString(status);
        }
        this.status.push(status);
      }
    }
  });
}

module.exports = WeatherData;
