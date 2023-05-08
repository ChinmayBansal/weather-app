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

  const [query, setQuery] = useState({ q: 'New York' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then(
        (data) => {
          setWeather(data);
          console.log(data)
        });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

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
