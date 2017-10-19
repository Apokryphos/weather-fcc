function WeatherData(json) {
  this.location = `${json.name}, ${json.sys.country}`;
  this.temperature = json.main.temp;
}

module.exports = WeatherData;
