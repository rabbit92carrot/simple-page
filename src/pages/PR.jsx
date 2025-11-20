import React from 'react';
import './PR.css';

const PR = () => {
  const newsData = [
    {
      date: '2024',
      title: 'NEO Dr INC Wins \'Excellence in Technology Award\'',
      description: 'Recognized for innovative medical device technology and contribution to the healthcare industry.',
      category: 'Award'
    },
    {
      date: '2024',
      title: 'NEO Dr INC Unveils New PDO Lifting Thread \'N-JAMBER\'',
      description: 'Launch of next-generation PDO thread with enhanced elasticity and performance.',
      category: 'Product Launch'
    },
    {
      date: '2023',
      title: 'NEO Dr INC Launches World\'s First Spring-Structure PDO Thread',
      description: 'Revolutionary spring-structure design for superior lifting and natural results.',
      category: 'Innovation'
    },
    {
      date: '2023',
      title: 'NEO Dr INC to Showcase High-Elasticity, High-Polymer Products',
      description: 'Presenting cutting-edge medical solutions at international medical device exhibition.',
      category: 'Event'
    },
    {
      date: '2022',
      title: 'NEO Dr INC Launches PDO Elastic Thread \'JAMBER NCL\'',
      description: 'Introduction of premium PDO thread series with advanced needle cannula technology.',
      category: 'Product Launch'
    }
  ];

  const academicMaterials = [
    {
      title: 'Clinical Studies on PDO Thread Safety',
      description: 'Comprehensive research on PDO thread biocompatibility and patient outcomes',
      type: 'Research Paper'
    },
    {
      title: 'Innovation in Acupuncture Device Design',
      description: 'Technical documentation on advanced acupuncture needle manufacturing',
      type: 'Technical Document'
    },
    {
      title: 'Medical Device Quality Assurance Protocols',
      description: 'Standards and procedures for ensuring medical device quality',
      type: 'White Paper'
    }
  ];

  return (
    <div className="pr-page">
      {/* Hero Section */}
      <section className="pr-hero">
        <div className="pr-hero-content">
          <span className="pr-label">📰 Public Relations</span>
          <h1 className="pr-title">
            Latest News & <span className="highlight-text">Updates</span>
          </h1>
          <p className="pr-subtitle">
            Stay informed about our latest innovations, achievements, and contributions to the medical industry
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="news-container">
          <h2 className="section-title">Recent News</h2>
          <div className="news-grid">
            {newsData.map((news, index) => (
              <div key={index} className="news-card">
                <div className="news-header">
                  <span className="news-category">{news.category}</span>
                  <span className="news-date">{news.date}</span>
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
                <button className="news-read-more">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Materials Section */}
      <section className="academic-section">
        <div className="academic-container">
          <h2 className="section-title">Academic Materials</h2>
          <p className="section-subtitle">
            Research publications and technical documentation supporting our innovations
          </p>
          <div className="academic-grid">
            {academicMaterials.map((material, index) => (
              <div key={index} className="academic-card">
                <div className="academic-icon">📄</div>
                <div className="academic-content">
                  <span className="academic-type">{material.type}</span>
                  <h3 className="academic-title">{material.title}</h3>
                  <p className="academic-description">{material.description}</p>
                  <button className="academic-download">Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overseas Activities Section */}
      <section className="overseas-section">
        <div className="overseas-container">
          <h2 className="section-title">Global Presence</h2>
          <p className="section-subtitle">
            Our products are trusted by medical professionals worldwide
          </p>
          <div className="regions-grid">
            <div className="region-card">
              <div className="region-icon">🌏</div>
              <h3>Asia Pacific</h3>
              <p>Serving markets across Asia with innovative medical solutions</p>
            </div>
            <div className="region-card">
              <div className="region-icon">🌍</div>
              <h3>Europe</h3>
              <p>CE certified products distributed throughout European markets</p>
            </div>
            <div className="region-card">
              <div className="region-icon">🌎</div>
              <h3>Americas</h3>
              <p>Expanding presence in North and South American healthcare</p>
            </div>
            <div className="region-card">
              <div className="region-icon">🌍</div>
              <h3>Middle East</h3>
              <p>Growing partnerships in Middle Eastern medical sector</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PR;
