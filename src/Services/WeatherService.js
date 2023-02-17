import { DateTime } from "luxon";
const API_KEY = "810ad32a727d1eeb858337bd3fbe9ee6";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=7dc78ef8c175ec57cdde3cdea7098a3f&units=metric



const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url).then((res) => res.json());
};

const formatData = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0]

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed };
};
    const formatForecastWeather = (data) => {
        let { timezone, daily, hourly } = data;
        daily = daily.slice(1, 6).map((d) => {
            return {
                title: formatToLocalTime(d.dt, timezone, "ccc"),
                temp: d.temp.day,
                icon: d.weather[0].icon
            };
        });

        hourly = hourly.slice(1, 6).map((d) => {
            return {
                title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
                temp: d.temp,
                icon: d.weather[0].icon
            };
        });
        return { timezone, daily, hourly };

    };

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatData)

    const { lat, lon } = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat, lon, exclude: "current,minutely,alerts", units: searchParams.units,
    }).then(formatForecastWeather);
    return {...formattedCurrentWeather, ...formattedForecastWeather };
};

const iconUrlFromCode = (code) =>
 `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatToLocalTime = (seconds, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => DateTime.fromSeconds(seconds).setZone(zone).toFormat(format);

export default getFormattedWeatherData;

export {  formatToLocalTime,iconUrlFromCode };