import React from "react";

const Footer = () => {
  return (
    <div className="Footer-wrapper">
      {/* <!-------------------------------Footer-----------------------------> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>About Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Business Contacts</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Binance Blog</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Announcements</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Products</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Exchange</a>
                  </li>
                  <li>
                    <a href="#">Academy</a>
                  </li>
                  <li>
                    <a href="#">BCF</a>
                  </li>
                  <li>
                    <a href="#">Card</a>
                  </li>
                  <li>
                    <a href="#">Labs</a>
                  </li>
                  <li>
                    <a href="#">Launchpad</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Trust Wallet</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Service</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Downloads</a>
                  </li>
                  <li>
                    <a href="#">Buy Crypto</a>
                  </li>
                  <li>
                    <a href="#">Fees</a>
                  </li>
                  <li>
                    <a href="#">Key Client Privileges</a>
                  </li>
                  <li>
                    <a href="#">Referral</a>
                  </li>
                  <li>
                    <a href="#">BNB</a>
                  </li>
                  <li>
                    <a href="#">Buy BUSD</a>
                  </li>
                  <li>
                    <a href="#">OTC Trading</a>
                  </li>
                  <li>
                    <a href="#">Listing Application</a>
                  </li>
                  <li>
                    <a href="#">Trading Rules</a>
                  </li>
                  <li>
                    <a href="#">Fiat Gateway Application</a>
                  </li>
                  <li>
                    <a href="#"> P2P Merchant Application</a>
                  </li>
                  <li>
                    <a href="#"> Historical Market Data</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Support</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Give Us Feedback</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Submit a request</a>
                  </li>
                  <li>
                    <a href="#">API Documentation</a>
                  </li>
                  <li>
                    <a href="#">Binance Verify</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Learn</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Buy BNB</a>
                  </li>
                  <li>
                    <a href="#">Buy Bitcoin</a>
                  </li>
                  <li>
                    <a href="#">Buy Ethereum</a>
                  </li>
                  <li>
                    <a href="#">Buy Ripple</a>
                  </li>
                  <li>
                    <a href="#">Buy Litecoin</a>
                  </li>
                  <li>
                    <a href="#">Buy Bitcoin Cash</a>
                  </li>
                  <li>
                    <a href="#">Buy Dogecoin</a>
                  </li>
                  <li>
                    <a href="#">Buy DeFi</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Community</h4>
                <div className="our-social-links">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-vk"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-reddit"></i>
                  </a>
                </div>
                <div className="site-language-box"> 
                  <label htmlFor="language">English</label>
                  <select id="country" name="country" className="form-control">
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p>© 2017 - 2021 website.com. All rights reserved</p>
          </div>
        </div>
      </footer>
      {/* <!-------------------------------End Footer-----------------------------> */}
    </div>
  );
};

export default Footer;
