import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-label">📧 Get in Touch</span>
          <h1 className="contact-title">
            Let's <span className="highlight-text">Connect</span>
          </h1>
          <p className="contact-subtitle">
            We're here to answer your questions and discuss how we can help your medical practice
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-cards-grid">
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>
                #2-204, 205, Medical Industry Complex<br />
                42-10 Taejanggongdan-gil<br />
                Wonju-si, Gangwon-do<br />
                26311, Republic of Korea
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:neodrsales@naver.com" className="contact-link">
                  neodrsales@naver.com
                </a>
              </p>
              <p className="contact-note">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">🌐</div>
              <h3>Website</h3>
              <p>
                <a href="http://jamber.kr" target="_blank" rel="noopener noreferrer" className="contact-link">
                  jamber.kr
                </a>
              </p>
              <p className="contact-note">
                Visit our product website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="form-header">
            <h2 className="section-title">Send us a Message</h2>
            <p className="section-subtitle">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+82 10-1234-5678"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="business-hours-section">
        <div className="business-hours-container">
          <h2 className="section-title">Business Hours</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <h4>Weekdays</h4>
              <p>Monday - Friday</p>
              <p className="time">9:00 AM - 6:00 PM KST</p>
            </div>
            <div className="hours-card">
              <h4>Weekend</h4>
              <p>Saturday - Sunday</p>
              <p className="time">Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
