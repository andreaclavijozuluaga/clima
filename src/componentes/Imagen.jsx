import React, { Component } from 'react';
import Llover from '../imagenes/rain.png';

class Imagen extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="contenedor px-5">
      <img
        className="object-scale-down h-48 w-full bg-white bg-opacity-25 shadow-inner pb-5 pt-5 rounded-lg"
        src={this.weatherIconUrl(this.props.weatherIcon)}
        alt=""
      />
      </div>
     );
  }
  weatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };
}

export default Imagen;