const React = require('react');
const WeatherStatus = require('./../../weather/weather-status.js');
const classNames = require('classnames');

class WeatherIcon extends React.Component {
  renderCloud() {
    return;
  }

  renderBolt(status) {
    if (status === WeatherStatus.STORM) {
      let iconClass = classNames({
        particle: true,
        bolt: true,
        'bolt-fade': true,
        fa: true,
        'fa-bolt': true,
        'fa-3x': true
      });

      return <i className={iconClass} aria-hidden="true" key={status} />;
    }

    return null;
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

    const snow = status === WeatherStatus.SNOW;

    let iconClass = classNames({
      particle: !snow,
      snow: snow,
      'snow-rotate': snow,
      rain: rain,
      'rain-fall': rain,
      fa: true,
      'fa-tint': rain,
      'fa-snowflake-o': snow
    });

    //  Rotation and translation need to be in separate elements
    let containerClass = classNames({
      particle: snow,
      'snow-fall': snow
    });

    const icons = [];
    const iconCount = 10;
    for (let p = 0; p < iconCount; ++p) {
      const key = `${status}_${p}`;

      //  Only use key if not wrapped in snowflake rotation container
      const icon = (
        <i className={iconClass} aria-hidden="true" key={snow ? null : key} />
      );

      if (snow) {
        icons.push(
          <div className={containerClass} key={key}>
            {icon}
          </div>
        );
      } else {
        icons.push(icon);
      }
    }

    return icons;
  }

  renderBolts(statusArray) {
    return statusArray.map(s => this.renderBolt(s));
  }

  renderParticles(statusArray) {
    return statusArray.map(s => this.renderParticle(s));
  }

  render() {
    return (
      <div className="weather-icon-container">
        <div className="weather-icon-sun">
          {this.renderSun(this.props.weatherStatus)}
        </div>
        <div className="weather-icon-bolt-container">
          {this.renderBolts(this.props.weatherStatus)}
        </div>
        <div className="weather-icon-particles">
          {this.renderParticles(this.props.weatherStatus)}
        </div>
        <div className="weather-icon-cloud">
          {this.renderCloud(this.props.weatherStatus)}
        </div>
      </div>
    );
  }
}

module.exports = WeatherIcon;
