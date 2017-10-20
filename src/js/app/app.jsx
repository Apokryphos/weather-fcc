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
    const setStatus = (location, temp, status) => () => {
      this.setState((prevState, props) => {
        prevState.weather.location = location;
        prevState.weather.temperature = temp;
        prevState.weather.condition = WeatherStatus.toString(status[0]);
        prevState.weather.status = status;
        return { weather: prevState.weather };
      });
    };

    const makeTestComponent = function(label, location, temp, status) {
      return (
        <span
          className="test-option"
          onClick={setStatus(location, temp, status)}
        >
          {label}
        </span>
      );
    };

    return (
      <div className="test-ui">
        <span>
          <i className="fa fa-flask" aria-hidden="true" />
        </span>
        {makeTestComponent('CLEAR', 'Seattle, WA', 20, [WeatherStatus.CLEAR])} |
        {makeTestComponent('CLOUDY', 'Glasgow, UK', 15, [WeatherStatus.CLOUDY])}
        |
        {makeTestComponent('MIX', 'Reykjavík, Iceland', 0, [
          WeatherStatus.RAIN,
          WeatherStatus.SNOW
        ])}
        |
        {makeTestComponent('RAIN', 'London, UK', 14, [WeatherStatus.RAIN])} |
        {makeTestComponent('SNOW', 'Mount Rainier National Park, WA', -7, [
          WeatherStatus.SNOW
        ])}
        |
        {makeTestComponent('STORM', 'Bald Mountain, UA', 17, [
          WeatherStatus.STORM
        ])}
      </div>
    );
  }
}

module.exports = App;
