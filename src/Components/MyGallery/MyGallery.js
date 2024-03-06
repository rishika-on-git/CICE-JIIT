// App.js

import React from 'react';
import './MyGallery.css'; // Assuming you have a separate CSS file
import  HeadingGallery from './Heading'

const imageData = [
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Team working',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
 
  // Add more image objects as needed
];

const Gallery = ({ images }) => {
  return (
    <>
    <HeadingGallery/>
    <div className="gallery-wrapper">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className={`gallery__item gallery__item--${index + 1}`}>
            <a href="#" className="gallery__link">
              <img src={image.url} alt={image.alt} className="gallery__image" />
              <div className="gallery__overlay">
                <span>{image.caption}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

function MyGallery() {
    return (
      <div>
       
        <Gallery images={imageData} />
      </div>
    );
  }
  
  export default MyGallery;

