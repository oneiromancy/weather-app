import React from 'react';

// Style Sheet
import './ForecastSelection.scss';

// React Component
import ForecastPreview from './forecastPreview/ForecastPreview';

// Utils
import DecodeWeatherIcon from '../../../utils/DecodeWeatherIcon';

function ForecastSelection({savedForecasts, handleForecastSelection, handleForecastRemoval, handleSearchVisibility, handleMenuVisibility}){
    return(
        <div className = 'Container-ForecastSelection'>
            <div className = 'Container-ForecastSelection__List'>
                {
                    savedForecasts.map(({location, today}, index) => {
                        return (
                            <div className = 'Container-ForecastSelection__ListItem' key = {index}>
                                <ForecastPreview 
                                    key = {index} 
                                    forecastIndex = {index}
                                    city = {location.city} 
                                    country = {location.country}
                                    temperature = {today.temperature}
                                    icon = {DecodeWeatherIcon[today.icon]}
                                    handleForecastSelection = {handleForecastSelection}
                                    handleMenuVisibility = {handleMenuVisibility}
                                    handleForecastRemoval = {handleForecastRemoval}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button className = 'Container-ForecastSelection__SearchButton' onClick = {handleSearchVisibility}></button>
        </div>

    )
}

export default ForecastSelection;