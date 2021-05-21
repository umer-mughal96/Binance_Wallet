import React, { useEffect } from "react";
import OwlCarouselSlider from "../components/OwlCarousel";

const Landing = () => {
  return (
    <div>
      {/* <!------------------------ Hero Section-----------------------> */}

      <section class="hero">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12 col-lg-12 col-xl-12">
              <h1 class="hero-heading">Buy & sell Crypto in minutes</h1>
              <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <p class="hero-miniheading">
                Join the world's largest crypto exchange
              </p>
              <div class="hero-form">
                <form action="">
                  <div class="form-row">
                    <div class="col-md-5">
                      <input
                        type="email"
                        class="hero-input"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-5">
                      <input
                        type="password"
                        class="hero-input"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-md-2">
                      <button class="btn dark-btn" id="login">Login</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------------------------ End Hero Section ----------------------->  */}

      <section class="positin-section">
        <div class="Crypto-rates-box">
          <div class="Crypto-rates">
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Crypto-rates">
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="rates-box">
                <div class="compuny-logo">
                  <img src="./asstes/images/BTC.png" />
                </div>
                <div class="compuny-rate">
                  <div class="rate-row">
                    <h6>BTC/USDT</h6>{" "}
                    <span>
                      <i class="fas fa-arrow-circle-down"></i>
                    </span>
                  </div>
                  <div class="rate-row">
                    <h6 class="rate-rang">$53,601.10</h6>{" "}
                    <span class="rate-rang">-3.48%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <OwlCarouselSlider /> */}
      <div class="content">
        {/* <!------------------------ Feature Section -----------------------> */}
        <section class="feature">
          <div class="container-fluid container-feature-slider">
            <div class="row">
              <div class="col-md-12">
                <OwlCarouselSlider />
              </div>
            </div>
          </div>
        </section>
        {/* <!------------------------End Feature Section -----------------------> */}

        {/* <!------------------------Currency Table Section -----------------------> */}

        <section class="currency-table">
          <div class="container">
            <div class="table-bg">
              <div class="row header-row">
                <div class="col-md-3 col">
                  <span class="header-row-first-colm">Name</span>
                </div>
                <div class="col-md-3  col">
                  <span>Last Price</span>
                </div>
                <div class="col-md-3  col">
                  <span>24h Change</span>
                </div>
                <div class="col-md-3  col d-none d-sm-none d-md-block">
                  <span>Markets</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="currency-table-data-row">
                    <a href="#" class="d-block">
                      <div class="row">
                        <div class="col-md-3 col">
                          <div class="currency-name-wrap">
                            <div class="currency-icon">
                              <img src="./asstes/images/BNB.png" alt="" />
                            </div>
                            <span class="currency-compuny">BNB</span>
                            <span class="currency-name">BNB</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="last-price">
                            <span>$571.16</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="change-percent">
                            <span class="down-rate">+12.33%</span>
                          </div>
                        </div>
                        <div class="col-md-3 col d-none d-sm-none d-md-block">
                          <div class="market-graph">
                            <div class="graph-img">
                              <img src="./asstes/images/tbl-grap.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="currency-table-data-row">
                    <a href="#" class="d-block">
                      <div class="row">
                        <div class="col-md-3 col">
                          <div class="currency-name-wrap">
                            <div class="currency-icon">
                              <img src="./asstes/images/BNB.png" alt="" />
                            </div>
                            <span class="currency-compuny">BNB</span>
                            <span class="currency-name">BNB</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="last-price">
                            <span>$571.16</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="change-percent">
                            <span class="down-rate">+12.33%</span>
                          </div>
                        </div>
                        <div class="col-md-3 col d-none d-sm-none d-md-block">
                          <div class="market-graph">
                            <div class="graph-img">
                              <img src="./asstes/images/tbl-grap.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="currency-table-data-row">
                    <a href="#" class="d-block">
                      <div class="row">
                        <div class="col-md-3 col">
                          <div class="currency-name-wrap">
                            <div class="currency-icon">
                              <img src="./asstes/images/BNB.png" alt="" />
                            </div>
                            <span class="currency-compuny">BNB</span>
                            <span class="currency-name">BNB</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="last-price">
                            <span>$571.16</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="change-percent">
                            <span class="up-rate">+12.33%</span>
                          </div>
                        </div>
                        <div class="col-md-3 col d-none d-sm-none d-md-block">
                          <div class="market-graph">
                            <div class="graph-img">
                              <img src="./asstes/images/tbl-grap.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="currency-table-data-row">
                    <a href="#" class="d-block">
                      <div class="row">
                        <div class="col-md-3 col">
                          <div class="currency-name-wrap">
                            <div class="currency-icon">
                              <img src="./asstes/images/BNB.png" alt="" />
                            </div>
                            <span class="currency-compuny">BNB</span>
                            <span class="currency-name">BNB</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="last-price">
                            <span>$571.16</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="change-percent">
                            <span class="up-rate">+12.33%</span>
                          </div>
                        </div>
                        <div class="col-md-3 col d-none d-sm-none d-md-block">
                          <div class="market-graph">
                            <div class="graph-img">
                              <img src="./asstes/images/tbl-grap.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="currency-table-data-row">
                    <a href="#" class="d-block">
                      <div class="row">
                        <div class="col-md-3 col">
                          <div class="currency-name-wrap">
                            <div class="currency-icon">
                              <img src="./asstes/images/BNB.png" alt="" />
                            </div>
                            <span class="currency-compuny">BNB</span>
                            <span class="currency-name">BNB</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="last-price">
                            <span>$571.16</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="change-percent">
                            <span class="down-rate">+12.33%</span>
                          </div>
                        </div>
                        <div class="col-md-3 col d-none d-sm-none d-md-block">
                          <div class="market-graph">
                            <div class="graph-img">
                              <img src="./asstes/images/tbl-grap.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="currency-table-data-row">
                    <a href="#" class="d-block">
                      <div class="row">
                        <div class="col-md-3 col">
                          <div class="currency-name-wrap">
                            <div class="currency-icon">
                              <img src="./asstes/images/BNB.png" alt="" />
                            </div>
                            <span class="currency-compuny">BNB</span>
                            <span class="currency-name">BNB</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="last-price">
                            <span>$571.16</span>
                          </div>
                        </div>
                        <div class="col-md-3 col">
                          <div class="change-percent">
                            <span class="down-rate">+12.33%</span>
                          </div>
                        </div>
                        <div class="col-md-3 col d-none d-sm-none d-md-block">
                          <div class="market-graph">
                            <div class="graph-img">
                              <img src="./asstes/images/tbl-grap.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!------------------------End Currency Table Section -----------------------> */}

        <section id="featured-services" class="featured-services">
          <div class="container featured-services-inner">
            <div class="row text-center">
              <div class="col-md-12">
                <h2 class="featured-services-heading">
                  Get in touch. Stay in touch.
                </h2>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0">
                <a href="#" class="d-block">
                  <div class="icon-box">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46.076"
                        height="53.356"
                        viewBox="0 0 46.076 53.356"
                      >
                        <g
                          id="Group_19"
                          data-name="Group 19"
                          transform="translate(715 -2601.856)"
                        >
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M-766.57,584.493h2.293c.036,0,.143.179.143.287v3.368a20.156,20.156,0,0,1-.072,2.078,6.005,6.005,0,0,1-5.876,5.159c-7.345.036-14.726.036-22.071,0a6.044,6.044,0,0,1-5.948-5.912V548.162a5.87,5.87,0,0,1,1.971-4.514,5.7,5.7,0,0,1,3.977-1.577c7.345,0,14.69-.036,22.035,0a6.012,6.012,0,0,1,5.948,5.876c.036.86,0,1.72,0,2.58h-2.436c0-.466.036-.932,0-1.4-.036-.5-.072-.967-.143-1.469a3.612,3.612,0,0,0-3.153-3.081,9.781,9.781,0,0,0-1.469-.107h-19.491a8.544,8.544,0,0,0-1.648.143,3.611,3.611,0,0,0-3.046,3.117,8.182,8.182,0,0,0-.143,1.612V588a7.593,7.593,0,0,0,.143,1.576,3.587,3.587,0,0,0,3.225,3.189,12.187,12.187,0,0,0,1.612.107h19.169a11.134,11.134,0,0,0,1.541-.107,3.6,3.6,0,0,0,3.26-3.26,11.645,11.645,0,0,0,.107-1.576C-766.57,586.858-766.57,585.711-766.57,584.493Z"
                            transform="translate(83.1 2059.8)"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M-740.883,580.637c.573-.573,1.147-1.111,1.72-1.72.573.573,1.147,1.182,1.756,1.756a11.13,11.13,0,0,1,5.589-2.365V575.8h2.15c.251,0,.287.072.287.287v1.971c0,.143.036.251.215.287a10.69,10.69,0,0,1,5.231,2.221c.036.036.072.036.107.072.573-.609,1.147-1.182,1.684-1.756.609.609,1.147,1.182,1.72,1.756-.537.537-1.146,1.111-1.72,1.684a2.909,2.909,0,0,0,.215.287,11.2,11.2,0,0,1,2.114,4.98c.036.251.108.323.358.323.609-.036,1.218,0,1.827,0h.323v2.4h-2.472a10.833,10.833,0,0,1-2.329,5.554l1.756,1.756c-.609.573-1.182,1.147-1.756,1.684l-1.72-1.72a1.986,1.986,0,0,0-.287.215,10.906,10.906,0,0,1-5.052,2.114c-.215.036-.287.107-.287.322v1.935c0,.215-.036.323-.287.287h-2.15v-2.472a11.079,11.079,0,0,1-5.589-2.329l-1.756,1.756-1.72-1.72c.573-.573,1.147-1.147,1.791-1.756a10.939,10.939,0,0,1-2.365-5.625H-744v-2.4h2.436c.036-.287.107-.573.143-.824a10.759,10.759,0,0,1,2.042-4.514c.143-.179.143-.287-.036-.466-.466-.43-.9-.9-1.362-1.326A.67.67,0,0,1-740.883,580.637Zm10.247,17.019a8.433,8.433,0,0,0,8.456-8.491,8.433,8.433,0,0,0-8.492-8.456,8.433,8.433,0,0,0-8.456,8.491A8.433,8.433,0,0,0-730.636,597.656Z"
                            transform="translate(48.383 2038.146)"
                          />
                          <path
                            id="Path_49"
                            data-name="Path 49"
                            d="M-784.5,578.365V576h13.293v2.365Z"
                            transform="translate(74.373 2038.018)"
                          />
                          <path
                            id="Path_50"
                            data-name="Path 50"
                            d="M-773.608,603.1v2.257c0,.036-.107.107-.143.143s-.107,0-.179,0H-784.5v-2.4Z"
                            transform="translate(74.373 2020.627)"
                          />
                          <path
                            id="Path_51"
                            data-name="Path 51"
                            d="M-784.5,632.565V630.2h9.674v2.365Z"
                            transform="translate(74.373 2003.237)"
                          />
                          <path
                            id="Path_52"
                            data-name="Path 52"
                            d="M-755,662.035a2.409,2.409,0,0,1-2.4-2.436,2.386,2.386,0,0,1,2.436-2.4,2.386,2.386,0,0,1,2.4,2.436A2.48,2.48,0,0,1-755,662.035Z"
                            transform="translate(56.982 1985.912)"
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 class="title">24 / 7 Support</h3>
                    <p class="description">
                      Got a problem? Just get in touch. Our support team is
                      available 24/7
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0">
                <a href="#" class="d-block">
                  <div class="icon-box">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46.076"
                        height="53.356"
                        viewBox="0 0 46.076 53.356"
                      >
                        <g
                          id="Group_19"
                          data-name="Group 19"
                          transform="translate(715 -2601.856)"
                        >
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M-766.57,584.493h2.293c.036,0,.143.179.143.287v3.368a20.156,20.156,0,0,1-.072,2.078,6.005,6.005,0,0,1-5.876,5.159c-7.345.036-14.726.036-22.071,0a6.044,6.044,0,0,1-5.948-5.912V548.162a5.87,5.87,0,0,1,1.971-4.514,5.7,5.7,0,0,1,3.977-1.577c7.345,0,14.69-.036,22.035,0a6.012,6.012,0,0,1,5.948,5.876c.036.86,0,1.72,0,2.58h-2.436c0-.466.036-.932,0-1.4-.036-.5-.072-.967-.143-1.469a3.612,3.612,0,0,0-3.153-3.081,9.781,9.781,0,0,0-1.469-.107h-19.491a8.544,8.544,0,0,0-1.648.143,3.611,3.611,0,0,0-3.046,3.117,8.182,8.182,0,0,0-.143,1.612V588a7.593,7.593,0,0,0,.143,1.576,3.587,3.587,0,0,0,3.225,3.189,12.187,12.187,0,0,0,1.612.107h19.169a11.134,11.134,0,0,0,1.541-.107,3.6,3.6,0,0,0,3.26-3.26,11.645,11.645,0,0,0,.107-1.576C-766.57,586.858-766.57,585.711-766.57,584.493Z"
                            transform="translate(83.1 2059.8)"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M-740.883,580.637c.573-.573,1.147-1.111,1.72-1.72.573.573,1.147,1.182,1.756,1.756a11.13,11.13,0,0,1,5.589-2.365V575.8h2.15c.251,0,.287.072.287.287v1.971c0,.143.036.251.215.287a10.69,10.69,0,0,1,5.231,2.221c.036.036.072.036.107.072.573-.609,1.147-1.182,1.684-1.756.609.609,1.147,1.182,1.72,1.756-.537.537-1.146,1.111-1.72,1.684a2.909,2.909,0,0,0,.215.287,11.2,11.2,0,0,1,2.114,4.98c.036.251.108.323.358.323.609-.036,1.218,0,1.827,0h.323v2.4h-2.472a10.833,10.833,0,0,1-2.329,5.554l1.756,1.756c-.609.573-1.182,1.147-1.756,1.684l-1.72-1.72a1.986,1.986,0,0,0-.287.215,10.906,10.906,0,0,1-5.052,2.114c-.215.036-.287.107-.287.322v1.935c0,.215-.036.323-.287.287h-2.15v-2.472a11.079,11.079,0,0,1-5.589-2.329l-1.756,1.756-1.72-1.72c.573-.573,1.147-1.147,1.791-1.756a10.939,10.939,0,0,1-2.365-5.625H-744v-2.4h2.436c.036-.287.107-.573.143-.824a10.759,10.759,0,0,1,2.042-4.514c.143-.179.143-.287-.036-.466-.466-.43-.9-.9-1.362-1.326A.67.67,0,0,1-740.883,580.637Zm10.247,17.019a8.433,8.433,0,0,0,8.456-8.491,8.433,8.433,0,0,0-8.492-8.456,8.433,8.433,0,0,0-8.456,8.491A8.433,8.433,0,0,0-730.636,597.656Z"
                            transform="translate(48.383 2038.146)"
                          />
                          <path
                            id="Path_49"
                            data-name="Path 49"
                            d="M-784.5,578.365V576h13.293v2.365Z"
                            transform="translate(74.373 2038.018)"
                          />
                          <path
                            id="Path_50"
                            data-name="Path 50"
                            d="M-773.608,603.1v2.257c0,.036-.107.107-.143.143s-.107,0-.179,0H-784.5v-2.4Z"
                            transform="translate(74.373 2020.627)"
                          />
                          <path
                            id="Path_51"
                            data-name="Path 51"
                            d="M-784.5,632.565V630.2h9.674v2.365Z"
                            transform="translate(74.373 2003.237)"
                          />
                          <path
                            id="Path_52"
                            data-name="Path 52"
                            d="M-755,662.035a2.409,2.409,0,0,1-2.4-2.436,2.386,2.386,0,0,1,2.436-2.4,2.386,2.386,0,0,1,2.4,2.436A2.48,2.48,0,0,1-755,662.035Z"
                            transform="translate(56.982 1985.912)"
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 class="title">Binance Blog</h3>
                    <p class="description">
                      News and updates from the world’s leading cryptocurrency
                      exchange.
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0">
                <a href="#" class="d-block">
                  <div class="icon-box">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46.076"
                        height="53.356"
                        viewBox="0 0 46.076 53.356"
                      >
                        <g
                          id="Group_19"
                          data-name="Group 19"
                          transform="translate(715 -2601.856)"
                        >
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M-766.57,584.493h2.293c.036,0,.143.179.143.287v3.368a20.156,20.156,0,0,1-.072,2.078,6.005,6.005,0,0,1-5.876,5.159c-7.345.036-14.726.036-22.071,0a6.044,6.044,0,0,1-5.948-5.912V548.162a5.87,5.87,0,0,1,1.971-4.514,5.7,5.7,0,0,1,3.977-1.577c7.345,0,14.69-.036,22.035,0a6.012,6.012,0,0,1,5.948,5.876c.036.86,0,1.72,0,2.58h-2.436c0-.466.036-.932,0-1.4-.036-.5-.072-.967-.143-1.469a3.612,3.612,0,0,0-3.153-3.081,9.781,9.781,0,0,0-1.469-.107h-19.491a8.544,8.544,0,0,0-1.648.143,3.611,3.611,0,0,0-3.046,3.117,8.182,8.182,0,0,0-.143,1.612V588a7.593,7.593,0,0,0,.143,1.576,3.587,3.587,0,0,0,3.225,3.189,12.187,12.187,0,0,0,1.612.107h19.169a11.134,11.134,0,0,0,1.541-.107,3.6,3.6,0,0,0,3.26-3.26,11.645,11.645,0,0,0,.107-1.576C-766.57,586.858-766.57,585.711-766.57,584.493Z"
                            transform="translate(83.1 2059.8)"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M-740.883,580.637c.573-.573,1.147-1.111,1.72-1.72.573.573,1.147,1.182,1.756,1.756a11.13,11.13,0,0,1,5.589-2.365V575.8h2.15c.251,0,.287.072.287.287v1.971c0,.143.036.251.215.287a10.69,10.69,0,0,1,5.231,2.221c.036.036.072.036.107.072.573-.609,1.147-1.182,1.684-1.756.609.609,1.147,1.182,1.72,1.756-.537.537-1.146,1.111-1.72,1.684a2.909,2.909,0,0,0,.215.287,11.2,11.2,0,0,1,2.114,4.98c.036.251.108.323.358.323.609-.036,1.218,0,1.827,0h.323v2.4h-2.472a10.833,10.833,0,0,1-2.329,5.554l1.756,1.756c-.609.573-1.182,1.147-1.756,1.684l-1.72-1.72a1.986,1.986,0,0,0-.287.215,10.906,10.906,0,0,1-5.052,2.114c-.215.036-.287.107-.287.322v1.935c0,.215-.036.323-.287.287h-2.15v-2.472a11.079,11.079,0,0,1-5.589-2.329l-1.756,1.756-1.72-1.72c.573-.573,1.147-1.147,1.791-1.756a10.939,10.939,0,0,1-2.365-5.625H-744v-2.4h2.436c.036-.287.107-.573.143-.824a10.759,10.759,0,0,1,2.042-4.514c.143-.179.143-.287-.036-.466-.466-.43-.9-.9-1.362-1.326A.67.67,0,0,1-740.883,580.637Zm10.247,17.019a8.433,8.433,0,0,0,8.456-8.491,8.433,8.433,0,0,0-8.492-8.456,8.433,8.433,0,0,0-8.456,8.491A8.433,8.433,0,0,0-730.636,597.656Z"
                            transform="translate(48.383 2038.146)"
                          />
                          <path
                            id="Path_49"
                            data-name="Path 49"
                            d="M-784.5,578.365V576h13.293v2.365Z"
                            transform="translate(74.373 2038.018)"
                          />
                          <path
                            id="Path_50"
                            data-name="Path 50"
                            d="M-773.608,603.1v2.257c0,.036-.107.107-.143.143s-.107,0-.179,0H-784.5v-2.4Z"
                            transform="translate(74.373 2020.627)"
                          />
                          <path
                            id="Path_51"
                            data-name="Path 51"
                            d="M-784.5,632.565V630.2h9.674v2.365Z"
                            transform="translate(74.373 2003.237)"
                          />
                          <path
                            id="Path_52"
                            data-name="Path 52"
                            d="M-755,662.035a2.409,2.409,0,0,1-2.4-2.436,2.386,2.386,0,0,1,2.436-2.4,2.386,2.386,0,0,1,2.4,2.436A2.48,2.48,0,0,1-755,662.035Z"
                            transform="translate(56.982 1985.912)"
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 class="title">Community</h3>
                    <p class="description">
                      Binance is global. Join the discussion in our worldwide
                      communities.
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-md-6 col-lg-3 d-flex mb-5 mb-lg-0">
                <a href="#" class="d-block">
                  <div class="icon-box">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46.076"
                        height="53.356"
                        viewBox="0 0 46.076 53.356"
                      >
                        <g
                          id="Group_19"
                          data-name="Group 19"
                          transform="translate(715 -2601.856)"
                        >
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M-766.57,584.493h2.293c.036,0,.143.179.143.287v3.368a20.156,20.156,0,0,1-.072,2.078,6.005,6.005,0,0,1-5.876,5.159c-7.345.036-14.726.036-22.071,0a6.044,6.044,0,0,1-5.948-5.912V548.162a5.87,5.87,0,0,1,1.971-4.514,5.7,5.7,0,0,1,3.977-1.577c7.345,0,14.69-.036,22.035,0a6.012,6.012,0,0,1,5.948,5.876c.036.86,0,1.72,0,2.58h-2.436c0-.466.036-.932,0-1.4-.036-.5-.072-.967-.143-1.469a3.612,3.612,0,0,0-3.153-3.081,9.781,9.781,0,0,0-1.469-.107h-19.491a8.544,8.544,0,0,0-1.648.143,3.611,3.611,0,0,0-3.046,3.117,8.182,8.182,0,0,0-.143,1.612V588a7.593,7.593,0,0,0,.143,1.576,3.587,3.587,0,0,0,3.225,3.189,12.187,12.187,0,0,0,1.612.107h19.169a11.134,11.134,0,0,0,1.541-.107,3.6,3.6,0,0,0,3.26-3.26,11.645,11.645,0,0,0,.107-1.576C-766.57,586.858-766.57,585.711-766.57,584.493Z"
                            transform="translate(83.1 2059.8)"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M-740.883,580.637c.573-.573,1.147-1.111,1.72-1.72.573.573,1.147,1.182,1.756,1.756a11.13,11.13,0,0,1,5.589-2.365V575.8h2.15c.251,0,.287.072.287.287v1.971c0,.143.036.251.215.287a10.69,10.69,0,0,1,5.231,2.221c.036.036.072.036.107.072.573-.609,1.147-1.182,1.684-1.756.609.609,1.147,1.182,1.72,1.756-.537.537-1.146,1.111-1.72,1.684a2.909,2.909,0,0,0,.215.287,11.2,11.2,0,0,1,2.114,4.98c.036.251.108.323.358.323.609-.036,1.218,0,1.827,0h.323v2.4h-2.472a10.833,10.833,0,0,1-2.329,5.554l1.756,1.756c-.609.573-1.182,1.147-1.756,1.684l-1.72-1.72a1.986,1.986,0,0,0-.287.215,10.906,10.906,0,0,1-5.052,2.114c-.215.036-.287.107-.287.322v1.935c0,.215-.036.323-.287.287h-2.15v-2.472a11.079,11.079,0,0,1-5.589-2.329l-1.756,1.756-1.72-1.72c.573-.573,1.147-1.147,1.791-1.756a10.939,10.939,0,0,1-2.365-5.625H-744v-2.4h2.436c.036-.287.107-.573.143-.824a10.759,10.759,0,0,1,2.042-4.514c.143-.179.143-.287-.036-.466-.466-.43-.9-.9-1.362-1.326A.67.67,0,0,1-740.883,580.637Zm10.247,17.019a8.433,8.433,0,0,0,8.456-8.491,8.433,8.433,0,0,0-8.492-8.456,8.433,8.433,0,0,0-8.456,8.491A8.433,8.433,0,0,0-730.636,597.656Z"
                            transform="translate(48.383 2038.146)"
                          />
                          <path
                            id="Path_49"
                            data-name="Path 49"
                            d="M-784.5,578.365V576h13.293v2.365Z"
                            transform="translate(74.373 2038.018)"
                          />
                          <path
                            id="Path_50"
                            data-name="Path 50"
                            d="M-773.608,603.1v2.257c0,.036-.107.107-.143.143s-.107,0-.179,0H-784.5v-2.4Z"
                            transform="translate(74.373 2020.627)"
                          />
                          <path
                            id="Path_51"
                            data-name="Path 51"
                            d="M-784.5,632.565V630.2h9.674v2.365Z"
                            transform="translate(74.373 2003.237)"
                          />
                          <path
                            id="Path_52"
                            data-name="Path 52"
                            d="M-755,662.035a2.409,2.409,0,0,1-2.4-2.436,2.386,2.386,0,0,1,2.436-2.4,2.386,2.386,0,0,1,2.4,2.436A2.48,2.48,0,0,1-755,662.035Z"
                            transform="translate(56.982 1985.912)"
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 class="title">Careers</h3>
                    <p class="description">
                      Help build the future of technology. Start your new career
                      at Binance.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!------------------------call to action-------------------------> */}

        <section class="call-to-action">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <div class="call-to-action-bg">
                  <div class="call-to-action-content">
                    <h2 class="call-to-action-heading">Start trading now</h2>
                    <div class="btn-wrapper">
                      <button class="btn call-action-btn">Register Now</button>
                      <button class="btn call-action-btn">Trade Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!------------------------End all to action-------------------------> */}
      </div>
    </div>
  );
};

export default Landing;
