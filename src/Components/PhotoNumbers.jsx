import React from 'react';

const PhotoNumbers = ({ onNumberChange }) => {
    const handleChange = (event) => {
      onNumberChange(Number(event.target.value));
    };
    
    return (
        <div>
            <label htmlFor="photoCount">Number of photos:</label>
            <input
                id="photoCount"
                type="number"
                min="1"
                max="100"
                step="1"
                defaultValue="1"
                onChange={handleChange}
            />
        </div>
    );
}

export default PhotoNumbers;
