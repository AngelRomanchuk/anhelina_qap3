import React from 'react';
import { useState, useEffect } from 'react';

const BreedSelect = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectBreed, setSelectBreed] = useState("");

    // Fetch breeds in array to display in dropdown
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            if (!response.ok) {
                throw new Error('Failed to fetch dog breeds');
            }
            const data = await response.json();
            const breedsArray = Object.keys(data.message);
            setBreeds(breedsArray);
        };
    
    fetchData();
    }, []);

    // Change breed when selected
    const handleSelectChange = (event) => {
        setSelectBreed(event.target.value);
    };


    return (
        <div>
            <label>Select a dog breed:</label>
            <select value={selectBreed} onChange={handleSelectChange}>
                <option value="">Select...</option>
                {breeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
                ))}
            </select>
        </div>
    );
}

export default BreedSelect;
