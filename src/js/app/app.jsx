const React = require('react');
const Temperature = require('./components/temperature.jsx');
const WeatherApi = require('./../weather-api');
const WeatherStatus = require('./../weather-api/weather-status.js');
const WeatherIcon = require('./components/weather-icon.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null
    };
  }

  componentWillMount() {
    WeatherApi.getWeather(data => {
      this.setState({
        weather: data
      });
    });
  }

  render() {
    if (this.state.weather) {
      return (
        <div>
          <span>{this.state.weather.location}</span>
          <Temperature temperature={this.state.weather.temperature} />
          <WeatherIcon weatherStatus={this.state.weather.status} />
          {this.renderTests()}
        </div>
      );
    } else {
      return null;
    }
  }

  renderTests() {
    const setStatus = status => () => {
      this.setState((prevState, props) => {
        prevState.weather.status = status;
        return { weather: prevState.weather };
      });
    };

    const makeTestComponent = function(status, label) {
      return (
        <span className="temperature-uom" onClick={setStatus(status)}>
          {label}
        </span>
      );
    };

    return (
      <div>
        {makeTestComponent(WeatherStatus.CLEAR, 'CLEAR')} |
        {makeTestComponent(WeatherStatus.CLOUDY, 'CLOUDY')} |
        {makeTestComponent(WeatherStatus.DRIZZLE, 'DRIZZLE')} |
        {makeTestComponent(WeatherStatus.RAIN, 'RAIN')} |
        {makeTestComponent(WeatherStatus.SNOW, 'SNOW')} |
        {makeTestComponent(WeatherStatus.STORM, 'STORM')}
      </div>
    );
  }
}

module.exports = App;
