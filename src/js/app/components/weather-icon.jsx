const React = require('react');
const WeatherStatus = require('./../../weather/weather-status.js');
const classNames = require('classnames');

class WeatherIcon extends React.Component {
  renderCloud() {
    return;
  }

  renderCloud(statusArray) {
    if (statusArray.every(s => s !== WeatherStatus.CLEAR)) {
      const storm = statusArray.some(s => s === WeatherStatus.STORM);

      let iconClass = classNames({
        cloud: true,
        'cloud-storm': storm,
        fa: true,
        'fa-cloud': true,
        'fa-5x': true
      });

      return <i className={iconClass} aria-hidden="true" />;
    }

    return null;
  }

  renderSun(statusArray) {
    if (statusArray.some(s => s === WeatherStatus.CLEAR)) {
      let iconClass = classNames({
        sun: true,
        fa: true,
        'fa-sun-o': true,
        'fa-5x': true
      });

      return <i className={iconClass} aria-hidden="true" />;
    }

    return null;
  }

  renderParticle(status) {
    const rain =
      status === WeatherStatus.DRIZZLE || status === WeatherStatus.RAIN;

    const bolt = status === WeatherStatus.STORM;
    const snow = status === WeatherStatus.SNOW;

    let iconClass = classNames({
      bolt: bolt,
      'bolt-fade': bolt,
      snow: snow,
      'snow-rotate': snow,
      rain: rain,
      'rain-fall': rain,
      fa: true,
      'fa-tint': rain,
      'fa-bolt': bolt,
      'fa-snowflake-o': snow,
      'fa-3x': bolt
    });

    const icon = <i className={iconClass} aria-hidden="true" key={status} />;

    //  Rotation and translation need to be in separate elements
    let containerClass = classNames({
      'snow-fall': snow
    });

    if (snow) {
      return (
        <div className={containerClass} key={'div_' + status}>
          {icon}
        </div>
      );
    } else {
      return icon;
    }
  }

  renderParticles(statusArray) {
    return statusArray.map(s => this.renderParticle(s));
  }

  render() {
    return (
      <div>
        {this.renderSun(this.props.weatherStatus)}
        {this.renderCloud(this.props.weatherStatus)}
        {this.renderParticles(this.props.weatherStatus)}
      </div>
    );
  }
}

module.exports = WeatherIcon;
