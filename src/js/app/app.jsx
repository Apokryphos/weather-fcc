const React = require('react');
const Temperature = require('./components/temperature.jsx');
const WeatherApi = require('./../weather-api');

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
        </div>
      );
    } else {
      return null;
    }
  }
}

module.exports = App;
