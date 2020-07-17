import React, { Component } from 'react';
import './App.css';
import './Card.css';
import Header from './componentes/Header.jsx';
import City from './componentes/City.jsx';
import Imagen from './componentes/Imagen.jsx';
import State from './componentes/State.jsx';
import Temperature from './componentes/Temperature';
import Days from './componentes/Days';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: 'Medellin',
      units: 'metric'
    };
  }
  render() {
    return (
      <div className="App rounded-lg">
        <div>
          <input type="text" onChange={this.setSearchCity} />
          <button onClick={this.getWeather}>Buscar</button>
        </div>
        <div>
          <input type="radio" name="units" onChange={this.setUnits} value="metric" /> <span>Metric</span>
          <input type="radio" name="units" onChange={this.setUnits} value="imperial" /> <span>Imperial</span>
        </div>
        <Header />
        <City name={this.state.cityName} />
        <Imagen weatherIcon={this.state.weatherIcon} />
        <State weather={this.state.weather} />
        <Temperature temperature={this.state.temperature} />
        { this.state.days && this.state.days.map((date) => {
          return <Days date={date} />
        })}
      </div>
    );
  }
  setSearchCity = (e) => {
    this.setState({ searchCity: e.target.value });
  };

  setUnits = (e) => {
    this.setState({ units: e.target.value }, () => {
      this.getWeather();
    });
  };

  getWeather = () => {
    const axios = require('axios');
    const currentComponent = this;
    // ?q=Medellin&appid=cdd51952dce1efa1a92920dbd9ca4688&units=metric
    // Make a request for a user with a given ID

    console.log('this.state.units: ', this.state.units);
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: this.state.searchCity,
        appid: 'cdd51952dce1efa1a92920dbd9ca4688',
        units: this.state.units,
      }
    })
      .then(function (response) {
        // handle success
        currentComponent.setCityName(response.data.name);
        currentComponent.setTemperature(response.data.main.temp);
        currentComponent.setWeather(response.data.weather[0].main);
        currentComponent.setWeatherIcon(response.data.weather[0].icon);
      })
      .catch(function (error) {
        // handle error
        alert('Error');
      })
      .then(function () {
        // always executed
      });
  };

  MONTHS = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
  };

  getDate = (epochUnit) => {
    const date = new Date(epochUnit * 1000);
    const month = this.MONTHS[date.getMonth()];
    const day = date.getDate() + 1;
    return `${month} ${day}`;
  };

  getDays = () => {
    const axios = require('axios');
    const currentComponent = this;
    // Make a request for a user with a given ID

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=medellin&appid=cdd51952dce1efa1a92920dbd9ca4688&units=metric')
      .then(function(response) {
      // handle success
        const data = response.data;
        const epochDates = data.list.map((weatherData) => {
          return currentComponent.getDate(weatherData.dt);
        });
        console.log(epochDates);
        const uniqueDates = [...new Set(epochDates)];
        console.log(uniqueDates);
        currentComponent.setDays(uniqueDates);
    })
  }

  setCityName = (name) => {
    this.setState({ cityName: name });
  };

  setTemperature = (temperature) => {
    this.setState({ temperature: temperature });
  };

  setWeather = (weather) => {
    this.setState({ weather: weather });
  };

  setWeatherIcon = (icon) => {
    this.setState({ weatherIcon: icon });
  };

  setDays = (days) => {
    this.setState({ days: days });
  }

  componentDidMount() {
    this.getWeather();
    this.getDays();
  }

};

export default App;
