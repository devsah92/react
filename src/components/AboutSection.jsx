import React from 'react';
import './AboutSection.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <div className="about-container">
      {/* ABOUT BOX (centered light panel) */}
      <section className="about-box">
        <div className="container">
          <div className="about-inner">
            <p>
              matrimony.com, one of India's most trusted names in the matchmaking space, is redefining how individuals find their life partners. As part of India's leading matchmaking beyond matrimony service, matrimony.com was founded with a clear mission — to help people find lasting happiness through meaningful connections.
            </p>
            <p>
              A true pioneer in the evolving matchmaking category, matrimony.com has enabled over 80 lakh success stories and continues to be a trusted platform across communities worldwide. It is more than just a matrimonial service, blending credibility with the ease and personalization of modern matchmaking.
            </p>
            <p>
              With powerful filters for preferences like city — including Mumbai, Delhi, Bengaluru, Kolkata, Hyderabad, Pune, and Chennai — and community-specific searches such as Gujarati, Tamil, Marathi, and more, matrimony.com makes discovering compatible matches more efficient and tailored to individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row align-items-start">
              {/* 4 columns on left */}
              <div className="col-12 col-lg-9">
                <div className="row">
                  <div className="col-6 col-md-3 footer-col">
                    <h6>Need Help?</h6>
                    <ul>
                      <li><a href="#">Member Login</a></li>
                      <li><a href="#">Sign Up</a></li>
                      <li><a href="#">Partner Search</a></li>
                      <li><a href="#">How to Use matrimony.com</a></li>
                      <li><a href="#">Premium Memberships</a></li>
                      <li><a href="#">Customer Support</a></li>
                      <li><a href="#">Site Map</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-3 footer-col">
                    <h6>Company</h6>
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">matrimony Blog</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Awards &amp; Recognition</a></li>
                      <li><a href="#">Cov-Aid</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-3 footer-col">
                    <h6>Privacy &amp; You</h6>
                    <ul>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Be Safe Online</a></li>
                      <li><a href="#">Report Misuse</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-3 footer-col">
                    <h6>More</h6>
                    <ul>
                      <li><a href="#">VIP matrimony</a></li>
                      <li><a href="#">Select matrimony</a></li>
                      <li><a href="#">Sangam</a></li>
                      <li><a href="#">matrimony Centres</a></li>
                      <li><a href="#">Success Stories</a></li>
                      <li><a href="#">matrimony Live</a></li>
                      <li><a href="#">Elite Matrimony by matrimony.com</a></li>
                      <li><a href="#">Astrochat.com</a></li>
                      <li><a href="#">Chat with Astrologers</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social + App badges on right */}
              <div className="col-12 col-lg-3 mt-4 mt-lg-0">
                <div className="social-block">
                  <div className="social-label">Find us on:</div>
                  <div className="social-icons">
                    <a className="social-btn" href="#" aria-label="facebook"><FaFacebookF /></a>
                    <a className="social-btn" href="#" aria-label="instagram"><FaInstagram /></a>
                    <a className="social-btn" href="#" aria-label="linkedin"><FaLinkedinIn /></a>
                    <a className="social-btn" href="#" aria-label="twitter"><FaTwitter /></a>
                    <a className="social-btn" href="#" aria-label="youtube"><FaYoutube /></a>
                  </div>

                  <div className="get-app">Get the App</div>
                  <div className="app-badges">
                    {/* Replace these src with your local badge images or direct SVGs */}
                    <a href="#"><img src="/images/appstore-badge.png" alt="App Store" /></a>
                    <a href="#"><img src="/images/googleplay-badge.png" alt="Google Play" /></a>
                  </div>
                </div>
              </div>

            </div>

            {/* trademark lines below grid (desktop align left under columns) */}
            <div className="row mt-3 footer-trademarks">
              <div className="col-12 col-lg-9">
                <p className="muted">Apple and the Apple Logo are trademarks of Apple Inc.</p>
                <p className="muted">Google Play and the Google Play logo are trademarks of Google LLC.</p>
              </div>
            </div>

          </div>
        </div>

        {/* DARK STRIPE (exact bottom bar) */}
        <div className="footer-bottom">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="copyright">© 1996-2025 matrimony.com, The World's Leading Matchmaking Service™</div>
            <div className="made-by">Passionately created by People Group ▸</div>
          </div>
        </div>
      </footer>
    </div>
  );
}