import React from 'react';

// Style Sheet
import './ForecastPreview.scss';

function ForecastPreview({forecastIndex, city, country, temperature, icon, handleForecastSelection, handleForecastRemoval, handleMenuVisibility}){
    return(
        <div className = 'Container-ForecastPreview'>

            <div className = 'Container-ForecastPreview__CloseButton'>
                <button className = 'ForecastPreview__CloseButton' onClick = {() => {handleForecastRemoval(forecastIndex)}}></button>
            </div>

            <div className = 'Container-ForecastPreview__ContentOverview' onClick = {() => {
                handleForecastSelection(forecastIndex); handleMenuVisibility()
            }}>
                <div className = 'Container-ForecastPreview__WeatherIcon'><img src = {icon} alt = '' /></div>
                <div className = 'ForecastPreview__Temperature'>{temperature}&deg;C</div>
                <div className = 'ForecastPreview__Location'>{`${city}, ${country}`}</div>
            </div>

        </div>
    )
}

export default ForecastPreview;