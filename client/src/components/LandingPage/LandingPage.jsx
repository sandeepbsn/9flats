import React, { Component } from "react";
import './LandingPage.css'
import TopCities from './TopCitiies'
import { listOfItems } from '../../redux/actions/queryActions'
import { connect } from 'react-redux'
import PopularPlaces from "./PopularPlaces";

class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      search_query: "",
      start_date:"2014/02/08",
      end_date:"2014/02/10",
      guests:"",
      page:"",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.search_query) {
      window.location.assign(`/listing/display?search_query=${this.state.search_query}&page=${this.state.page}&per_page=${20}&checkin=${this.state.start_date}&checkout=${this.state.end_date}&guests=${this.state.guests}`);
      console.log(this.props)
    }
    console.log(this.state)
  }
  render() {
    let {search_query,start_date,end_date,guests, page_no} = this.state

    return (
      <>
        <div className="container-fluid" >
          <div className="row landingImage ">
            <div className=" container-fluid over" style={{height:450}}>
              <div className="row text-center my-5" >
                <h3 className="col-12 text-white " style ={{marginTop:50}}>
                  <b>Feel like Home away from Home</b>
                </h3>
                <h5 className="col-12 text-white">
                  <b>The alternative to hotel with 6 million homes worldwide</b>
                </h5>
              </div>
              <div className="container searchPanel mb-5" >
                <div className="row m-5  justify-content-center">
                  <div className="bg-primary rounded p-2 ">
                    <form onSubmit={this.handleSubmit} className="d-flex justify-content-center">
                      <input
                        placeholder="Where do you want to go?"
                        tabIndex="1" autoComplete="off"
                        className="wheretogo mr-sm-2"
                        type="text" value={this.state.search_query}
                        name="search_query" id="search_query"
                        onChange={this.handleChange} />
                         
                      <div className="datePicker" >
                        <input
                          placeholder="From"
                          tabIndex="2"
                          className="fromDate mr-sm-2 hasDatepicker"
                          autoComplete="off"
                          type="text"
                          name="start_date"
                          value = {this.state.start_date}
                          onChange={this.handleChange}
                          id="start_date" />
                        <input
                          placeholder="To"
                          tabIndex="3"
                          className="toDate mr-sm-2 hasDatepicker"
                          autoComplete="off"
                          type="text"
                          name="end_date"
                          value = {this.state.end_date}
                          onChange={this.handleChange}
                          id="end_date" />
                      </div>
                      <input
                        type="text"
                        name="guests"
                        id="search_number_of_beds"
                        placeholder="Guests"
                        tabIndex="4"
                        value={this.state.guests}
                        onChange={this.handleChange}
                        className="beds mr-sm-2" />
                          <button
                            type="submit"
                            name="commit"
                            className="searchSubmit"
                            id="fullSearch">Search
                          </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TopCities/>
          <PopularPlaces/>
        </div>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  listOfItems: payload => dispatch(listOfItems(payload))
})

export default connect(null, mapDispatchToProps)(LandingPage)