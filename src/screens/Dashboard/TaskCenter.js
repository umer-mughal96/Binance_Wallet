import React from "react";
import Sidebar from '../../components/SideBar';

const TaskCenter = () => {
  return (
    <div className="TaskCenter-Wrapper">
      <div className="Dashboard">
        <div className="Dashboard-inner-content">
          <div id="main" className="Dashboard-content">
          <div className="Dashboard-sidebar-menu relative h-full min-h-screen">
              <Sidebar />
            </div>
            {/* <!-- Content --> */}
            <div className="Dashboard-content-box-wrapper bg-white h-full">
              <div className="Dashboard-content-box w-full text-grey-darkest">
                <h2 className="Dashboard-content-box-heading">Task Center</h2>
                <div className="Payments-tabs-box">
                  <div className="payments-box-content">
                    <div className="Task-Available-img">
                      <img src="./asstes/icons/OpenTask.png" alt="" />
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
