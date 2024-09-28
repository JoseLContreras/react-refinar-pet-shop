import React from 'react';

import './styles/Hero.css';

const Hero = ({ title }) => {
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>Los mejores productos para nuestros amigos peludos.</p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
