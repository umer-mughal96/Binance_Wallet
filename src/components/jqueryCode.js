import React, { useEffect } from 'react';
import $ from 'jquery';

const JqueryCode = () => {


    useEffect(() => {



    },[])
    return (
        <div className="Header-wrapper">
        {/* <!------------------------------- Header-----------------------------> */}
        <header>
          <section className="navigation">
            <div className="nav-container">
              <div className="brand">
              <img src="./asstes/logos/company-logo.png" alt="" />
              </div>
              <nav>
                <div className="nav-mobile">
                  <a id="nav-toggle" href="#!"><span></span></a>
                </div>
                <ul className="nav-list">
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">About</a></li>
                  <li><a href="#!">Services</a>
                    <ul className="nav-dropdown">
                      <li><a href="#!">Web Design</a></li>
                      <li><a href="#!">Web Development</a></li>
                      <li><a href="#!">Graphic Design</a></li>
                    </ul>
                  </li>
                  <li><a href="#!">Pricing</a></li>
                  <li><a href="#!">Contact</a></li>
                 
                </ul>
              </nav>
              </div>
          </section>
        </header>
        {/* <!-------------------------------End Header-----------------------------> */}
      </div>
    )
}

export default JqueryCode

