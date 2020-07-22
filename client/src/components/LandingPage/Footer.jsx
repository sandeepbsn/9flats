import React from "react";

function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* <div  ></div> */}
            <div className="col-md-3 col-sm-6">
              <h4>Choose your language</h4>
              <ul className="list-unstyled">
                <li>Deutschland </li>
                <hr />
                <li>Schweiz </li>
                <hr />
                <li>United Kingdom</li>
                <hr />
                <li>USA </li>
                <hr />
                <li>España </li>
                <hr />
                <li>France</li>
                <hr />
                <li>Italia</li>
                <hr />
                <li>Portugal</li>
                <hr />
                <li>Россия</li>
                <hr />
                <li>中國</li>
              </ul>
            </div>
  
            <div className="col-md-3 col-sm-6">
              <h4>Choose your currency</h4>
              <ul className="list-unstyled">
                <li>$ AUD R$ BRL</li>
                <hr />
                <li>$ CAD CHF CHF</li>
                <hr />
                <li>kr. DKK € EUR</li>
                <hr />
                <li>£ GBP ¥ JPY</li>
                <hr />
                <li>kr NOK zł PLN</li>
                <hr />
                <li>₽ RUB kr SEK</li>
                <hr />
                <li>₺ TRY $ USD</li>
                <hr />
                <li>R ZAR $ SGD</li>
                <hr />
                <li>$ NZD ฿ THB</li>
                <hr />
              </ul>
            </div>
  
            <div className="col-md-3 col-sm-6">
              <h4>Company info</h4>
              <ul className="list-unstyled">
                <li> About </li>
                <hr />
                <li>9flats</li>
                <hr />
                <li>Jobs</li>
                <hr />
                <li>Blog</li>
                <hr />
                <li> Legal</li>
                <hr />
                <li> info</li>
                <hr />
                <li>Terms and privacy</li>
                <hr />
              </ul>
            </div>
  
            <div className="col-md-3 col-sm-6">
              <h4>Follow US</h4>
            </div>
  
            <div className="footer-bottom">
              <p className="text-xs">
                &copy;{new Date().getFullYear}9flats. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  