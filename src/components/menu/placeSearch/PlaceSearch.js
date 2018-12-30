import React, {Component} from 'react';

// Style Sheet
import './PlaceSearch.scss';

// React Components
import SearchForm from './searchForm/SearchForm';
import Autocomplete from './autocomplete/Autocomplete';

// Utils
import FetchWeatherData from '../../../utils/FetchWeatherData';

class PlaceSearch extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            autocompleteSuggestions: []
        }
    }

    insertAutoCompleteSuggestions = event => {

        const city = event.target.value;

        const url = `https://query.yahooapis.com/v1/public/yql?q= select * from geo.places where text in ("${city}")&format=json`;

        if(city.length > 0){

            FetchWeatherData(url).then( data => {

                if(data){

                    const places = data.place;
                    const filteredSuggestions = this.filterDbQuery(places);

                    this.setState({
                        autocompleteSuggestions: [...filteredSuggestions]
                    });

                }

            }).catch(error => {
                console.log(error)
            })

        } else{
            this.resetAutocompleteSuggestions()
        }

    }

    filterDbQuery = (places) => {

        const newSchema = [];

        for(let i = 0; i < places.length - 1; i++){

            let {locality1, admin1, admin2, country, centroid} = places[i];

            /* locality1 and country are necessary conditions for users to identify location. Centroid, too, is a 
            necessary condition given its use in fetching forecast data; it stores latitude and longitude */
            if(locality1 && country && centroid){

                if(!admin1){
                    admin1 = {
                        content: ''
                    };
                }
    
                if(!admin2){
                    admin2 = {
                        content: ''
                    }
                }
    
                newSchema.push({
                    city: locality1.content, 
                    province: admin1.content, 
                    county: admin2.content, 
                    country: country.content, 
                    centroid
                });

            }

        }

        return newSchema;

    }

    resetAutocompleteSuggestions = () => {

        this.setState({
            autocompleteSuggestions: [],
        });

    }

    render(){
        const autocompleteSuggestions = this.state.autocompleteSuggestions; 
        const insertAutoCompleteSuggestions = this.insertAutoCompleteSuggestions;
        const resetAutocompleteSuggestions = this.resetAutocompleteSuggestions;

        const handleSearchVisibility = this.props.handleSearchVisibility;
        const handleForecastInsertion = this.props.handleForecastInsertion;


        return(
            <div className = 'Container-PlaceSearch'>
                <SearchForm 
                    handleAutocompleteInsertion = {insertAutoCompleteSuggestions}
                    handleSearchVisibility = {handleSearchVisibility}
                    handleAutocompleteReset = {resetAutocompleteSuggestions}
                />
                <Autocomplete 
                    autocompleteSuggestions = {autocompleteSuggestions} 
                    handleForecastInsertion = {handleForecastInsertion}
                    handleSearchVisibility = {handleSearchVisibility}
                    handleAutocompleteReset = {resetAutocompleteSuggestions}
                />
            </div>
        )
    }
}

export default PlaceSearch;