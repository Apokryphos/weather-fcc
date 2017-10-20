const React = require('react');
const Temperature = require('./components/temperature.jsx');
const WeatherApi = require('./../weather/weather-api.js');
const WeatherStatus = require('./../weather/weather-status.js');
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
        <div id="content">
          <div id="app-content">
            <div id="widget">
              <div className="location">{this.state.weather.location}</div>
              <div className="condition">{this.state.weather.condition}</div>
              <WeatherIcon weatherStatus={this.state.weather.status} />
              <Temperature temperature={this.state.weather.temperature} />
            </div>
          </div>
          <footer>{this.renderTests()}</footer>
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
        <span className="test-option" onClick={setStatus(status)}>
          {label}
        </span>
      );
    };

    return (
      <div className="test-ui">
        <span>
          <i className="fa fa-flask" aria-hidden="true" />
        </span>
        {makeTestComponent([WeatherStatus.CLEAR], 'CLEAR')} |
        {makeTestComponent([WeatherStatus.CLOUDY], 'CLOUDY')} |
        {/* {makeTestComponent([WeatherStatus.DRIZZLE], 'DRIZZLE')} | */}
        {makeTestComponent([WeatherStatus.RAIN, WeatherStatus.SNOW], 'MIX')} |
        {makeTestComponent([WeatherStatus.RAIN], 'RAIN')} |
        {makeTestComponent([WeatherStatus.SNOW], 'SNOW')} |
        {makeTestComponent([WeatherStatus.STORM], 'STORM')}
      </div>
    );
  }
}

module.exports = App;
