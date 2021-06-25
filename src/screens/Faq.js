import React from 'react'

const Faq = () => {
    return (
        <div className="container-fluid">
            <div className="row faq-page markets-page-contant-container">
                <div className="col-md-12 portal">
                    <h4>Convert & OTC Portal</h4>
                    <p>Trade Bitcoin, BNB, and other Cryptocurrencies easily in one go</p>
                    <form>
                        <div className="row">
                            <div className="col-md-7">
                                <div class="form-group">
                                    <label for="number">From</label>
                                    <input type="number" class="form-control" id="exampleInputnumber" min="20" max="20000" aria-describedby="number" placeholder="Please enter 20-20000" required/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div class="form-group">
                                        <div class="f-group">
                                       
                                        <select class="f-control f-dropdown" placeholder="Please choose 1">
                                            <option value="1" data-image="./asstes/images/BTC.png" selected>BTC</option>
                                            <option value="2" data-image="./asstes/images/BNB.png">BNB</option>
                                            <option value="3" data-image="./asstes/images/BTC.png">BTC</option>
                                            <option value="4" data-image="./asstes/images/BNB.png">BNB</option>
                                            <option value="5" data-image="./asstes/images/BTC.png">BTC</option>
                                        </select>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div class="form-group">
                                    <label for="number">To</label>
                                    <input type="number" class="form-control" id="exampleInputnumber" min="0.00003" max="50" aria-describedby="number" placeholder="Please enter 0.00003-50" required/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                    <div class="form-group">
                                                <div class="f-group">
                                               
                                                <select class="f-control f-dropdown" placeholder="Please choose 1">
                                                    <option value="1" data-image="./asstes/images/BNB.png" selected>BNB</option>
                                                    <option value="2" data-image="./asstes/images/BTC.png">BTC</option>
                                                    <option value="3" data-image="./asstes/images/BNB.png">BNB</option>
                                                    <option value="4" data-image="./asstes/images/BTC.png">BTC</option>
                                                    <option value="5" data-image="./asstes/images/BNB.png">BNB</option>
                                                </select>
                                                </div>
                                        </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" class="btn btn-primary">View Conversion</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-12">
                    <div className="faq">
                    <h3>FAQs</h3>
                        <input id="faq-a" type="checkbox" />
                        <label for="faq-a">
                            <p className="faq-heading">1. What are the requirements to use the portal?</p>
                            <div className="faq-arrow"></div>
                            <p className="faq-text">
                                All functions of the portal (checking indicative prices / confirming trades) will be available when you log-in to your account. Please note that standard exchange withdrawal limits apply. If you are using an account without KYC verification, the 2 BTC withdrawal limit per 24 hours will apply.
                            </p>
                        </label>
                        <input id="faq-b" type="checkbox" />
                        <label for="faq-b">
                            <p className="faq-heading">2. What are the benefits of using the crypto converter portal?</p>
                            <div className="faq-arrow"></div>
                            <p className="faq-text">
                                Users can easily convert their assets on the portal without having to worry about complicated matters such as the order book and trading fees. You can find out about the Benefits of conducting larger OTC crypto trade size (generally 10,000 USDT equivalent or higher) trades on the portal. Start by registering an account today to find out more!
                            </p>
                        </label>
                        <input id="faq-c" type="checkbox" />
                        <label for="faq-c">
                            <p className="faq-heading">3. What are the minimum and maximum trade amounts?</p>
                            <div className="faq-arrow"></div>
                            <p className="faq-text">
                                The minimum trade amount is generally an equivalent value of 10 USDT worth of coins. Minimum and maximum trade amounts will be dependent on the coin / pair and can be previewed before entering in a trade amount.
                            </p>
                        </label>
                        <input id="faq-d" type="checkbox" />
                        <label for="faq-d">
                            <p className="faq-heading">4. How does settlement work?</p>
                            <div className="faq-arrow"></div>
                            <p className="faq-text">
                                Trades are settled directly to your Binance account’s spot wallet. Settlement will usually occur immediately after you confirm a trade.
                            </p>
                        </label>
                        <input id="faq-e" type="checkbox" />
                        <label for="faq-e">
                            <p className="faq-heading">5. How do I make deposits and withdrawals for OTC trades?</p>
                            <div className="faq-arrow"></div>
                            <p className="faq-text">
                                There is no separate wallet for OTC trades. Simply make deposits and withdrawals to / from your account’s spot wallet.
                            </p>
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="start-trading">
                        <h4>Start trading now</h4>
                        <button className="register">Register Now</button><button className="trade">Trade Now</button>
                    </div> 
                </div>
            </div>
        </div>
    
    );
};

export default Faq;
