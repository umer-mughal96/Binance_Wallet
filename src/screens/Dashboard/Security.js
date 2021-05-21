import React from "react";
import Sidebar from '../../components/SideBar';

const Security = () => {
  return (
    <div className="Security-wrapper">
      <div className="Dashboard">
        <div className="Dashboard-inner-content">
          <div id="main" className="Dashboard-content">
          <div className="Dashboard-sidebar-menu relative h-full min-h-screen">
              <Sidebar />
            </div>
            {/* <!-- Content --> */}
            <div className="Dashboard-content-box-wrapper bg-white h-full">
              <div className="Payments-tabs-box Security-tab-box">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Spot
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Buy Crypto
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Withdraw
                    </a>
                  </li>
                </ul>
                <div className="tab-content Dashboard-first-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="tab-inner-content">
                      <div className="tab-content-inner-div">
                        <p className="payment-gide-text">
                          P2P payment methods: When you sell cryptocurrencies,
                          the payment method added will be displayed to buyer as
                          options to accept payment, please ensure that the
                          account owner’s name is consistent with your verified
                          name on Binance. You can add up to 20 payment methods.
                        </p>
                        <h6 className="tab-inner-content-mini-heading user-Estimated-Value">
                          $0.000000
                        </h6>
                        <div className="tab-inner-content-buttons mt-3">
                          <button className="tab-dark-btn add-Payment-btn">
                            <i className="fas fa-plus-circle"></i> Add Payment
                            Method
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="tab-inner-content">
                      <div className="tab-content-inner-div">
                        <p className="payment-gide-text">
                          Manage the payment method of your credit and debit
                          card on the buy crypto page
                        </p>
                        <h6 className="tab-inner-content-mini-heading user-Estimated-Value">
                          You don't have any cards
                        </h6>
                        <div className="tab-inner-content-buttons mt-3">
                          <button className="tab-dark-btn add-Payment-btn">
                            <i className="fas fa-plus-circle"></i> Add Payment
                            Method
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="tab-inner-content">
                      <div className="Withdraw-tab-header">
                        <ul>
                          <li>Bank Country</li>
                          <li>Currency</li>
                          <li>Bank Name</li>
                          <li>Branch Code</li>
                          <li>Account number</li>
                          <li>Account Status</li>
                        </ul>
                      </div>
                      <div className="tab-content-inner-div">
                        <div className="Withdraw-tab">
                          <h6 className="tab-inner-content-mini-heading user-Estimated-Value">
                            $0.000000
                          </h6>
                          <div className="tab-inner-content-buttons mt-3">
                            <button className="tab-dark-btn add-Payment-btn">
                              <i className="fas fa-plus-circle"></i> Add Payment
                              Method
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Dashboard-content-box w-full text-grey-darkest">
                <h2 className="Dashboard-content-box-heading">
                  Increase your account security
                </h2>
              </div>
              <div className="Dashboard-content-flex-box">
                <div className="Dashboard-content-flex-colum left-colum">
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <span>
                            <i className="fab fa-usb"></i>
                          </span>
                          <span>
                            <p className="account-mangment-heading">
                              {" "}
                              Security key
                            </p>
                          </span>
                        </div>
                        <p className="security-content-box-text">
                          What is security key?
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">Setup</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <span>
                            <i className="fab fa-google"></i>
                          </span>
                          <span>
                            <p className="account-mangment-heading">
                              {" "}
                              Google Authentication
                            </p>
                          </span>
                        </div>
                        <p className="security-content-box-text">
                          Used for withdrawals and security modifications
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">On</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <span>
                            <i className="fas fa-comment-alt"></i>
                          </span>
                          <span>
                            <p className="account-mangment-heading">
                              {" "}
                              SMS Authentication
                            </p>
                          </span>
                        </div>
                        <p className="security-content-box-text">
                          Used for withdrawals and security modifications
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">On</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <span>
                            <i className="fas fa-envelope"></i>
                          </span>
                          <span>
                            <p className="account-mangment-heading">
                              {" "}
                              E-mail Address
                            </p>
                          </span>
                        </div>
                        <p className="security-content-box-text">
                          Used for withdrawals and security modifications
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">Change</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                </div>
                <div className="Dashboard-content-flex-colum right-colum">
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <p className="account-mangment-heading mb-0">
                          {" "}
                          Identity Verification
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">Verify</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <p className="account-mangment-heading">
                            {" "}
                            Identity Verification
                          </p>
                        </div>
                        <p className="security-content-box-text">
                          Address Management allows you to save and write memos
                          for each of your withdrawal addresses. The optional
                          Whitelist function helps protect your funds by only
                          allowing withdrawals to whitelisted addresses.
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">On</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <p className="account-mangment-heading">
                            {" "}
                            Anti-Phishing Code
                          </p>
                        </div>
                        <p className="security-content-box-text">
                          By setting up an Anti-Phishing Code, you will be able
                          to tell if your notification emails are coming from
                          Binance or phishing attempts.
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">On</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                  <div className="Dashboard-Details-box wallet-box security-content-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <div className="security-content-box-icon-box">
                          <p className="account-mangment-heading">
                            {" "}
                            Account Activity
                          </p>
                        </div>
                        <p className="security-content-box-text">
                          Last logic: 2021-04-26
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-light-btn">Disable account</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End security-content-box --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
