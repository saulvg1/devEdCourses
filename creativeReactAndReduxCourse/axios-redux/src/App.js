import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}=Idaho`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = () => {};
  return (
    <div className="App">
      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <h2>{weather.location.region}</h2>
          <div>{weather.current.condition.text}</div>
          <img src={weather.current.condition.icon} alt="weather" />
        </div>
      )}
    </div>
  );
}

export default App;
