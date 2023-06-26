import React from 'react';
import './footer.css';
import imagePath from '../../../assets/home/shape-bg.png';

export default function Footer() {
    console.log("image path: ", imagePath);
  return (
    <div className='footer-container'>
    <div className='footer-parent'>
        <img src={imagePath} alt="no internet connection" />
    </div>
    </div>
  )
}
