import React from "react";
import { Link } from "react-router-dom";
// import exchange from '../screens/Dashboard/Exchange';

const SideBar = () => {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <div className="Dashboard-sidebar-menu relative h-full min-h-screen">
        <div className="xl:py-2">
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon awesome-user-alt.svg" />
              <div className="Dashboard-sidebar-link">
                  <Link to="/exchange">Dashboard</Link>
              </div>
            </a>
          </div>
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon material-payment.svg" />
              <div className="Dashboard-sidebar-link">
                  <Link to="/Payments">Payments</Link>
              </div>
            </a>
          </div>
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon metro-security.svg" />
              <div className="Dashboard-sidebar-link">
                  <Link to="/Security">Security</Link>
              </div>
            </a>
          </div>
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon metro-coins.svg" />
              <div className="Dashboard-sidebar-link">
                  <Link to="/rewardrenter">Reward Center</Link>
              </div>
            </a>
          </div>
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon open-task.svg" />
              <div className="Dashboard-sidebar-link">
              <Link to="/TaskCenter">Task Center</Link>
              </div>
            </a>
          </div>
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon ionic-ios-settings.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="/Settings">Settings</Link>
              </div>
            </a>
          </div>
          <div className="group relative sidebar-item with-children">
            <a
              href="#"
              className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-black"
            >
              <img src="../assets/logos/sidebar/Icon awesome-user-plus.svg" />
              <div className="Dashboard-sidebar-link">
                <Link to="">Referral</Link>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
