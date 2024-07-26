import React from 'react';

const PhotGalery = ({ photos }) => {
    return (
        <div>
            <h2>Photo Gallery</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {photos.length > 0 ? (
                photos.map((photo, index) => (
                    <img
                    key={index}
                    src={photo}
                    alt={`Dog Photo ${index + 1}`}
                    style={{ width: '200px', height: 'auto', border: '1px solid #ddd' }}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200'; // Fallback image
                    }}
                    />
                ))
                ) : (
                <p>No photos available</p>
                )}
            </div>
        </div>
    );
}

export default PhotGalery;
