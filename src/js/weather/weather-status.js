const WeatherStatus = {
  CLEAR: 1,
  CLOUDY: 2,
  DRIZZLE: 3,
  RAIN: 4,
  SNOW: 5,
  STORM: 6,
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
  },
  toString(status) {
    switch (status) {
      case WeatherStatus.CLEAR:
        return 'Clear';
      case WeatherStatus.CLOUDY:
        return 'Cloudy';
      case WeatherStatus.DRIZZLE:
        return 'Light Rain';
      case WeatherStatus.RAIN:
        return 'Rain';
      case WeatherStatus.SNOW:
        return 'Snow';
      case WeatherStatus.STORM:
        return 'Thunderstorms';
    }
  }
};

module.exports = WeatherStatus;
