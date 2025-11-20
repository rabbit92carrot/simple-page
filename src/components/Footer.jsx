import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">NEO Dr. INC.</h3>
            <p className="footer-tagline">Creation of Value through Innovation</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Address</h4>
            <p className="footer-text">
              #2-204, 205, Medical Industry Complex<br />
              42-10 Taejanggongdan-gil<br />
              Wonju-si, Gangwon-do<br />
              26311, Republic of Korea
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">
              <a href="mailto:neodrsales@naver.com" className="footer-link">
                neodrsales@naver.com
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#pr">PR</a></li>
              <li><a href="http://jamber.kr/contact/" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            COPYRIGHT ALL RIGHTS RESERVED © 2020 NEO Dr. INC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
