import React from 'react';
import Profile from './profile/Profile';
import Footer from './footer/Footer';
import Header from '../header/Header';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
        <Header/>
        <Profile />
        <Footer />
    </div>
  )
}
