import React from 'react';

// Style Sheet
import './DaysAhead.scss';

// React Component
import ForecastInstance from './forecastInstance/ForecastInstance';

// Utils
import DecodeWeatherIcon from '../../../utils/DecodeWeatherIcon';

const DaysAhead = ( {fiveDayForecast} ) => {

    return(
        <div className = 'Container-DaysAhead'>
            {
                fiveDayForecast.map( ({day, text, high, low, code}, index) => {
                    return (
                        <ForecastInstance 
                            key = {index} 
                            day = {day}
                            description = {text}
                            high = {high}
                            low = {low}
                            icon = {DecodeWeatherIcon[code]}

                        />
                    )
                })
            }
        </div>
    )
}

export default DaysAhead;