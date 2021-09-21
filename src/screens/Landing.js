import React from "react";
import { ToastContainer } from "react-toastify";
import { successNotification } from "../components/Toastify/Toastify";

const Landing = () => {
  return (
    <div className="Comming-soon-wrapper">
        <div className="maintenance-wrapper">
          <div className="maintenance-contaioner">
            <div className="maintenance-img">
              <img src="./asstes/images/Maintenance.svg" alt="" srcset="" />
            </div>
            <div className="maintenance-text">
              <h2 className="mb-3">Coming Soon</h2>
              {/* <h2 className="mb-3">Hang on! We are under maintenance</h2> */}
              {/* <p>it will not take a long time till we get the error fixed.</p>
                  <p>we will be live again shortly.</p> */}
                <button onClick={()=> successNotification('Hello Success')}>Success
                <ToastContainer></ToastContainer>
                </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Landing;
