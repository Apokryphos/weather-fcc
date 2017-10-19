const React = require('react');

class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: false
    };
  }

  render() {
    let temp = this.props.temperature;
    if (!this.state.celsius) {
      temp = temp * 1.8 + 32;
    }

    return <div className="temperature">{Math.floor(temp)}</div>;
  }
}

module.exports = Temperature;
