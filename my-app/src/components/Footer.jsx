import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="matrimony-footer" aria-labelledby="footer-heading">
      {/* Top columns (light background) */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Need Help?</h3>
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

            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">matrimony Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Awards & Recognition</a></li>
                <li><a href="#">Cov-Aid</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Privacy & You</h3>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Be Safe Online</a></li>
                <li><a href="#">Report Misuse</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>More</h3>
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

            <div className="footer-col">
              <h3>Find us on:</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <i className="fFaFacebook"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

              <div className="app-section">
                <h4>Get the App</h4>
                <div className="app-badges">
                  <a href="#" className="app-badge">
                    <img src="/api/placeholder/120/35" alt="Download on the App Store" />
                  </a>
                  <a href="#" className="app-badge">
                    <img src="/api/placeholder/120/35" alt="Get it on Google Play" />
                  </a>
                </div>
                <div className="app-disclaimer">
                  <p>Apple and the Apple Logo are trademarks of Apple Inc.</p>
                  <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark stripe at bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <span className="copyright">
              © 1996-2025 matrimony.com, The World's Leading Matchmaking Service™
            </span>
            <span className="created-by">
              Passionately created by People Group <span className="arrow">➤</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;