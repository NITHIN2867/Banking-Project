import React, { useState } from 'react';
import '../styles/landing.css';
import About1 from '../assets/about1.png';
import About2 from '../assets/about2.png';
import HeroImg from '../assets/landing-hero.png';
import Banklogo from '../assets/Banklogo.jpeg';
import Login from '../components/Login';
import Register from '../components/Register';

const Landing = () => {
  const [isLoginBox, setIsLoginBox] = useState(true);

  return (
    <div className="landingPage">
      {/* HEADER */}
      <header className="landing-header">
        <div className="landing-header-logo">
          <img src={Banklogo} alt="SB Bank logo" />
          <span className="logo-text">SB Bank</span>
        </div>
        <nav className="landing-nav">
          <ul>
            <li className="header-li">
              <a href="#home">Home</a>
            </li>
            <li className="header-li">
              <a href="#about">About</a>
            </li>
            <li className="header-li">
              <a href="#services">Services</a>
            </li>
            <li className="header-li highlight">
              <a href="#home">Join now</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="landing-body">
        {/* HERO SECTION */}
        <section className="landing-hero" id="home">
          <div className="landing-hero-content">
            <div className="landing-hero-content" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '3vw'}}>
              <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div className="hero-text">
                  <h1>
                    <span className="hero-title-main">
                      <img src={Banklogo} alt="SB Bank logo" style={{height: '2.2em', verticalAlign: 'middle', marginRight: '0.5em', borderRadius: '0.4em', objectFit: 'cover', background: '#fff', display: 'inline-block'}} />
                      SB Bank
                    </span>
                    <span className="hero-title-sub">Simplify your finances.</span>
                  </h1>
                  <p className="hero-description">
                    Modern banking made seamless! Manage all your accounts, transactions, and loans effortlessly through one beautiful platform.
                  </p>
                  <div className="hero-features">
                    <div className="feature-item">
                      <span className="feature-icon">🔒</span>
                      <span>Secure Banking</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">⚡</span>
                      <span>Instant Transfers</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">📱</span>
                      <span>Mobile First</span>
                    </div>
                  </div>
                </div>
                <div className="authentication-form glass">
                  {isLoginBox ? (
                    <Login setIsLoginBox={setIsLoginBox} />
                  ) : (
                    <Register setIsLoginBox={setIsLoginBox} />
                  )}
                </div>
              </div>
              
            </div>
          </div>
          <div className="landing-hero-image">
            <div className="hero-art">
                <img src={HeroImg} alt="Banking dashboard illustration" style={{maxHeight: '540px', width: 'auto', height: '100%', borderRadius: '2rem', boxShadow: '0 20px 60px rgba(0,0,0,0.10)', background: '#fff'}} />
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="landing-services" id="services">
          <div className="services-header">
            <h2>Our Services</h2>
            <p>Everything you need for modern banking</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Smart Deposits</h3>
              <p>Earn competitive interest rates with our smart deposit options</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏦</div>
              <h3>Easy Loans</h3>
              <p>Quick approval process with flexible repayment terms</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Investment Tools</h3>
              <p>Grow your wealth with our advanced investment platform</p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="landing-about" id="about">
          <div className="about-header">
            <h2>Why Choose SB Bank?</h2>
            <p>Built for the modern world</p>
          </div>
          <div className="about-card">
            <img src={About1} className="about-img" alt="Secure deposits" />
            <div className="about-content">
              <h3>🔒 Safe & Secure Deposits</h3>
              <p>
                Your money is guarded with industry-grade security. Instant deposits, 24/7 monitoring, total transparency—peace of mind delivered.
              </p>
              <div className="about-features">
                <span className="about-feature">• 256-bit encryption</span>
                <span className="about-feature">• Real-time monitoring</span>
                <span className="about-feature">• FDIC insured</span>
              </div>
              <a className="button-cta" href="#home">
                Join now
              </a>
            </div>
          </div>
          <div className="about-card reverse">
            <div className="about-content">
              <h3>🚀 Empower Your Ambitions</h3>
              <p>
                Get closer to your dreams—business, education, or home. Effortless loan applications, flexible plans, and fair rates.
              </p>
              <div className="about-features">
                <span className="about-feature">• Quick approval</span>
                <span className="about-feature">• Competitive rates</span>
                <span className="about-feature">• Flexible terms</span>
              </div>
              <a className="button-cta" href="#home">
                Join now
              </a>
            </div>
            <img src={About2} className="about-img" alt="Loan solutions" />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="landing-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Financial Journey?</h2>
            <p>Join thousands of satisfied customers who trust SB Bank</p>
            <div className="cta-buttons">
              <a href="#home" className="button-cta primary">Get Started</a>
              <a href="#about" className="button-cta secondary">Learn More</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={Banklogo} alt="SB Bank logo" />
              <span>SB Bank</span>
            </div>
            <p>Modern banking for the digital age</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>support@sbbank.com</li>
              <li>+1 (555) 123-4567</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SB Bank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
