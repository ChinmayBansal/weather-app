import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureDetails() {
    return <div>

        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p> Sunny</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png'
                alt=''
                className='w-20'
            />

            <p className='text-5xl'> 42°</p>
            <div className='flex flex-col space-y-2' >
                <div className='flex font-light text-sm items-center justify-left'>
                    <UilTemperature size={18} className='mr-1' />
                    Real feel:
                    <span className='font-medium ml-1'>32°</span>
                </div>

                <div className='flex font-light text-sm items-center justify-left'>
                    <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-1'>55%</span>
                </div>

                <div className='flex font-light text-sm items-center justify-left'>
                    <UilWind size={18} className='mr-1' />
                    Wind Speed:
                    <span className='font-medium ml-1'> 7 mph</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center jsutify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>
                |
            </p>

            <UilSunset />
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>06:30 PM</span>
            </p>
            <p className='font-light'>
                |
            </p>

            <UilSun />
            <p className='font-light'>
                High: <span className='font-medium ml-1'>53°</span>
            </p>
            <p className='font-light'>
                |
            </p>

            <UilSun />
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>32°</span>
            </p>
            
        </div>
    </div>;
}

export default TemperatureDetails;