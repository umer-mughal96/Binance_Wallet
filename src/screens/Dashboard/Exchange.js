import axios from "axios";
import React, { useEffect, useState } from "react";
import NsideBar from "../../components/NsideBar";
import Sidebar from '../../components/SideBar';
// import { postExchange } from "../../actions/auth";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";

const Exchange = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)
  const [userName, setUserName] = useState('')
  useEffect(()=>{
    setUserName(state.Auth.user.name)
  })
  const clickHandler = () =>{
    // dispatch(postExchange()) 
  }
  
  return (
    <div className="Exchange-wrapper">
      <div className="Dashboard">
        <div className="Dashboard-inner-content">
          <div id="main" className="Dashboard-content">
          <div className="Dashboard-sidebar-menu relative">
              <NsideBar/>
            </div>
            {/* <!-- Content --> */}
            <div className="Dashboard-content-box-wrapper bg-white h-full">
              <div className="Dashboard-content-box w-full text-grey-darkest">
                <h2 className="Dashboard-content-box-heading">
                  Welcome {userName} in to Rocksolid Exchnage
                </h2>
                <div className="Dashboard-Details-box">
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
                        P2P
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
                        Margin
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="Earn-tab"
                        data-toggle="tab"
                        href="#Earn"
                        role="tab"
                        aria-controls="Earn"
                        aria-selected="false"
                      >
                        Earn
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="Pool-tab"
                        data-toggle="tab"
                        href="#Pool"
                        role="tab"
                        aria-controls="Pool"
                        aria-selected="false"
                      >
                        Pool
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
                        <h6 className="tab-inner-content-mini-heading">
                          Account Balance
                        </h6>
                        <h1 className="user-Balance">0.0000000</h1>
                        <h6 className="tab-inner-content-mini-heading user-Estimated-Value">
                          Estimated Value
                        </h6>
                        <h6 className="tab-inner-content-mini-heading user-Estimated-Value">
                          $0.000000
                        </h6>
                        <div className="tab-inner-content-buttons">
                          <button className="tab-dark-btn" onClick={clickHandler}>Deposit</button>
                          <button className="tab-light-btn">Withdraw</button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugiat modi dignissimos culpa odit omnis officia
                        provident at maxime necessitatibus soluta ea tempora
                        cumque quo corporis, ipsam voluptatibus nam, sunt
                        aspernatur?
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In recusandae, mollitia ducimus rem asperiores,
                        officia, ratione doloremque sunt quibusdam doloribus
                        amet eveniet saepe omnis qui a odit reiciendis error
                        quis.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Earn"
                      role="tabpanel"
                      aria-labelledby="Earn-tab"
                    >
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In recusandae, mollitia ducimus rem asperiores,
                        officia, ratione doloremque sunt quibusdam doloribus
                        amet eveniet saepe omnis qui a odit reiciendis error
                        quis.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Pool"
                      role="tabpanel"
                      aria-labelledby="Pool-tab"
                    >
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In recusandae, mollitia ducimus rem asperiores,
                        officia, ratione doloremque sunt quibusdam doloribus
                        amet eveniet saepe omnis qui a odit reiciendis error
                        quis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Dashboard-Details-box wallet-box">
                <p>
                  Transfer coin or token between your account and Chain wallet
                </p>
                <button className="tab-dark-btn">Wallet Direct</button>
              </div>
              <div className="Dashboard-content-flex-box">
                <div className="Dashboard-content-flex-colum left-colum">
                  <div className="Dashboard-Details-box wallet-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <ul
                          className="nav nav-tabs Dashboard-content-flex-colum-header"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="profile-tabt"
                              data-toggle="tab"
                              href="#profilet"
                              role="tab"
                              aria-controls="profilet"
                              aria-selected="false"
                            >
                              Activity
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="contact-tabt"
                              data-toggle="tab"
                              href="#contactt"
                              role="tab"
                              aria-controls="contactt"
                              aria-selected="false"
                            >
                              Devices
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-heading">
                          <a href="">Disable account</a>
                        </span>
                        <span className="account-mangment-icon">
                          <i className="fas fa-chevron-circle-right"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      className="tab-content Dashboard-content-flex-colum-tab-content"
                      id="myTabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="profilet"
                        role="tabpanel"
                        aria-labelledby="profile-tabt"
                      >
                        <div className="Dashboard-content-inner-tab-content">
                          <div className="Dashboard-content-inner-tab-content-colum left-colum">
                            <p>Web</p>
                            <p>United States</p>
                          </div>
                          <div className="Dashboard-content-inner-tab-content-colum right-colum">
                            <p>39.69.46.191</p>
                            <p>2021-04-21 01:30:35</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contactt"
                        role="tabpanel"
                        aria-labelledby="contact-tabt"
                      >
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. In recusandae, mollitia ducimus rem asperiores,
                          officia, ratione doloremque sunt quibusdam doloribus
                          amet eveniet saepe omnis qui a odit reiciendis error
                          quis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Dashboard-Details-box wallet-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <ul
                          className="nav nav-tabs Dashboard-content-flex-colum-header"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="profile-tabt"
                              data-toggle="tab"
                              href="#profilet"
                              role="tab"
                              aria-controls="profilet"
                              aria-selected="false"
                            >
                              Activity
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="contact-tabt"
                              data-toggle="tab"
                              href="#contactt"
                              role="tab"
                              aria-controls="contactt"
                              aria-selected="false"
                            >
                              Devices
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-heading">
                          <a href="">Disable account</a>
                        </span>
                        <span className="account-mangment-icon">
                          <i className="fas fa-chevron-circle-right"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      className="tab-content Dashboard-content-flex-colum-tab-content"
                      id="myTabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="profilet"
                        role="tabpanel"
                        aria-labelledby="profile-tabt"
                      >
                        <div className="Dashboard-content-inner-tab-content">
                          <div className="Dashboard-content-inner-tab-content-colum left-colum">
                            <p>Web</p>
                            <p>United States</p>
                          </div>
                          <div className="Dashboard-content-inner-tab-content-colum right-colum">
                            <p>39.69.46.191</p>
                            <p>2021-04-21 01:30:35</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contactt"
                        role="tabpanel"
                        aria-labelledby="contact-tabt"
                      >
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. In recusandae, mollitia ducimus rem asperiores,
                          officia, ratione doloremque sunt quibusdam doloribus
                          amet eveniet saepe omnis qui a odit reiciendis error
                          quis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Dashboard-content-flex-colum right-colum">
                  <div className="Dashboard-Details-box wallet-box account-security">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <p className="account-mangment-heading">
                          Increase your account security
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <i className="fas fa-chevron-circle-right"></i>
                        </span>
                      </div>
                    </div>
                    <div className="Dashboard-content-inner-tab-content">
                      <div className="Dashboard-content-inner-tab-content-colum left-colum">
                        <ul>
                          <li>
                            <i className="fas fa-circle"></i> Enable 2FA{" "}
                            <b>On</b>
                          </li>
                          <li>
                            {" "}
                            <i className="fas fa-circle"></i> Anti-Phishing code{" "}
                            <b>Setup</b>
                          </li>
                        </ul>
                      </div>
                      <div className="Dashboard-content-inner-tab-content-colum right-colum">
                        <ul>
                          <li>
                            {" "}
                            <i className="fas fa-circle"></i> Identity
                            Verifcation <b>On</b>
                          </li>
                          <li>
                            {" "}
                            <i className="fas fa-circle"></i> Turn-on
                            WithdrawalWhitelist <b>On</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="Dashboard-Details-box wallet-box API-box">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <p className="account-mangment-heading">API (0)</p>
                      </div>
                      <div className="account-mangment">
                        <span className="account-mangment-icon">
                          <button className="tab-dark-btn">Manage</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="Dashboard-Details-box wallet-box account-security">
                    <div className="Dashboard-content-flex-colum-header-wrapper">
                      <div className="Dashboard-content-flex-colum-tab-buttons">
                        <p className="account-mangment-heading">
                          Your Trading Fee Level: VIP 0
                        </p>
                      </div>
                      <div className="account-mangment">
                        <span>
                          <a href="" className="account-mangment-heading">
                            Fee Structure
                          </a>
                        </span>
                        <span className="account-mangment-icon Trading-Fee-icon">
                          <i className="fas fa-chevron-circle-right"></i>
                        </span>
                      </div>
                    </div>
                    <div className="Dashboard-content-inner-tab-content Trading-Fee-wrapper">
                      <div className="Dashboard-content-inner-tab-content-colum left-colum">
                        <div className="Trading-Fee-content">
                          <p>Pair </p>
                          <h1>0.075%</h1>
                          <p>Using BNB to pay for fee (25% discount)</p>
                        </div>
                      </div>
                      <div className="Dashboard-content-inner-tab-content-colum right-colum">
                        <div className="Trading-Fee-content">
                          <p>Pair </p>
                          <h1>0.075%</h1>
                        </div>
                      </div>
                    </div>
                    <div className="Trading-Fee-wrapper-Upgrade-wrapper">
                      <div className="Trading-Fee-wrapper-Upgrade">
                        <div className="Trading-Fee-wrapper-Upgrade-inner-box">
                          <p>To Upgrade to VIP 1</p>
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            1. 30D Trade Volume (BTC)
                          </p>
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            0BTC/ 0.00%
                          </p>
                        </div>
                        <div className="Trading-Fee-wrapper-Upgrade-inner-box">
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            *Evaluated at 00:00 AM(UTC) every day
                          </p>
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            50.00 BTC
                          </p>
                        </div>
                      </div>
                      <div className="Trading-Fee-wrapper-Upgrade">
                        <div className="Trading-Fee-wrapper-Upgrade-inner-box">
                          <p>To Upgrade to VIP 1</p>
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            1. 30D Trade Volume (BTC)
                          </p>
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            0BTC/ 0.00%
                          </p>
                        </div>
                        <div className="Trading-Fee-wrapper-Upgrade-inner-box">
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            *Evaluated at 00:00 AM(UTC) every day
                          </p>
                          <p className="Trading-Fee-wrapper-Upgrade-inner-box-text">
                            50.00 BTC
                          </p>
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

export default Exchange;
