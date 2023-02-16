import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getWeatherData from './Services/WeatherService';
import getFormattedData from './Services/WeatherService';

function App() {

  const fetchWeather = async () => {
    const data =  await getFormattedData({q: 'london'});
    console.log(data);
  };

  fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-r from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeLocation />
      <TemperatureDetails />
      <Forecast title= 'hourly forecast'/>
      <Forecast title= 'daily forecast'/>
    </div>
  );
}

export default App;
