import React from 'react';

// Style sheet
import './SearchForm.scss';

function SearchForm({handleAutocompleteInsertion, handleAutocompleteReset, handleSearchVisibility}){
    return(
        <form autoComplete="off" spellCheck="false">
            <div className = 'Container-SearchForm'>
                <div className = 'Container-SearchForm--ContentToScreenAdjustment'>

                    <div className = 'Container-SearchForm__CityLabel'>
                        <label className = 'SearchForm__CityLabel'>Enter city</label>
                    </div>

                    <div className = 'Container-SearchForm__InputGroup'>
                        <input autoFocus className = 'SearchForm__CityInput' onChange = {handleAutocompleteInsertion} type = 'text' name = 'city' />
                        <button className = 'SearchForm__CancelButton'  onClick = {() => {
                            handleAutocompleteReset(); handleSearchVisibility()
                        }}>cancel</button>
                    </div>
                    
                </div>
            </div>
        </form>        
    )
}

export default SearchForm;