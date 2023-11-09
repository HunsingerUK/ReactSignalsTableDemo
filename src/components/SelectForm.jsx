import React, { useState } from 'react';
import ReactDropdown from 'react-dropdown';

const SelectForm = (data) => {
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleGenreChange = (option) => {
        setSelectedGenre(option.value);
      }

    return (
        <div className="form-wrapper">
            <form>
                <div className='input-wrapper' >
                    <span className="dropdown-label">X</span>   
                    <ReactDropdown value={selectedGenre} options={data.data} onChange={handleGenreChange}/>
                </div>
            </form>
        </div>
    )
}

export default SelectForm;