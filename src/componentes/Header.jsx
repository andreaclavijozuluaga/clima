import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <h1 className="rounded-b-lg text-left pl-8 text-gray-700 text-4xl font-semibold pt-3 ">Clima</h1>
    );
  }
}

export default Header;
// bg-gray-900 bg-opacity-50 shadow-xl