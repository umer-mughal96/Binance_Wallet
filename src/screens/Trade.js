import React from 'react'

const Trade = () => {
    return (
        <div className="container-fluid">
           <div className="row p-3">
               <div className="col-md-4 binance-nft">
                   <p>Binance NFT Marketplace Launch: Win Limited Edition NFTs & Share $200,000</p> <span>(06-24)</span>
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Introducing Klaytn (KLAY) on Binance Launchpool! Farm KLAY by Staking BNB & BUSD Tokens</p> <span>(06-24)</span> 
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Binance NFT Marketplace Is Now Live!</p>  <span>(06-24)</span>
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Notice of Removal of Trading Pairs - 2021-06-25</p> <span>(06-24)</span> 
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Binance Will List Klaytn (KLAY)</p>  <span>(06-24)</span>
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Binance Adds Two New Assets and New Pairs to Seven Existing Assets on the Convert & OTC Portal!</p>  <span>(06-24)</span>
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Binance Futures Launches Euro Cup Bonus Campaign!</p> <span>(06-24)</span> 
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Prepare for NFT Launch: Buy Crypto with Card, Get 50% off Card Fees</p>  <span>(06-24)</span>
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Buy SHIB and LTC Directly with ILS Using Your Credit Card</p>  <span>(06-24)</span>
               </div>
           </div>
           <div className="row">
               <div className="col-md-8">
                   <p>BTC/USDT 10x
                       <span>Bitcoin</span>
                   </p>
               </div>
               <div className="col-md-4 binance-nft">
                   <p>Introducing Klaytn (KLAY) on Binance Launchpool! Farm KLAY by Staking BNB & BUSD Tokens</p> <span>(06-24)</span> 
               </div>
           </div>
           <div class="markets-tabs-box">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="open-orders"><a class="nav-link active show" id="open-orders-tab" data-toggle="tab" href="#open-orders" role="tab" aria-controls="open-orders" aria-selected="true">Open Orders(0)</a></li>
        <li class="nav-item" role="order-history"><a class="nav-link" id="order-history-tab" data-toggle="tab" href="#order-history" role="tab" aria-controls="order-history" aria-selected="false">Order History</a></li>
        <li class="nav-item" role="trade-history"><a class="nav-link" id="trade-history-tab" data-toggle="tab" href="#trade-history" role="tab" aria-controls="trade-history" aria-selected="false">Trade History</a></li>
        <li class="nav-item" role="funds"><a class="nav-link" id="funds-tab" data-toggle="tab" href="#funds" role="tab" aria-controls="funds" aria-selected="false">Funds</a></li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade active show" id="open-orders" role="tabpanel" aria-labelledby="open-orders-tab">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="tab-content" id="favtabContent">
                            <div class="tab-pane fade show active" id="spot" role="tabpanel" aria-labelledby="pills-spot-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                            </table>
                                            <div class="no-data">
                                                <div class="no-data-inner">
                                                    <i class="fal fa-file-exclamation"></i><br />
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
        <div class="tab-pane fade" id="order-history" role="tabpanel" aria-labelledby="order-history-tab">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <ul class="nav nav-pills mt-1 mb-1" id="zones-tab" role="tablist">
                            <li class="nav-item"><a class="nav-link active" id="pills-all-tab" data-toggle="pill" href="#all" role="tab" aria-controls="all" aria-selected="true">1 Day</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-defi-tab" data-toggle="pill" href="#defi" role="tab" aria-controls="defi" aria-selected="false">1 Week</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-innovation-tab" data-toggle="pill" href="#innovation" role="tab" aria-controls="innovation" aria-selected="false">1 Month</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-pos-tab" data-toggle="pill" href="#pos" role="tab" aria-controls="pos" aria-selected="false">3 Months</a></li>
                            <li class="nav-item">
                                <div class="search-form position-relative">
                                    <form action="">
                                        <div class="form-group has-search"><span class="fa fa-search form-control-feedback"></span><input type="text" class="form-control" placeholder="Search Coin Name" /></div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                        <div class="tab-content" id="favtabContent">
                            <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="pills-all-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="defi" role="tabpanel" aria-labelledby="pills-defi-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="innovation" role="tabpanel" aria-labelledby="pills-innovation-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pos" role="tabpanel" aria-labelledby="pills-pos-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="table-row" scope="row">
                                                            <img src="assets/images/BTC.png" alt="" />
                                                            <p>
                                                                BTC <br />
                                                                <span>bitcoin</span>
                                                            </p>
                                                        </th>
                                                        <td>$4.07</td>
                                                        <td>+3.41%</td>
                                                        <td class="trade">$759.03M <button>Trade</button></td>
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
        <div class="tab-pane fade" id="trade-history" role="tabpanel" aria-labelledby="trade-history-tab">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <ul class="nav nav-pills mt-1 mb-1" id="fav-tab" role="tablist">
                            <li class="nav-item"><a class="nav-link active" id="pills-bnbmarkets-tab" data-toggle="pill" href="#bnbmarkets" role="tab" aria-controls="bnbmarkets" aria-selected="true">BNB Markets</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-btcmarkets-tab" data-toggle="pill" href="#btcmarkets" role="tab" aria-controls="btcmarkets" aria-selected="false">BTC Markets</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-altsmarkets-tab" data-toggle="pill" href="#altsmarkets" role="tab" aria-controls="altsmarkets" aria-selected="false">ALTS Markets</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-fiatmarkets-tab" data-toggle="pill" href="#fiatmarkets" role="tab" aria-controls="fiatmarkets" aria-selected="false">FIAT Markets</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-etf-tab" data-toggle="pill" href="#etf" role="tab" aria-controls="etf" aria-selected="false">ETF</a></li>
                            <li class="nav-item">
                                <select class="nav-link selectpicker" id="pills-futures-tab" data-toggle="pill" href="#futures" role="tab" aria-controls="futures" aria-selected="false">
                                    <div class="dropdown"></div>
                                    <option>Support Margin</option>
                                    <option value="All Margin">All Margin</option>
                                    <option value="Cross">Cross</option>
                                    <option value="Isolated">Isolated</option>
                                </select>
                            </li>
                            <li class="nav-item">
                                <div class="search-form position-relative">
                                    <form action="">
                                        <div class="form-group has-search"><span class="fa fa-search form-control-feedback"></span><input type="text" class="form-control" placeholder="Search Coin Name" /></div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                        <div class="tab-content" id="favtabContent">
                            <div class="tab-pane fade show active" id="bnbmarkets" role="tabpanel" aria-labelledby="pills-bnbmarkets-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Edit <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="btcmarkets" role="tabpanel" aria-labelledby="pills-btcmarkets-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Edit <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="altsmarkets" role="tabpanel" aria-labelledby="pills-altsmarkets-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Edit <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="fiatmarkets" role="tabpanel" aria-labelledby="pills-fiatmarkets-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Edit <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="etf" role="tabpanel" aria-labelledby="pills-etf-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Edit <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="futures" role="tabpanel" aria-labelledby="pills-futures-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Market Cap <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Edit <i class="fas fa-sort"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> ZIL/BNB</th>
                                                        <td>0.0003437<span>/ $0.180137</span></td>
                                                        <td>+2.78%</td>
                                                        <td>0.0003457</td>
                                                        <td>0.0003271</td>
                                                        <td>$2,033.13M</td>
                                                        <td>1,607.31</td>
                                                        <td class="trade spot"><button>Trade</button></td>
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
        <div class="tab-pane fade" id="funds" role="tabpanel" aria-labelledby="funds-tab">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <ul class="nav nav-pills mt-1 mb-1" id="fav-tab" role="tablist">
                            <li class="nav-item"><a class="nav-link active" id="pills-usd-tab" data-toggle="pill" href="#usd" role="tab" aria-controls="usd" aria-selected="true">USDⓈ-M Futures</a></li>
                            <li class="nav-item"><a class="nav-link" id="pills-coin-m-tab" data-toggle="pill" href="#coin-m" role="tab" aria-controls="coin-m" aria-selected="false">COIN-M Futures</a></li>
                            <li class="nav-item">
                                <div class="search-form position-relative">
                                    <form action="">
                                        <div class="form-group has-search"><span class="fa fa-search form-control-feedback"></span><input type="text" class="form-control" placeholder="Search Coin Name" /></div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                        <div class="tab-content" id="favtabContent">
                            <div class="tab-pane fade show active" id="usd" role="tabpanel" aria-labelledby="pills-usd-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="coin-m" role="tabpanel" aria-labelledby="pills-coin-m-tab">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pair <i class="fas fa-sort"></i></th>
                                                        <th scope="col">Last Price <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Change <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h High <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Low <i class="fas fa-sort"></i></th>
                                                        <th scope="col">24h Volume <i class="fas fa-sort"></i></th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="star-icon"><i class="fas fa-star"></i> BTCUSDT perpetual</th>
                                                        <td>0.43,794.60<span>/ $43,812.31</span></td>
                                                        <td>-2.60%</td>
                                                        <td>45,846.61</td>
                                                        <td>42,151.00</td>
                                                        <td>28,297.32M USDT</td>
                                                        <td class="trade"><a href="">Data History</a> <button>Trade</button></td>
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

        </div>
    )
}

export default Trade
