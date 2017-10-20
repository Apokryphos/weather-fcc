const React = require('react');
const WeatherStatus = require('./../../weather/weather-status.js');
const classNames = require('classnames');

class WeatherIcon extends React.Component {
  renderCloud() {
    return;
  }

  renderStatusIcon(status) {
    const sunny = status === WeatherStatus.CLEAR;
    const storm = status === WeatherStatus.STORM;
    const cloudy = !sunny && !storm;
    const rain =
      status === WeatherStatus.DRIZZLE || status === WeatherStatus.RAIN;

    let iconClass = classNames({
      cloud: cloudy,
      'cloud-storm': storm,
      sun: sunny,
      fa: true,
      'fa-cloud': !sunny,
      'fa-sun-o': sunny,
      'fa-5x': true
    });

    return <i key={status} className={iconClass} aria-hidden="true" />;
  }

  renderStatusIcons(statusArray) {
    console.log(statusArray);
    return statusArray.map(s => this.renderStatusIcon(s));
  }

  render() {
    return this.renderStatusIcons(this.props.weatherStatus);
  }
}

module.exports = WeatherIcon;
