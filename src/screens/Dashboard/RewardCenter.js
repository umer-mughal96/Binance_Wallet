import React from "react";
import Sidebar from '../../components/SideBar';

const RewardCenter = () => {
  return (
    <div className="RewardCenter-wrapper">
      <div class="Dashboard">
        <div class="Dashboard-inner-content">
          <div id="main" class="Dashboard-content">
          <div className="Dashboard-sidebar-menu relative h-full min-h-screen">
              <Sidebar />
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
