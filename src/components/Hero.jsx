import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovate Medical Device
          </h1>
          <h2 className="hero-subtitle">
            Creation of Value
          </h2>
          <p className="hero-description">
            We, NEO Dr. INC., develop, manufacture and distribute medical device based on creativity, challenge, and passion.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Products</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>

        <div className="hero-icons">
          <div className="icon-item">
            <span className="icon-emoji">🌏</span>
          </div>
        </div>

        <div className="trusted-by">
          <p className="trusted-text">Trusted by fast-growing companies worldwide</p>
          <div className="company-logos">
            <img src="/assets/Asset-4.svg" alt="Innovation" className="company-logo" />
            <img src="/assets/Asset-2.svg" alt="Quality" className="company-logo" />
            <img src="/assets/Asset-3.svg" alt="Excellence" className="company-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
