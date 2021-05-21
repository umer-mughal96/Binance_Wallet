import React from "react";

const Payments = () => {
  return (
    <div className="Payments-wrapper">
      <div className="Dashboard">
        <div className="Dashboard-inner-content">
          <div id="main" className="Dashboard-content">
            {/* <!-- Sidebar --> */}
            <div className="Dashboard-sidebar-menu relative h-full min-h-screen">
              <div className="xl:py-2">
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon awesome-user-alt.svg" />
                    <div className="Dashboard-sidebar-link">Dashboard</div>
                  </a>
                </div>
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon material-payment.svg" />
                    <div className="Dashboard-sidebar-link">Payments</div>
                  </a>
                </div>
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon metro-security.svg" />
                    <div className="Dashboard-sidebar-link">Security</div>
                  </a>
                </div>
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon metro-coins.svg" />
                    <div className="Dashboard-sidebar-link">Reward Center</div>
                  </a>
                </div>
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon open-task.svg" />
                    <div className="Dashboard-sidebar-link">Reward Center</div>
                  </a>
                </div>
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon ionic-ios-settings.svg" />
                    <div className="Dashboard-sidebar-link">Settings</div>
                  </a>
                </div>
                <div className="group relative sidebar-item with-children">
                  <a
                    href="#"
                    className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="../assets/logos/sidebar/Icon awesome-user-plus.svg" />
                    <div className="Dashboard-sidebar-link">Referral</div>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Content --> */}
            <div className="Dashboard-content-box-wrapper bg-white h-full">
              <div className="Dashboard-content-box w-full text-grey-darkest">
                <h2 className="Dashboard-content-box-heading">
                  Welcome to Rocksolid Exchnage
                </h2>
                <div className="Payments-tabs-box">
                  <h4 className="Balance-Details-box-heading">
                    Balance Details
                  </h4>
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
                  <div
                    className="tab-content Dashboard-first-tab"
                    id="myTabContent"
                  >
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
                            the payment method added will be displayed to buyer
                            as options to accept payment, please ensure that the
                            account owner’s name is consistent with your
                            verified name on Binance. You can add up to 20
                            payment methods.
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
                                <i className="fas fa-plus-circle"></i> Add
                                Payment Method
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
