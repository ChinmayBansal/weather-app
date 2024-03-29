import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city !== '') {
            setQuery({ q: city })
        }
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name

        if (units !== selectedUnit) {
            setUnits(selectedUnit);
        }
    }
    return (


        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4 '>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type='text'
                    placeholder='Search for city...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:first :capitalize' />
                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocation}
                />
                <UilSearch onClick={handleSearch} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />

            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button onClick={handleUnitChange} name='metric' className='text-xl text-white font-light  transition ease-out hover:scale-125 '>
                    °C
                </button>
                <p className='text-xl text-white mx-1'>
                    |
                </p>
                <button onClick={handleUnitChange} name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125'>
                    °F
                </button>
            </div>
        </div>
    );
}

export default Inputs;