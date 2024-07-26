import React from 'react';
import { useState, useEffect } from 'react';

const BreedSelect = ({ onBreedChange }) => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
  
    useEffect(() => {
      const fetchBreeds = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!response.ok) {
          throw new Error('Failed to fetch dog breeds');
        }
        const data = await response.json();
        const breedsArray = Object.keys(data.message);
        setBreeds(breedsArray);
      };
  
      fetchBreeds();
    }, []);
  
    const handleChange = (event) => {
      const breed = event.target.value;
      setSelectedBreed(breed);
      onBreedChange && onBreedChange(breed);
    };
  
    return (
      <div>
        <label>Select a dog breed:</label>
        <select value={selectedBreed} onChange={handleChange}>
          <option value="">Select...</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
    );
  };

export default BreedSelect;
