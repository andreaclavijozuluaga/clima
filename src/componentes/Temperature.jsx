import React, { Component } from 'react'

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <p className="text-gray-800 pb-5 ">{this.props.temperature}°C</p>
     );
  }
}

export default Temperature;