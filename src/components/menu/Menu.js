import React, {Component} from 'react';

// React Components
import PlaceSearch from './placeSearch/PlaceSearch';
import ForecastSelection from './forecastSelection/ForecastSelection';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            isSearchVisible: false,
        }
    }

    changeSearchVisibility = () => {

        this.setState( prevState => ({
            isSearchVisible: !prevState.isSearchVisible 
        }));

    }

    render(){
        const isSearchVisible = this.state.isSearchVisible;

        return (
            isSearchVisible ?
                <PlaceSearch 
                    handleSuggestionsInsertion = {this.insertSuggestions}
                    handleForecastInsertion = {this.props.handleForecastInsertion}
                    handleSearchVisibility = {this.changeSearchVisibility}
                />
            :
                <ForecastSelection
                    savedForecasts = {this.props.savedForecasts}
                    handleForecastSelection = {this.props.handleForecastSelection}
                    handleForecastRemoval = {this.props.handleForecastRemoval}
                    handleSearchVisibility = {this.changeSearchVisibility}
                    handleMenuVisibility = {this.props.handleMenuVisibility}
                />
        )
    }
}

export default Menu;