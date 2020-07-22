import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-5">
            <h6 className="mb-3 font-weight-bold">Choose your language</h6>
            <ul className="list-group">
              <li className="list-group-item">
                <a className=" footer_lang_de" title="Deutschland" href="/choose_language/de">Deutschland</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_at" title="Österreich" href="/choose_language/de-at">Österreich</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_ch" title="Schweiz" href="/choose_language/de-ch">Schweiz</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_gb" title="United Kingdom" href="/choose_language/en">United Kingdom</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_us" title="USA" href="/choose_language/en-us">USA</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_es" title="España" href="/choose_language/es">España</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_fr" title="France" href="/choose_language/fr">France</a>
                </li>
                <li className="list-group-item">
                  <a className=" footer_lang_it" title="Italia" href="/choose_language/it">Italia</a>
              </li>
              <li className="list-group-item">
                <a className=" footer_lang_pt" title="Portugal" href="/choose_language/pt">Portugal</a>
                </li>
                <li className="list-group-item">
                  <a className=" footer_lang_ru" title="Россия" href="/choose_language/ru">Россия</a>
                </li>
                <li className="list-group-item">
                  <a className=" footer_lang_zh" title="中國" href="/choose_language/zh">中國</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-5">
            <h6 className="mb-3 font-weight-bold">Choose your currency</h6>
            <ul className="list-group d-flex flex-row flex-wrap">
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=AUD"><strong>$</strong> AUD</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=BRL"><strong>R$</strong> BRL</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=CAD"><strong>$</strong> CAD</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=CHF"><strong>CHF</strong> CHF</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=DKK"><strong>kr.</strong> DKK</a></li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=EUR"><strong>€</strong> EUR</a></li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=GBP"><strong>£</strong> GBP</a></li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=JPY"><strong>¥</strong> JPY</a></li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=NOK"><strong>kr</strong> NOK</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=PLN"><strong>zł</strong> PLN</a>
              </li><li className="list-group-item w-50">
                <a href="/set_currency?currency=RUB"><strong>₽</strong> RUB</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=SEK"><strong>kr</strong> SEK</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=TRY"><strong>₺</strong> TRY</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=USD"><strong>$</strong> USD</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=ZAR"><strong>R</strong> ZAR</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=SGD"><strong>$</strong> SGD</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=NZD"><strong>$</strong> NZD</a>
              </li>
              <li className="list-group-item w-50">
                <a href="/set_currency?currency=THB"><strong>฿</strong> THB</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-5">
            <h6 className="mb-3 font-weight-bold">Company info</h6>
            <ul className="list-group mb-5">
              <li className="list-group-item">
                <a href="http://about.9flats.com/what-is-9flats">About 9flats</a>
              </li>
              <li className="list-group-item">
                <a href="http://about.9flats.com/jobs/open-positions">Jobs</a>
              </li>
              <li className="list-group-item">
                <a href="http://blog.9flats.com/?lang=en">Blog</a>
              </li>
              <li className="list-group-item">
                <a href="http://about.9flats.com/legal-info">Legal info</a>
              </li>
              <li className="list-group-item">
                <a data-title="Terms of service &amp; Data protection policy" href="/terms">Terms and privacy</a>
              </li>
            </ul
            ><h6 className="mb-3 font-weight-bold">Any questions?</h6>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="/faq">Help &amp; FAQs</a>
              </li>
              <li className="list-group-item">
                <a href="http://about.9flats.com/press.html">Press</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-5">
            <h6 className="mb-3 font-weight-bold">Follow us</h6>
            <a title="Blog" href="http://blog.9flats.com/?lang=en">
              <i className="icon-pencil fa-2x" aria-hidden="true"></i>
            </a>
            <a title="Facebook" href="https://www.facebook.com/9flats">
              <i className="icon-facebook-official fa-2x" aria-hidden="true"></i>
            </a>
            <a title="Twitter" href="https://twitter.com/9flats">
              <i className="icon-twitter-squared fa-2x" aria-hidden="true"></i>
            </a>
            <a title="Instagram" href="https://www.instagram.com/9flats/">
              <i className="icon-instagram fa-2x" aria-hidden="true"></i>
            </a>
            <a title="Pinterest" href="https://www.pinterest.com/9flats/">
              <i className="icon-pinterest-squared fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <hr className="mb-5 mt-5" />
        <div>&copy;2020 9flats. All rights reserved.
      </div>
    </div>
    </div>
  );
}

export default Footer;
