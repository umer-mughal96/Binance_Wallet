import React from "react";

const RewardCenter = () => {
  return (
    <div className="RewardCenter-wrapper">
      <div class="Dashboard">
        <div class="Dashboard-inner-content">
          <div id="main" class="Dashboard-content">
            {/* <!-- Sidebar --> */}
            <div class="Dashboard-sidebar-menu relative h-full min-h-screen">
              <div class="xl:py-2">
                <div class="group relative sidebar-item with-children">
                  <a href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon awesome-user-alt.svg" />
                    <div class="Dashboard-sidebar-link">Dashboard</div>
                  </a>
                </div>
                <div class="group relative sidebar-item with-children">
                  <a
                    href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon material-payment.svg" />
                    <div class="Dashboard-sidebar-link">Payments</div>
                  </a>
                </div>
                <div class="group relative sidebar-item with-children">
                  <a
                    href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon metro-security.svg" />
                    <div class="Dashboard-sidebar-link">Security</div>
                  </a>
                </div>
                <div class="group relative sidebar-item with-children">
                  <a
                    href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon metro-coins.svg" />
                    <div class="Dashboard-sidebar-link">Reward Center</div>
                  </a>
                </div>
                <div class="group relative sidebar-item with-children">
                  <a
                    href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon open-task.svg" />
                    <div class="Dashboard-sidebar-link">Reward Center</div>
                  </a>
                </div>
                <div class="group relative sidebar-item with-children">
                  <a
                    href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon ionic-ios-settings.svg" />
                    <div class="Dashboard-sidebar-link">Settings</div>
                  </a>
                </div>
                <div class="group relative sidebar-item with-children">
                  <a
                    href="#"
                    class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
                  >
                    <img src="./asstes/logos/sidebar/Icon awesome-user-plus.svg" />
                    <div class="Dashboard-sidebar-link">Referral</div>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Content --> */}
            <div class="Dashboard-content-box-wrapper bg-white h-full">
              <div class="Dashboard-content-box w-full text-grey-darkest">
                <h2 class="Dashboard-content-box-heading">Reward center</h2>
                <div class="Payments-tabs-box Reward-content">
                  <div class="Reward-center">
                    <div class="Reward-center-content">
                      <div class="Reward-center-colum">
                        <h4>Vocuher Type</h4>
                        <div class="Reward-center-colum-content">
                          <select name="" id="">
                            <option>Cashback Voucher (0)</option>
                            <option>Trial Funds (0)</option>
                            <option>VIP Upgrade (0)</option>
                            <option>Cash Voucher (0)</option>
                            <option>0% interest Voucher (0)</option>
                          </select>
                        </div>
                      </div>
                      <div class="Reward-center-colum">
                        <h4>Vocuher Type</h4>
                        <div class="Reward-center-colum-content">
                          <select name="" id="">
                            <option>All</option>
                            <option>Available</option>
                            <option>Redeemed</option>
                            <option>Expired</option>
                            <option>Invalid</option>
                          </select>
                        </div>
                      </div>
                      <div class="Reward-center-colum">
                        <h4>Vocuher Type</h4>
                        <div class="Reward-center-colum-content">
                          <select name="" id="">
                            <option>Received Data Latest to Earliest</option>
                            <option>Received Data Earliest to Latest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="Reward-center-button">
                      <button class="dark-btn">
                        {" "}
                        <img
                          src="./asstes/images/voucher-icon.png"
                          alt=""
                        />{" "}
                        Apply Voucher
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
  );
};

export default RewardCenter;
