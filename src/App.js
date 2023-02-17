import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getWeatherData from './Services/WeatherService';
import getFormattedData from './Services/WeatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({ q: "Berlin" });
  const [units, setUnits] = useState({ q: "metric" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-r from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      {weather && (
        <div> 
          <TimeLocation weather = {weather} />
          <TemperatureDetails weather = {weather} />
          <Forecast title='hourly forecast' items ={weather.hourly} />
          <Forecast title='daily forecast' items ={weather.daily} />
        </div>

      )
      }

    </div>
  );
}

export default App;
