import React from "react";
import { Link } from "react-router-dom";
// import exchange from '../screens/Dashboard/Exchange';

const SideBar = () => {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <div className="Dashboard-sidebar-menu">
        <div className="xl:py-2">
          <div className="group relative sidebar-item with-children">
            <Link
              to="/exchange"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon awesome-user-alt.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/exchange">Dashboard</Link>
              </div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/payments"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon material-payment.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/payments">Payments</Link>
              </div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/security"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon metro-security.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/security">Security</Link>
              </div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/rewardcenter"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon metro-coins.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/rewardcenter">Reward Center</Link>
              </div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/taskcenter"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon open-task.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/taskcenter">Task Center</Link>
              </div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/settings"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon ionic-ios-settings.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/settings">Settings</Link>
              </div>
            </Link>
          </div>
          <div className="group relative sidebar-item with-children">
            <Link
              to="/"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon awesome-user-plus.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/">Referral</Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
