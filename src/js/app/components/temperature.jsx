const React = require('react');
const classNames = require('classnames');

class Temperature extends React.Component {
  constructor(props) {
    super(props);

    //  Temperature is stored as celsius and converted when needed
    this.state = {
      celsius: false
    };
  }

  renderUom() {
    const setCelsius = enabled => {
      this.setState({
        celsius: enabled
      });
    };

    let fahrenheit = this.state.celsius ? () => setCelsius(false) : null;
    let celsius = this.state.celsius ? null : () => setCelsius(true);

    let fahrenheitClass = classNames({
      'temperature-uom': this.state.celsius
    });

    let celsiusClass = classNames({
      'temperature-uom': !this.state.celsius
    });

    return (
      <sup>
        <span className={fahrenheitClass} onClick={fahrenheit}>
          &#176;F
        </span>
        |
        <span className={celsiusClass} onClick={celsius}>
          &#176;C
        </span>
      </sup>
    );
  }

  render() {
    let temp = this.props.temperature;
    if (!this.state.celsius) {
      temp = temp * 1.8 + 32;
    }

    return (
      <div className="temperature">
        {Math.floor(temp)}
        {this.renderUom()}
      </div>
    );
  }
}

module.exports = Temperature;
