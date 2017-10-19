const WeatherStatus = {
  CLEAR: 0,
  CLOUDY: 1,
  DRIZZLE: 2,
  RAIN: 3,
  SNOW: 4,
  STORM: 5,
  fromString(str) {
    switch (str) {
      case 'clear':
        return WeatherStatus.CLEAR;
      case 'clouds':
        return WeatherStatus.CLOUDY;
      case 'drizzle':
        return WeatherStatus.DRIZZLE;
      case 'rain':
        return WeatherStatus.RAIN;
      case 'snow':
        return WeatherStatus.SNOW;
      case 'thunderstorm':
        return WeatherStatus.STORM;
    }
  }
};

module.exports = WeatherStatus;
