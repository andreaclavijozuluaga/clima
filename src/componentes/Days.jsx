import React, { Component } from 'react';

class Days extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <p className="text-gray-800 text-semibold text-2xl">{this.props.date} </p>
    );
  }
}


export default Days;