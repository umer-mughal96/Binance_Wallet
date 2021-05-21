import React from "react";

const TaskCenter = () => {
  return (
    <div className="TaskCenter-Wrapper">
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
                <h2 className="Dashboard-content-box-heading">Task Center</h2>
                <div className="Payments-tabs-box">
                  <div className="payments-box-content">
                    <div className="Task-Available-img">
                      <img src="../assets/icons/OpenTask.png" alt="" />
                    </div>
                    <h5>No Task Available now</h5>
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

export default TaskCenter;
