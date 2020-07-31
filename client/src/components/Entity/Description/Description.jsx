import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMoreDesc: false
        }
    }
    handleMore = () => {
        this.setState({
            showMoreDesc: !this.state.showMoreDesc
        })
    }
    render() {
        let { showMoreDesc } = this.state
        return (
            <div>
                <div className="container mb-3">
                    <div className="d-flex flex-row p-4 border rounded bg-light text-justify">
                        <div className="col-md-7 col-12">
                            <p>
                                <em>
                                    The COVID19 pandemic has made us all understand the importance of sanitization and not take it for granted.
                                    Rest assured, our properties are following a number of hygiene measures like disinfecting surfaces with high-quality disinfectants,
                                    following social distance, minimizing physical contact in interactions, using protective gear like masks, gloves, etc. and more.
                            </em><br />
                                <strong>Location</strong>
                                <br />
                                OYO 9522 is a stunning villa located on CalanguteBaga Road near Baga Beach in Goa. Some attractions that can be found near the hotel include Tito Henry De Souza Statue,
                                Calangute Beach, Blue Whale Water Park, Holy Trinity Church, Mare de Deus Church, Snow Park, and St. Alex’s Church.
                            <br />
                                <div onClick={this.handleMore}><b className="text-danger font-italic">{showMoreDesc ? "" : "Show More"}</b></div>
                                {showMoreDesc ? (<div><strong>Special Features</strong><br />The elegant villa features a swimming pool and play area in the front. An outdoor seating area and a small garden are also available for guests to relax and enjoy the greenery.
                                    <br /><strong>Amenities</strong><br />The rooms of the hotel are simply furnished and include an AC, TV, and geyser. Free WiFi, dining area, and power backup are other essential services provided by the hotel.
                                    <br /><strong>What's Nearby</strong><br />Many eateries like Patio 23, Britto’s, Habanero, Fat Fish, Royal Relish, and Shining Star Beach Shack are located in the vicinity. The Tibetian Market on Baga Road is 1minute drive away from the hotel.
                                </div>) : ""}
                                <div onClick={this.handleMore}><b className="text-danger font-italic">{showMoreDesc ? "Show Less" : ""}</b></div>
                            </p>
                        </div>
                        <div className="col-md-5 col-12  d-flex flex-column justify-content-center rounded shadow-sm ">
                            <div className="p-4 d-flex-column border border-success rounded">
                                <div className="d-flex-row">
                                    <input type="date" />
                                    <input type="date" />
                                </div>
                                <div className="mt-4 text-center">
                                    <Link to='/checkoutForm' className="btn btn-block btn-success">BOOK</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}