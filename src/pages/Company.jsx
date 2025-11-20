import React from 'react';
import './Company.css';

const Company = () => {
  const historyData = [
    { year: '2020', event: 'NEO Dr. INC. established with vision of medical device innovation' },
    { year: '2021', event: 'Launched AcuPro - Advanced Acupuncture Device' },
    { year: '2022', event: 'Introduced JAMBER PDO Thread product line' },
    { year: '2023', event: 'Received ISO13485 and CE certifications' },
    { year: '2024', event: 'Expanded to global markets with innovative medical solutions' }
  ];

  return (
    <div className="company-page">
      {/* About Us Section */}
      <section className="company-hero">
        <div className="company-hero-content">
          <span className="company-label">🌏 About Us</span>
          <h1 className="company-title">
            We develop, manufacture and distribute <span className="highlight-text">medical devices</span>
          </h1>
          <p className="company-subtitle">
            Based on creativity, challenge, and passion
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-card">
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              NEO Dr. INC. with the slogan 'Creation of Value' has released unique and innovative products
              through technical innovation in order to return the favor for our customers with customer-oriented service.
            </p>
            <p className="vision-text">
              We believe that corporate social responsibility for a sound society is important.
              With the development of the company, we will do our best to be a company which always stays with you like a family,
              and to be a company to contributes to the health of mankind.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Creativity</h3>
              <p>Innovative solutions through creative thinking</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Challenge</h3>
              <p>Continuously challenging the status quo</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>Passionate dedication to excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="history-container">
          <h2 className="section-title">Our History</h2>
          <div className="timeline">
            {historyData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="certifications-container">
          <h2 className="section-title">Certificates & Patents</h2>
          <p className="section-subtitle">
            Our commitment to quality and innovation is recognized through international certifications
          </p>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h3>ISO 13485</h3>
              <p>Medical Device Quality Management System</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>CE Certification</h3>
              <p>European Conformity for Medical Devices</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📜</div>
              <h3>KGMP</h3>
              <p>Korean Good Manufacturing Practice</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🔬</div>
              <h3>Multiple Patents</h3>
              <p>Innovative medical device technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
