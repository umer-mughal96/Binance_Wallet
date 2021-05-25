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
    if (location.pathname == "/settings") {
    setActive("settings");
    }
    if (location.pathname == "/taskcenter") {
        setActive("taskcenter");
    }
  }, [location.pathname]);
  return (
    <div className="s-layout__sidebar">
      <div className="s-sidebar__trigger">
        <i className="fa fa-bars"></i>
      </div>
      <nav className="s-sidebar__nav Dashboard-sidbar-wrapper">
        <ul>
          <li>
            <Link to="/">
              <img src="./asstes/logos/company-logo.png" alt="" />
            </Link>
          </li>
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
              <i className="fab fa-stumbleupon-circle"></i>
              <span>Dashboard</span>{" "}
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
              <i className="fas fa-exchange-alt"></i>
              <span>Payments</span>{" "}
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
              <i className="fas fa-exchange-alt"></i>
              <span>Security</span>{" "}
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
              <i className="fas fa-exchange-alt"></i>
              <span>Settings</span>{" "}
            </div>
          </li>
          <li>
            <div
              className={
                active == "taskcenter" ? "sidebar-active" : "s-sidebar__nav-link"
              }
              onClick={(e) => {
                history.push("/taskcenter");
              }}
            >
              {" "}
              <i className="fas fa-exchange-alt"></i>
              <span>Task Center</span>{" "}
            </div>
          </li>
        </ul>
        {/* <div className="row sidebar-button">
          <div className="offset-2 col-8">
            <Link to="/" className="btn d-block">
              Get plans
            </Link>
          </div>
          <div className="offset-2 col-8">
            <Link to="/knowledge" className="btn d-block">
              Help Center
            </Link>
          </div>
          <div className="logout offset-3 col-6 mt-2 pl-4">
            <i className="fas fa-sign-out-alt mr-1"></i>
            Logout
          </div>
        </div> */}
      </nav>
    </div>
  );
});

export default NsideBar;
