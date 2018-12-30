import React from 'react';

// Style sheet
import './Autocomplete.scss';

function Autocomplete({autocompleteSuggestions, handleForecastInsertion, handleSearchVisibility, handleAutocompleteReset}){
    return(
        <div className = 'Container-AutocompleteSuggestions__List'>
            {   
                autocompleteSuggestions.map( (item, index) => {
                    const {city, county, province, country, centroid} = item;
                     
                    return(
                        <div className = 'AutocompleteSuggestions__ListItem'
                            onClick = {() => {handleForecastInsertion(centroid); handleSearchVisibility(); handleAutocompleteReset()}}
                            key = {index}
                        >
                            {[city, county, province, country].filter(Boolean).join(', ')}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Autocomplete;