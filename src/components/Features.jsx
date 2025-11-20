import React from 'react';
import './Features.css';

const Features = () => {
  const products = [
    {
      icon: '📍',
      title: 'AcuPro',
      subtitle: 'Acupuncture Device',
      description: 'Advanced acupuncture needles designed for precision and safety. Every project is a full Acupuncture system, providing the world\'s most trusted medical solution.',
      features: ['High precision', 'Safe design', 'Professional grade']
    },
    {
      icon: '🔐',
      title: 'AcuSta',
      subtitle: 'Acupuncture Staple',
      description: 'Innovative staple solutions for medical procedures. Add user sign ups and logins, securing your data with Row Level Security.',
      features: ['Sterile packaging', 'Easy application', 'Reliable performance']
    },
    {
      icon: '⚡',
      title: 'JAMBER',
      subtitle: 'PDO Thread Products',
      description: 'Premium PDO thread lifting solutions including JAMBER I, F, TANXING, D, TIP, and RIDGE. Easily write custom code without deploying or scaling servers.',
      features: ['Multiple variants', 'High elasticity', 'Medical certified']
    }
  ];

  return (
    <section className="features" id="products">
      <div className="features-container">
        <div className="features-grid">
          {products.map((product, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span className="feature-icon-emoji">{product.icon}</span>
              </div>
              <h3 className="feature-title">{product.title}</h3>
              <p className="feature-subtitle">{product.subtitle}</p>
              <p className="feature-description">{product.description}</p>
              <ul className="feature-list">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
