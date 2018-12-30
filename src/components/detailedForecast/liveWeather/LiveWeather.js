import React from 'react';

// Style Sheet
import './LiveWeather.scss';

const LiveWeather = ( {today} ) => {

    const {temperature, description, atmosphere, wind} = today;

    return(
        <div className = 'Container-LiveWeather'>

            <div className = 'Container-LiveWeather__MainColumn'>
                <div className = 'LiveWeather__Temperature'>{Math.round(temperature)}&deg;C</div>
                <div className = 'LiveWeather__WeatherDescription'>{description}</div>
            </div>

            <div className = 'Container-LiveWeather__SecondaryColumn'>

                <div>
                    <div className = 'LiveWeather__Heading'>Wind</div>
                    <div className = 'LiveWeather__WindSpeed'>{Math.round(wind.speed)} km/h</div>
                </div>

                <div>
                    <div className = 'LiveWeather__Heading'>Humidity</div>
                    <div className = 'LiveWeather__AtmosphericHumidity'>{Math.round(atmosphere.humidity)}%</div>
                </div>

            </div>

            <div className = 'Container-LiveWeather__SecondaryColumn'>

                <div>
                    <div className = 'LiveWeather__Heading'>Pressure</div>
                    <div className = 'LiveWeather__AtmosphericPressure'>{Math.round(atmosphere.pressure)} mb</div>
                </div>

                <div>
                    <div className = 'LiveWeather__Heading'>Visibility</div>
                    <div className = 'LiveWeather__AtmosphericVisibility'>{Math.round(atmosphere.visibility)}km</div>
                </div>
                
            </div>

        </div>
    )

}

export default LiveWeather;