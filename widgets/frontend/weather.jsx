import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {weather: null};
    navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
  }

  getWeather({ coords: { latitude: lat, longitude: lon } }) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200) {
        this.setState({
          weather: JSON.parse(xhr.responseText)
        });
      }
    };
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bcb83c4b54aee8418983c2aff3073b3b`);
    xhr.send();
  }

  render(){

    if (this.state.weather === null) {
      return <div className="widget weather">loading</div>;
    } else {
      return <div className="widget weather">{this.state.weather.main.temp}</div>;
    }
  }
}

export default Weather;
