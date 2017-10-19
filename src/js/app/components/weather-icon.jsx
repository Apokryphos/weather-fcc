const React = require('react');
const WeatherStatus = require('./../../weather-api/weather-status.js');
const classNames = require('classnames');

class WeatherIcon extends React.Component {
  renderCloud() {
    return;
  }

  renderCloudOrSun(weatherStatus) {
    const sunny = weatherStatus === WeatherStatus.CLEAR;
    const storm = weatherStatus === WeatherStatus.STORM;
    const cloudy = !sunny && !storm;
    const rain =
      weatherStatus === WeatherStatus.DRIZZLE ||
      weatherStatus === WeatherStatus.RAIN;

    let iconClass = classNames({
      cloud: cloudy,
      'cloud-storm': storm,
      sun: sunny,
      fa: true,
      'fa-cloud': !sunny,
      'fa-sun-o': sunny,
      'fa-5x': true
    });

    return <i className={iconClass} aria-hidden="true" />;
  }

  render() {
    return this.renderCloudOrSun(this.props.weatherStatus);
  }
}

module.exports = WeatherIcon;
