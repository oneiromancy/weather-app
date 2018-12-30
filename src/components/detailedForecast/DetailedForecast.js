import React from 'react';

// Styling Sheet
import './DetailedForecast.scss';

// React Components
import LiveWeather from './liveWeather/LiveWeather';
import DaysAhead from './daysAhead/DaysAhead';

const DetailedForecast = ( {location, today, fiveDayForecast, handleMenuVisibility} ) => {
    const {country, region, city} = location;

    return(   
        <div className = 'Container-DetailedForecast'>

            <button className = 'DetailedForecast__MenuButton' onClick = {handleMenuVisibility}></button>

            <h2 className = 'DetailedForecast__Heading'>{city}, {region}, {country}</h2>
                    
            <LiveWeather 
                today = {today} 
            />
            <DaysAhead 
                fiveDayForecast = {fiveDayForecast}
            />
        
        </div>
    )
}

export default DetailedForecast;