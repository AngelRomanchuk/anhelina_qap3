import './App.css';
import BreedSelect from './Components/BreedSelect';
import Button from './Components/Button';
import Header from './Components/Header';
import PhotGalery from './Components/PhotGalery';
import PhotoNumbers from './Components/PhotoNumbers';
import React, { useState } from 'react';

function App() {
  const [breed, setBreed] = useState('');
  const [numberOfPhotos, setNumberOfPhotos] = useState(1);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      // Create an array of promises to fetch multiple photos
      const photoRequests = Array.from({ length: numberOfPhotos }, () => 
        fetch(`https://dog.ceo/api/breed/${breed}/images/random` )
      );

      // Fetch all images concurrently
      const responses = await Promise.all(photoRequests);
      const photosData = await Promise.all(responses.map(res => res.json()));
      const photosUrls = photosData.map(data => data.message);

      console.log('Fetched photos:', photosUrls);
      setPhotos(photosUrls);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="mainBox">
      <Header />
      <BreedSelect onBreedChange={setBreed}/>
      <PhotoNumbers onNumberChange={setNumberOfPhotos}/>
      <Button onClick={fetchPhotos}/>
      <PhotGalery photos={photos}/>
    </div>
  );
}

export default App;
