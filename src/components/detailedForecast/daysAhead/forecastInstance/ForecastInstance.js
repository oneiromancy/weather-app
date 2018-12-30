import React from 'react';

// Style Sheet
import './ForecastInstance.scss';

const ForecastInstance =  ( {day, icon, description, high, low} ) => {
    return(
        <div className="Container-ForecastInstance">

            <div className = 'Container-ForecastInstance__Heading'>
                <h3 className = 'ForecastInstance__Heading'>{day}</h3>
            </div>

            <div className = "Container-ForecastInstance__WeatherIcon">
                <img className = "ForecastInstance__WeatherIcon" src={icon} alt=""/>
            </div> 

            <div className = 'Container-ForecastInstance__WeatherDescription'>{description}</div>
            
            <div className ="Container-ForecastInstance__Temperature">
                <div className ="ForecastInstance__HighTemperature">{high}&deg;C</div>
                <div className ="ForecastInstance__LowTemperature">{low}&deg;C</div>
            </div>
        </div>
    )
}

export default ForecastInstance;