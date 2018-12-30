import React, { Component } from 'react';

// Style sheets
import './reset.scss';
import './App.scss';

// React Components
import Menu from './components/menu/Menu';
import DetailedForecast from './components/detailedForecast/DetailedForecast';

// Utils
import GeolocateUser from './utils/GeolocateUser';
import FetchWeatherData from './utils/FetchWeatherData';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            isMenuVisible: true,
            savedForecasts: [],
            selectedForecastIndex: undefined,
        }
    }

    componentDidMount = () => {
        this.setUserLocation();
    }

    setUserLocation = () => {

        GeolocateUser().then( coordinates => {

            this.insertForecast(coordinates);

        }).catch(error => {
            console.log(error);
        });

    } 

    insertForecast = (coordinates) => {

        const url = `https://query.yahooapis.com/v1/public/yql?q= select * from weather.forecast where woeid in 
        (SELECT woeid FROM geo.places WHERE text="(${coordinates.latitude},${coordinates.longitude})") and u='c' &format=json`;

        FetchWeatherData(url).then( data => {

            this.setState( prevState => ({
                savedForecasts: [...prevState.savedForecasts, {
                    location:{
                        country: data.channel.title.substring(data.channel.title.length - 2,),
                        region: data.channel.location.region,
                        city: data.channel.location.city,
                    },
                    today: {
                        temperature: data.channel.item.condition.temp,
                        description: data.channel.item.condition.text,
                        icon: data.channel.item.condition.code,
                        atmosphere: data.channel.atmosphere,
                        wind: data.channel.wind,
                    },
                    fiveDayForecast: [...data.channel.item.forecast.slice(1,6)]
                }]
            }));

        }).catch(error => {
            console.log(error);
        });

    }

    removeForecast = pos => {

        this.setState( prevState => ({
            savedForecasts: [
                ...prevState.savedForecasts.slice(0, pos), 
                ...prevState.savedForecasts.slice(pos + 1,)
            ]
        })); 

    }

    selectForecast = pos => {

        this.setState({
            selectedForecastIndex: pos,
        });

    }

    changeMenuVisibility = () => {

        this.setState( prevState => ({
            isMenuVisible: !prevState.isMenuVisible,
        })); 
        
    }

    render() {
        const savedForecasts = this.state.savedForecasts;

        const selectedForecastIndex = this.state.selectedForecastIndex;
        const selectedForecastEntry = savedForecasts[selectedForecastIndex];

        const isMenuVisible = this.state.isMenuVisible;


        return (
            <>
                {
                    isMenuVisible?
                        <Menu 
                            savedForecasts = {savedForecasts}
                            handleForecastInsertion = {this.insertForecast}
                            handleForecastRemoval = {this.removeForecast}
                            handleForecastSelection = {this.selectForecast}
                            handleMenuVisibility = {this.changeMenuVisibility}
                        />:
                        <DetailedForecast
                            {...selectedForecastEntry}
                            handleMenuVisibility = {this.changeMenuVisibility}
                        />
                }
            </>
        );
    }
}

export default App;