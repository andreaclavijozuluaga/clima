import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <p className="text-white text-2xl pt-5 pb-3">{this.props.name}</p>
     );
  }
}
 
export default City;