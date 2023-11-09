import React from 'react';
import { filter } from '../signals/customSignals';

const SearchForm = () => {
    const handleOnChange = (e => {
        filter.value = e.target.value
    });

    return (
        <div className="form-wrapper">
            <form>
                <div className='input-wrapper' >
                <label htmlFor="filter">Search</label>
                    <input
                    id="filter"
                    name="filter"
                    type="text"
                    value={filter.value}
                    placeholder='Title, Genre, Description, Director, Actors or Year'
                    onChange={e => handleOnChange(e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchForm;