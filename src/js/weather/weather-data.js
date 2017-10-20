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

  //  If zero statuses were found, use the first entry for the condition.
  //  This could happen if none of the entries matched a WeatherState (e.g. fog)
  if (!this.condition) {
    this.condition = json.weather[0].main;
  }
}

module.exports = WeatherData;
