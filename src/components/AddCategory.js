import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handdleInputtChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubtmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');

        } else {
            setInputValue('');
        }

    }

    return (
        <div className="cabecera-fija">
            <h2>GifExpertApp</h2>
            <form onSubmit={handleSubtmit}>
                <h2>Add Category</h2>
                <input type="text" value={inputValue} onChange={handdleInputtChange} />
            </form>

        </div>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,

};
