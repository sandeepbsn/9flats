import React, { Component } from "react";
// import { Navbar, Nav,} from "react-bootstrap";

export default class LandingPage extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container-fluid">
            <div className="text-white text-center py-3 my-3 slideshow__container__text">
              <div>
                <h2 className="slideshow__container__text_1 h1-responsive pt-3 mb-3 font-bold">Feel like home away from home</h2>
                <p className="mx-5 mb-5 slideshow__container__text_2 h4-responsive">The alternative to a hotel with 6 Million homes worldwide</p>
                <div className="search-bar clearfix b-js search-bar_slideshow search_bar_js_inited" onclick="return {name: 'search_bar', url: '/geo_locators.json'}">
                  <div className="search-bar__form__w rounded z-depth-1 p-2">
                    <form className="form-inline search-bar__form js-datepicker-form en full-search" id="search_form" target="_top" data-html-url="/searches" data-geocoded-form="search" data-autocomplete-url="/autocomplete" action="/searches" accept-charset="UTF-8" method="get">
                      <input name="utf8" type="hidden" value="✓" />
                      <input type="hidden" name="mode" id="mode" value="list" />
                      <input type="hidden" name="search[place_type]" id="search_place_type" />
                      <input type="hidden" value="EUR" name="search[currency]" id="search_currency" />
                      <input type="hidden" value="top_ranking" name="search[sort_by]" id="search_sort_by" />
                      <input type="hidden" value="0" name="search[view_index]" id="search_view_index" />
                      <input type="hidden" value="0" name="search[number_of_bathrooms]" id="search_number_of_bathrooms" />
                      <input type="hidden" value="0" name="search[number_of_bedrooms]" id="search_number_of_bedrooms" />
                      <input type="hidden" value="5" name="search[radius]" id="search_radius" />
                      <input type="hidden" value="" name="search[amenities]" id="search_amenities" />
                      <input type="hidden" name="search[woeid]" id="search_woeid" />
                      <input type="hidden" name="search[bb_sw]" id="search_bb_sw" />
                      <input type="hidden" name="search[bb_ne]" id="search_bb_ne" />
                      <input type="hidden" value="0.0" name="search[lat]" id="search_lat" />
                      <input type="hidden" value="0.0" name="search[lng]" id="search_lng" />
                      <input type="hidden" name="search[is_country]" id="search_is_country" />
                      <input type="hidden" value="" name="search[category]" id="search_category" />
                      <input type="hidden" name="search[geo_search]" id="search_geo_search" />
                      <input type="hidden" name="search[geo_region]" id="search_geo_region" />
                      <input type="hidden" name="search[continuous_update]" id="search_continuous_update" />

                      <input type="hidden" name="search[start_date_alt]" id="search_start_date_alt" />
                      <input type="hidden" name="search[end_date_alt]" id="search_end_date_alt" />


                      <input placeholder="Where do you want to go?" autocomplete="off" tabindex="1" className="search-bar__form__input search-bar__form__input_query rounded border form-control mr-sm-2 ui-autocomplete-input" type="text" value="" name="search[query]" id="search_query" />

                      <div className="b-js search-bar__form__input_date_wrapper form-group datepicker_js_inited" onclick="return {name: 'datepicker', start_alt: 'search_start_date_alt', end_alt: 'search_end_date_alt'}">
                        <input placeholder="From" tabindex="2" className="search-bar__form__input search-bar__form__input_date search-bar__form__input_start-date datepicker_start rounded border form-control mr-sm-2 hasDatepicker" autocomplete="off" readonly="readonly" type="text" name="search[start_date]" id="search_start_date" />
                        <input placeholder="To" tabindex="3" className="search-bar__form__input search-bar__form__input_date search-bar__form__input_end-date datepicker_end rounded border form-control mr-sm-2 hasDatepicker" autocomplete="off" readonly="readonly" type="text" name="search[end_date]" id="search_end_date" />
                      </div>

                      <input type="text" name="search[number_of_beds]" id="search_number_of_beds" value="2" placeholder="Guests" tabindex="4" className="search-bar__form__input search-bar__form__input_guests active rounded border form-control mr-sm-2" />

                      <div className="guests d-none">

                        <div className="guests__adults">
                          <p className="guests__header">Adults</p>
                          <div className="guests__buttons">
                            <a href="#" className="guests__buttons__button guests__buttons__button_minus">-</a>
                            <input id="search_number_of_adults" type="text" name="number_of_adults" className="guests__value guests__value_adults" value="2" />
                            <a href="#" className="guests__buttons__button guests__buttons__button_plus">+</a>
                          </div>
                        </div>
                        <div className="guests__children">
                          <p className="guests__header">Children</p>
                          <div className="guests__buttons">
                            <a href="#" className="guests__buttons__button guests__buttons__button_minus">-</a>
                            <input id="search_number_of_children" type="text" name="search[number_of_children]" className="guests__value guests__value_children" value="0" />
                            <a href="#" className="guests__buttons__button guests__buttons__button_plus">+</a>
                          </div>
                        </div>
                      </div>
                      <input type="submit" name="commit" value="Search" className="search-bar__form__submit btn" id="hometogo_execute_button" data-disable-with="Search" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}