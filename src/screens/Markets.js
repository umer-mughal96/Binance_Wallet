import React from "react";

const Markets = () => {
  return (
    <div className="markets-wrapper">
      <div className="markets-page-contant-container">
        <div className="markets-compunes-wrapper">
          <div className="markets-compunes">
            <h6>BNB/BUSD</h6>
            <div className="markets-compunes-price-wrapper">
              <div className="markets-compunes-price">
                <span className="crunnet-price">665.28</span>
                <span className="dicount-price">$665.28</span>
              </div>
              <div className="markets-compunes-grapg">
                <img src="./asstes/images/tbl-grap.svg" alt="" />
              </div>
            </div>
            <div className="markets-compunes-price-volume">
              <span className="markets-compunes-price-volume-discount">
                +0.88%
              </span>
              <span className="dicount-price">Volume: 452,642,279.65 BUSD</span>
            </div>
          </div>
          <div className="markets-compunes">
            <h6>BNB/BUSD</h6>
            <div className="markets-compunes-price-wrapper">
              <div className="markets-compunes-price">
                <span className="crunnet-price">665.28</span>
                <span className="dicount-price">$665.28</span>
              </div>
              <div className="markets-compunes-grapg">
                <img src="././asstes/images/tbl-grap.svg" alt="" />
              </div>
            </div>
            <div className="markets-compunes-price-volume">
              <span className="markets-compunes-price-volume-discount">
                +0.88%
              </span>
              <span className="dicount-price">Volume: 452,642,279.65 BUSD</span>
            </div>
          </div>
          <div className="markets-compunes">
            <h6>BNB/BUSD</h6>
            <div className="markets-compunes-price-wrapper">
              <div className="markets-compunes-price">
                <span className="crunnet-price">665.28</span>
                <span className="dicount-price">$665.28</span>
              </div>
              <div className="markets-compunes-grapg">
                <img src="./asstes/images/tbl-grap.svg" alt="" />
              </div>
            </div>
            <div className="markets-compunes-price-volume">
              <span className="markets-compunes-price-volume-discount">
                +0.88%
              </span>
              <span className="dicount-price">Volume: 452,642,279.65 BUSD</span>
            </div>
          </div>
          <div className="markets-compunes">
            <h6>BNB/BUSD</h6>
            <div className="markets-compunes-price-wrapper">
              <div className="markets-compunes-price">
                <span className="crunnet-price">665.28</span>
                <span className="dicount-price">$665.28</span>
              </div>
              <div className="markets-compunes-grapg">
                <img src="./asstes/images/tbl-grap.svg" alt="" />
              </div>
            </div>
            <div className="markets-compunes-price-volume">
              <span className="markets-compunes-price-volume-discount">
                +0.88%
              </span>
              <span className="dicount-price">Volume: 452,642,279.65 BUSD</span>
            </div>
          </div>
        </div>
        <div className="markets-tabs-box">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="favourite">
              <a
                className="nav-link active"
                id="favourite-tab"
                data-toggle="tab"
                href="#favourite"
                role="tab"
                aria-controls="favourite"
                aria-selected="true"
              >
                Favourite
              </a>
            </li>
            <li className="nav-item" role="zones">
              <a
                className="nav-link"
                id="zones-tab"
                data-toggle="tab"
                href="#zones"
                role="tab"
                aria-controls="zones"
                aria-selected="false"
              >
                Zones
              </a>
            </li>
            <li className="nav-item" role="spotmarkets">
              <a
                className="nav-link"
                id="spotmarkets-tab"
                data-toggle="tab"
                href="#spotmarkets"
                role="tab"
                aria-controls="spotmarkets"
                aria-selected="false"
              >
                Spot Markets
              </a>
            </li>
            <li className="nav-item" role="futuremarkets">
              <a
                className="nav-link"
                id="futuremarkets-tab"
                data-toggle="tab"
                href="#futuremarkets"
                role="tab"
                aria-controls="futuremarkets"
                aria-selected="true"
              >
                Future Markets
              </a>
            </li>
            <li className="nav-item" role="marketsoverview">
              <a
                className="nav-link"
                id="marketsoverview-tab"
                data-toggle="tab"
                href="#marketsoverview"
                role="tab"
                aria-controls="marketsoverview"
                aria-selected="false"
              >
                Markets Overview
              </a>
            </li>
            <li className="nav-item" role="topmovers">
              <a
                className="nav-link"
                id="topmovers-tab"
                data-toggle="tab"
                href="#topmovers"
                role="tab"
                aria-controls="topmovers"
                aria-selected="false"
              >
                Top Movers
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="favourite"
              role="tabpanel"
              aria-labelledby="favourite-tab"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 p-0">
                    <ul
                      className="nav nav-pills mt-1 mb-1"
                      id="fav-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-spot-tab"
                          data-toggle="pill"
                          href="#spot"
                          role="tab"
                          aria-controls="spot"
                          aria-selected="true"
                        >
                          Spot(1)
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-futures-tab"
                          data-toggle="pill"
                          href="#futures"
                          role="tab"
                          aria-controls="futures"
                          aria-selected="false"
                        >
                          Futures(2)
                        </a>
                      </li>
                      <li className="nav-item">
                        <div className="search-form position-relative">
                          <form action="">
                            <div className="form-group has-search">
                              <span className="fa fa-search form-control-feedback"></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search Coin Name"
                              />
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                    <div className="tab-content" id="favtabContent">
                      <div
                        className="tab-pane fade show active"
                        id="spot"
                        role="tabpanel"
                        aria-labelledby="pills-spot-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                              </table>
                              <div className="no-data">
                                <div className="no-data-inner">
                                  <i className="fal fa-file-exclamation"></i>
                                  <br />
                                  <p>No Data Found</p>
                                  <button>Add</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="futures"
                        role="tabpanel"
                        aria-labelledby="pills-futures-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                              </table>
                              <div className="no-data">
                                <div className="no-data-inner">
                                  <i className="fal fa-file-exclamation"></i>
                                  <br />
                                  <p>No Data Found</p>
                                  <button>Add</button>
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
            <div
              className="tab-pane fade"
              id="zones"
              role="tabpanel"
              aria-labelledby="zones-tab"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 p-0">
                    <ul
                      className="nav nav-pills mt-1 mb-1"
                      id="zones-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-all-tab"
                          data-toggle="pill"
                          href="#all"
                          role="tab"
                          aria-controls="all"
                          aria-selected="true"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-defi-tab"
                          data-toggle="pill"
                          href="#defi"
                          role="tab"
                          aria-controls="defi"
                          aria-selected="false"
                        >
                          DeFi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-innovation-tab"
                          data-toggle="pill"
                          href="#innovation"
                          role="tab"
                          aria-controls="innovation"
                          aria-selected="false"
                        >
                          Innovation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-pos-tab"
                          data-toggle="pill"
                          href="#pos"
                          role="tab"
                          aria-controls="pos"
                          aria-selected="false"
                        >
                          POS
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-polkadot-tab"
                          data-toggle="pill"
                          href="#polkadot"
                          role="tab"
                          aria-controls="polkadot"
                          aria-selected="false"
                        >
                          Polkadot
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-nft-tab"
                          data-toggle="pill"
                          href="#nft"
                          role="tab"
                          aria-controls="nft"
                          aria-selected="false"
                        >
                          NFT
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-pow-tab"
                          data-toggle="pill"
                          href="#pow"
                          role="tab"
                          aria-controls="pow"
                          aria-selected="false"
                        >
                          POW
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-bsc-tab"
                          data-toggle="pill"
                          href="#bsc"
                          role="tab"
                          aria-controls="bsc"
                          aria-selected="false"
                        >
                          BSC
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-storage-tab"
                          data-toggle="pill"
                          href="#storage"
                          role="tab"
                          aria-controls="storage"
                          aria-selected="false"
                        >
                          Storage
                        </a>
                      </li>
                      <li className="nav-item">
                        <div className="search-form position-relative">
                          <form action="">
                            <div className="form-group has-search">
                              <span className="fa fa-search form-control-feedback"></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search Coin Name"
                              />
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                    <div className="tab-content" id="favtabContent">
                      <div
                        className="tab-pane fade show active"
                        id="all"
                        role="tabpanel"
                        aria-labelledby="pills-all-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="defi"
                        role="tabpanel"
                        aria-labelledby="pills-defi-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="innovation"
                        role="tabpanel"
                        aria-labelledby="pills-innovation-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pos"
                        role="tabpanel"
                        aria-labelledby="pills-pos-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="polkadot"
                        role="tabpanel"
                        aria-labelledby="pills-polkadot-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nft"
                        role="tabpanel"
                        aria-labelledby="pills-nft-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pow"
                        role="tabpanel"
                        aria-labelledby="pills-pow-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="bsc"
                        role="tabpanel"
                        aria-labelledby="pills-bsc-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="storage"
                        role="tabpanel"
                        aria-labelledby="pills-storage-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Name <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="table-row" scope="row">
                                      <img src="assets/images/BTC.png" alt="" />
                                      <p>
                                        BTC <br />
                                        <span>bitcoin</span>
                                      </p>
                                    </th>
                                    <td>$4.07</td>
                                    <td>+3.41%</td>
                                    <td className="trade">
                                      $759.03M <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="spotmarkets"
              role="tabpanel"
              aria-labelledby="spotmarkets-tab"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 p-0">
                    <ul
                      className="nav nav-pills mt-1 mb-1"
                      id="fav-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-bnbmarkets-tab"
                          data-toggle="pill"
                          href="#bnbmarkets"
                          role="tab"
                          aria-controls="bnbmarkets"
                          aria-selected="true"
                        >
                          BNB Markets
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-btcmarkets-tab"
                          data-toggle="pill"
                          href="#btcmarkets"
                          role="tab"
                          aria-controls="btcmarkets"
                          aria-selected="false"
                        >
                          BTC Markets
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-altsmarkets-tab"
                          data-toggle="pill"
                          href="#altsmarkets"
                          role="tab"
                          aria-controls="altsmarkets"
                          aria-selected="false"
                        >
                          ALTS Markets
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-fiatmarkets-tab"
                          data-toggle="pill"
                          href="#fiatmarkets"
                          role="tab"
                          aria-controls="fiatmarkets"
                          aria-selected="false"
                        >
                          FIAT Markets
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-etf-tab"
                          data-toggle="pill"
                          href="#etf"
                          role="tab"
                          aria-controls="etf"
                          aria-selected="false"
                        >
                          ETF
                        </a>
                      </li>
                      <li className="nav-item">
                        <select
                          className="nav-link selectpicker"
                          id="pills-futures-tab"
                          data-toggle="pill"
                          href="#futures"
                          role="tab"
                          aria-controls="futures"
                          aria-selected="false"
                        >
                          <div className="dropdown" />
                          <option selected>Support Margin</option>
                          <option value="All Margin">All Margin</option>
                          <option value="Cross">Cross</option>
                          <option value="Isolated">Isolated</option>
                        </select>
                      </li>
                      <li className="nav-item">
                        <div className="search-form position-relative">
                          <form action="">
                            <div className="form-group has-search">
                              <span className="fa fa-search form-control-feedback"></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search Coin Name"
                              />
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                    <div className="tab-content" id="favtabContent">
                      <div
                        className="tab-pane fade show active"
                        id="bnbmarkets"
                        role="tabpanel"
                        aria-labelledby="pills-bnbmarkets-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Edit <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="btcmarkets"
                        role="tabpanel"
                        aria-labelledby="pills-btcmarkets-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Edit <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="altsmarkets"
                        role="tabpanel"
                        aria-labelledby="pills-altsmarkets-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Edit <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="fiatmarkets"
                        role="tabpanel"
                        aria-labelledby="pills-fiatmarkets-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Edit <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="etf"
                        role="tabpanel"
                        aria-labelledby="pills-etf-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Edit <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="futures"
                        role="tabpanel"
                        aria-labelledby="pills-futures-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Market Cap <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Edit <i className="fas fa-sort"></i>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> ZIL/BNB
                                    </th>
                                    <td>
                                      0.0003437<span>/ $0.180137</span>
                                    </td>
                                    <td>+2.78%</td>
                                    <td>0.0003457</td>
                                    <td>0.0003271</td>
                                    <td>$2,033.13M</td>
                                    <td>1,607.31</td>
                                    <td className="trade spot">
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="futuremarkets"
              role="tabpanel"
              aria-labelledby="futuremarkets-tab"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 p-0">
                    <ul
                      className="nav nav-pills mt-1 mb-1"
                      id="fav-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-usd-tab"
                          data-toggle="pill"
                          href="#usd"
                          role="tab"
                          aria-controls="usd"
                          aria-selected="true"
                        >
                          USDⓈ-M Futures
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-coin-m-tab"
                          data-toggle="pill"
                          href="#coin-m"
                          role="tab"
                          aria-controls="coin-m"
                          aria-selected="false"
                        >
                          COIN-M Futures
                        </a>
                      </li>
                      <li className="nav-item">
                        <div className="search-form position-relative">
                          <form action="">
                            <div className="form-group has-search">
                              <span className="fa fa-search form-control-feedback"></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search Coin Name"
                              />
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                    <div className="tab-content" id="favtabContent">
                      <div
                        className="tab-pane fade show active"
                        id="usd"
                        role="tabpanel"
                        aria-labelledby="pills-usd-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="coin-m"
                        role="tabpanel"
                        aria-labelledby="pills-coin-m-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 p-0">
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      Pair <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      Last Price <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Change <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h High <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Low <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col">
                                      24h Volume <i className="fas fa-sort"></i>
                                    </th>
                                    <th scope="col"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="star-icon">
                                      <i className="fas fa-star"></i> BTCUSDT
                                      perpetual
                                    </th>
                                    <td>
                                      0.43,794.60<span>/ $43,812.31</span>
                                    </td>
                                    <td>-2.60%</td>
                                    <td>45,846.61</td>
                                    <td>42,151.00</td>
                                    <td>28,297.32M USDT</td>
                                    <td className="trade">
                                      <a href="">Data History</a>{" "}
                                      <button>Trade</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="marketsoverview"
              role="tabpanel"
              aria-labelledby="marketsoverview-tab"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xl-4 col-sm-6 col-12 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <div className="market-coin">
                          <p>
                            BNB<span>/USDT</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <p>
                          436.43<span>/ $436.43</span>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p>-89.71 -17.11%</p>
                      </div>
                      <div className="col-12">
                        <img src="./asstes/images/chart.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-4 col-sm-6 col-12 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <div className="market-coin">
                          <p>
                            BNB<span>/USDT</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <p>
                          436.43<span>/ $436.43</span>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p>-89.71 -17.11%</p>
                      </div>
                      <div className="col-12">
                        <img src="./asstes/images/chart.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-4 col-sm-6 col-12 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <div className="market-coin">
                          <p>
                            BNB<span>/USDT</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <p>
                          436.43<span>/ $436.43</span>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p>-89.71 -17.11%</p>
                      </div>
                      <div className="col-12">
                        <img src="./asstes/images/chart.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <h6>Price Change Distribution</h6>
                      </div>
                      <div className="col-12">
                        <img src="./asstes/images/bar-chart.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-sm-12 col-12 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <h6>Top Movers</h6>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="card-body">
                                <div id="content">
                                  <ul className="timeline">
                                    <li className="event" data-time="19:55:03">
                                      <div className="row fm-bg">
                                        <div className="col-md-4">
                                          <div className="fm-name">
                                            <p>
                                              COS<span>/BTC</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="fm-time">
                                            <p>In 5m</p>
                                          </div>
                                        </div>
                                        <div className="col-md-4 text-right">
                                          <div className="fm-updown">
                                            <p>
                                              +7.84%{" "}
                                              <i className="fal fa-arrow-down"></i>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="event" data-time="21:55:03">
                                      <div className="row fm-bg">
                                        <div className="col-md-4">
                                          <div className="fm-name">
                                            <p>
                                              COS<span>/BTC</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="fm-time">
                                            <p>In 5m</p>
                                          </div>
                                        </div>
                                        <div className="col-md-4 text-right">
                                          <div className="fm-updown">
                                            <p>
                                              +7.84%{" "}
                                              <i className="fal fa-arrow-up"></i>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="event" data-time="22:55:03">
                                      <div className="row fm-bg">
                                        <div className="col-md-4">
                                          <div className="fm-name">
                                            <p>
                                              COS<span>/BTC</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="fm-time">
                                            <p>In 5m</p>
                                          </div>
                                        </div>
                                        <div className="col-md-4 text-right">
                                          <div className="fm-updown">
                                            <p>
                                              +7.84%{" "}
                                              <i className="fal fa-arrow-down"></i>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="event" data-time="23:55:03">
                                      <div className="row fm-bg">
                                        <div className="col-md-4">
                                          <div className="fm-name">
                                            <p>
                                              COS<span>/BTC</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="fm-time">
                                            <p>In 5m</p>
                                          </div>
                                        </div>
                                        <div className="col-md-4 text-right">
                                          <div className="fm-updown">
                                            <p>
                                              +7.84%{" "}
                                              <i className="fal fa-arrow-up"></i>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="event" data-time="19:55:03">
                                      <div className="row fm-bg">
                                        <div className="col-md-4">
                                          <div className="fm-name">
                                            <p>
                                              COS<span>/BTC</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="fm-time">
                                            <p>In 5m</p>
                                          </div>
                                        </div>
                                        <div className="col-md-4 text-right">
                                          <div className="fm-updown">
                                            <p>
                                              +7.84%{" "}
                                              <i className="fal fa-arrow-down"></i>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <h6>24H Rankings</h6>
                        <ul
                          className="nav nav-pills mb-3"
                          id="rankingtab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="pills-volume-tab"
                              data-toggle="pill"
                              href="#pills-volume"
                              role="tab"
                              aria-controls="pills-volume"
                              aria-selected="true"
                            >
                              Volume
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-topgainers-tab"
                              data-toggle="pill"
                              href="#pills-topgainers"
                              role="tab"
                              aria-controls="pills-topgainers"
                              aria-selected="false"
                            >
                              Top Gainers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-toplosers-tab"
                              data-toggle="pill"
                              href="#pills-toplosers"
                              role="tab"
                              aria-controls="pills-toplosers"
                              aria-selected="false"
                            >
                              Top Losers
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-ranking-Content">
                          <div
                            className="tab-pane fade show active"
                            id="pills-volume"
                            role="tabpanel"
                            aria-labelledby="pills-volume-tab"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-12 p-0">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th scope="col">
                                          Price <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          Last Price{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          24h Volume{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-topgainers"
                            role="tabpanel"
                            aria-labelledby="pills-topgainers-tab"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-12 p-0">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th scope="col">
                                          Price <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          Last Price{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          24h Volume{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-toplosers"
                            role="tabpanel"
                            aria-labelledby="pills-toplosers-tab"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-12 p-0">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th scope="col">
                                          Price <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          Last Price{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          24h Volume{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th className="table-row" scope="row">
                                          <img
                                            src="assets/images/BTC.png"
                                            alt=""
                                          />
                                          <p>
                                            BTC <br />
                                            <span>bitcoin</span>
                                          </p>
                                        </th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="row market-chart-outline">
                      <div className="col-12">
                        <h6>Top Derivatives</h6>
                        <ul
                          className="nav nav-pills mb-3"
                          id="derivativetab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="pills-USDⓈ-MD-tab"
                              data-toggle="pill"
                              href="#pills-USDⓈ-MD"
                              role="tab"
                              aria-controls="pills-USDⓈ-MD"
                              aria-selected="true"
                            >
                              USDⓈ-M Futures
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-COIN-MD-tab"
                              data-toggle="pill"
                              href="#pills-COIN-MD"
                              role="tab"
                              aria-controls="pills-COIN-MD"
                              aria-selected="false"
                            >
                              COIN-M Futures
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-ETFD-tab"
                              data-toggle="pill"
                              href="#pills-ETFD"
                              role="tab"
                              aria-controls="pills-ETFD"
                              aria-selected="false"
                            >
                              ETF
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-ranking-Content">
                          <div
                            className="tab-pane fade show active"
                            id="pills-USDⓈ-MD"
                            role="tabpanel"
                            aria-labelledby="pills-USDⓈ-MD-tab"
                          >
                            <div className="no-data">
                              <div className="no-data-inner">
                                <i className="fal fa-file-exclamation"></i>
                                <br />
                                <p>No Data Found</p>
                                <button>Add</button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-COIN-MD"
                            role="tabpanel"
                            aria-labelledby="pills-COIN-MD-tab"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-12 p-0">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th scope="col">
                                          Price <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          Last Price{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          24h Change{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">BTCUSD perpetual</th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">BTCUSD perpetual</th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">BTCUSD perpetual</th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-ETFD"
                            role="tabpanel"
                            aria-labelledby="pills-ETFD-tab"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-12 p-0">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th scope="col">
                                          Price <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          Last Price{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                        <th scope="col">
                                          24h Change{" "}
                                          <i className="fas fa-sort"></i>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">BTCUSD perpetual</th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">BTCUSD perpetual</th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">BTCUSD perpetual</th>
                                        <td>$4.07</td>
                                        <td>+3.41%</td>
                                      </tr>
                                    </tbody>
                                  </table>
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
            <div
              className="tab-pane fade"
              id="topmovers"
              role="tabpanel"
              aria-labelledby="topmovers-tab"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div id="content">
                          <ul className="timeline">
                            <li className="event" data-time="19:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84%{" "}
                                      <i className="fal fa-arrow-down"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="21:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84% <i className="fal fa-arrow-up"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="22:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84%{" "}
                                      <i className="fal fa-arrow-down"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="23:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84% <i className="fal fa-arrow-up"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="19:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84%{" "}
                                      <i className="fal fa-arrow-down"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="21:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84% <i className="fal fa-arrow-up"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="22:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84%{" "}
                                      <i className="fal fa-arrow-down"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="23:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84% <i className="fal fa-arrow-up"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="19:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84%{" "}
                                      <i className="fal fa-arrow-down"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="21:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84% <i className="fal fa-arrow-up"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="22:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84%{" "}
                                      <i className="fal fa-arrow-down"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="event" data-time="23:55:03">
                              <div className="row fm-bg">
                                <div className="col-md-4">
                                  <div className="fm-name">
                                    <p>
                                      COS<span>/BTC</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="fm-time">
                                    <p>In 5m</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right">
                                  <div className="fm-updown">
                                    <p>
                                      +7.84% <i className="fal fa-arrow-up"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
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
      {/* <!------------------------End Currency Table Section -----------------------> */}
    </div>
  );
};

export default Markets;
