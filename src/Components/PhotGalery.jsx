import React from 'react';

const PhotGalery = ({ photos }) => {
    return (
        <div>
            <h1>Photo Gallery</h1>
            <div className='gallery'>
                {photos.length > 0 ? (
                photos.map((photo, index) => (
                    <img
                    key={index}
                    src={photo}
                    alt={`Dog Photo ${index + 1}`}
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
