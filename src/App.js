import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import './style.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="GARRITAS PET SHOP" />
    </>
  );
}
