import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NsideBar = withRouter(({ location, history }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (location.pathname == "/exchange") {
      setActive("exchange");
    }
    if (location.pathname == "/payments") {
      setActive("payments");
    }
    if (location.pathname == "/security") {
      setActive("security");
    }
    if (location.pathname == "/rewardcenter") {
      setActive("rewardcenter");
    }
    if (location.pathname == "/taskcenter") {
      setActive("taskcenter");
    }
    if (location.pathname == "/settings") {
      setActive("settings");
    }
    if (location.pathname == "/referral") {
      setActive("referral");
    }
  }, [location.pathname]);
  return (
    <div className="s-layout__sidebar">
      <div className="s-sidebar__trigger">
        <i className="fa fa-bars"></i>
      </div>
      <nav className="s-sidebar__nav Dashboard-sidbar-wrapper">
        <div className="sidebar-logo-img">
          <Link to="/">
            <img src="./asstes/logos/company-logo.png" alt="" />
          </Link>
        </div>
        <ul>
          {/* <li>
            <Link to="/">
              <img src="./asstes/logos/company-logo.png" alt="" />
            </Link>
          </li> */}
          <li>
            <div
              className={
                active == "exchange" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/exchange");
              }}
            >
              {" "}
              <span className="Dashboard-sidebar-link">
                <img src="./asstes/logos/sidebar/Icon awesome-user-alt.svg" />{" "}
                Dashboard
              </span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "payments" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/payments");
              }}
            >
              {" "}
              <span>
              <img src="./asstes/logos/sidebar/Icon material-payment.svg" />
              Payments</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "security" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/security");
              }}
            >
              {" "}
              <span>
              <img src="./asstes/logos/sidebar/Icon metro-security.svg" />
              Security</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "rewardcenter" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/rewardcenter");
              }}
            >
              {" "}
              <span>
              <img src="./asstes/logos/sidebar/Icon metro-coins.svg" />
              Reward Center</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "taskcenter"
                  ? "sidebar-active"
                  : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/taskcenter");
              }}
            >
              {" "}
              <span>
              <img src="./asstes/logos/sidebar/Icon open-task.svg" />
              Task Center</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "settings" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/settings");
              }}
            >
              {" "}
              <span>
              <img src="./asstes/logos/sidebar/Icon ionic-ios-settings.svg" />
              Settings</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "referral" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/referral");
              }}
            >
              {" "}
              <span>
              <img src="./asstes/logos/sidebar/Icon awesome-user-plus.svg" />
              Referral</span>{" "}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default NsideBar;
