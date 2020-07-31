import React, { Component } from 'react'
import "./ListingLayout.css"
import { Card, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { listOfItems } from '../../redux/actions/queryActions'
import Pagination from "react-js-pagination"


export class ListingLayout extends Component {
    constructor(props) {
        super(props)
        const url = new URLSearchParams(window.location.search)
        let search_query = url.get('search_query')
        let page = url.get('page')
        let per_page = url.get('per_page')
        let start_date = url.get('checkin')
        let end_date = url.get('checkout')
        let guests = url.get('guests')
        this.state = {
            openDialog: false,
            search_query: search_query,
            page: page,
            total_items: 14,
            per_page: per_page,
            start_date: start_date,
            end_date: end_date,
            guests: guests,
            category: "",
            amenities: "",
            price: "",
            allData: []


        }
    }

    componentDidMount() {

        const url = new URLSearchParams(window.location.search)
        console.log(url.get('search_query'))
        const params = {
            search_query: url.get('search_query'),
            page: url.get('page'),
            per_page: url.get('per_page'),
            start_date: url.get('checkin'),
            end_date: url.get('checkout'),
            guests: url.get('guests')
        }
        const { listOfItems } = this.props
        listOfItems(params) //fetch call
        if (this.props.data) {
            this.setState({
                allData: this.props.data
            })
        }
    }
    showDialog = () => {
        this.setState({
            openDialog: !this.state.openDialog
        })
    }
    handlePageChange = () => {
        // const url = new URLSearchParams(window.location.search)
        this.setState({
            page: this.state.page
        })
    }


    render() {

        const { data } = this.props

        console.log(data)
        console.log(this.state.allData)


        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <button
                className="btn btn-outline-secondary w-100"
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
              &#x25bc;
            </button>
        ));
        return (
            <div className="container-fluid" style={{ marginTop: 70 }}>
                <div className="row ">
                    <div className="breadcrumbs"></div>
                    <div className="searchbox">
                        <div className="search-bar clearfix b-js search-bar_slideshow search_bar_js_inited" >
                            <div className="search-bar__form__w rounded z-depth-1 p-2">
                                <form className="form-inline search-bar__form js-datepicker-form en full-search" id="search_form" target="_top" >
                                    <input type="hidden" name="search[end_date_alt]" id="search_end_date_alt" value="2020-07-25" />
                                    <div>
                                        <Dropdown >
                                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">Filter</Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors">
                                                <Dropdown.Header>Place type</Dropdown.Header>
                                                {["Hotel", "Apartment", "Other", "Hostel", "House", "Bed and breakfast", "Villa"]
                                                    .map(item => (
                                                        <Dropdown.Item eventKey={Date.now()} value={item}>{item}</Dropdown.Item>
                                                    ))}
                                                <Dropdown.Divider />
                                                <Dropdown.Header>Amenities</Dropdown.Header>
                                                {["Internet services", "Air conditioning", "WiFi", "Non-smoking rooms", "Non-smoking throughout", "Free WiFi", "Villa", "Heating", "24-hour front desk", "Lift", "WiFi available in all areas"]
                                                    .map(item => (
                                                        <Dropdown.Item eventKey={Date.now()} value={item}>{item}</Dropdown.Item>
                                                    ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <input
                                        placeholder="Where do you want to go?"
                                        autoComplete="off"
                                        tabIndex="1"
                                        className="listing_search_bar rounded border form-control mr-sm-2 ui-autocomplete-input active"
                                        type="text"
                                        name="searchPlaces"
                                        id="search_query"
                                        value={this.state.search_query}
                                        onChange={this.handleChange} />
                                    <div className="b-js search-bar__form__input_date_wrapper form-group datepicker_js_inited">
                                        <input
                                            placeholder="From"
                                            tabIndex="2"
                                            className="input_start_date rounded border form-control mr-sm-2 hasDatepicker active"
                                            autoComplete="off"
                                            type="text"
                                            name="input_start_date"
                                            id="search_start_date"
                                            submit-date="2020-07-24" />
                                        <input
                                            placeholder="To"
                                            tabIndex="3"
                                            className="input_end_date rounded border form-control mr-sm-2 hasDatepicker active"
                                            autoComplete="off"
                                            type="text"
                                            name="input_end_date"
                                            id="search_end_date"
                                            submit-date="2020-07-25" />
                                    </div>
                                    <input
                                        type="text"
                                        name="search[number_of_beds]"
                                        id="search_number_of_beds"
                                        placeholder="Guests"
                                        tabIndex="4"
                                        className="search-bar__form__input_guests active rounded border form-control mr-sm-2"
                                        onClick={this.showDialog}
                                    />
                                    <div className={`${this.state.openDialog ? 'show' : 'hide'}`} style={{ top: 38, left: 651.219 }}>
                                        <div className="guests__adults">
                                            <p className="guests__header">Adults</p>
                                            <div className="guests__buttons">
                                                <a href="#" className="guests__buttons__button guests__buttons__button_minus">-</a>
                                                <input
                                                    id="search_number_of_adults"
                                                    type="text"
                                                    name="number_of_adults"
                                                    className="guests__value guests__value_adults" />
                                                <a href="#" className="guests__buttons__button guests__buttons__button_plus">+</a>
                                            </div>
                                        </div>
                                        <div className="guests__children">
                                            <p className="guests__header">Children</p>
                                            <div className="guests__buttons">
                                                <a href="#" className="guests__buttons__button guests__buttons__button_minus">-</a>
                                                <input
                                                    id="search_number_of_children"
                                                    type="text"
                                                    name="search[number_of_children]"
                                                    className="guests__value guests__value_children" />
                                                <a href="#" className="guests__buttons__button guests__buttons__button_plus">+</a>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        name="commit"
                                        value="Search"
                                        className="search-bar__form__submit btn"
                                        id="hometogo_execute_button"
                                        data-disable-with="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="row">
                            <div className="col-12 p-2">
                                <Card>
                                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/25-1552992428/panorama.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            <h1 className="search__header__city text-truncate">
                                                <b>India, Asia</b>
                                            </h1>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            {data ? data.map(item => (
                                <div className="col-6 p-2" key={Date.now()}>
                                    <Card >
                                        <Card.Img variant="top" src={item.images[0]} bsPrefix="card-img" />
                                        <span className="label_photo label_instant">Instant Booking</span>

                                        <Card.Body>
                                            <Card.Title>
                                                <h6>
                                                    <span className="category badge">{item.type}</span><h6 className="accommodates ml-2 d-inline">Accommodates 2</h6>
                                                </h6>
                                            </Card.Title>
                                            <Card.Title bsPrefix=""></Card.Title>
                                            <Card.Link href="/entity" ><h5 className="text-primary">{item.name},{item.city}</h5></Card.Link>
                                            <div className="price mt-2">
                                                <Card.Text>
                                                    <span className="price_index price_index_notour">
                                                        <small className="price_index__small price_index__small_first">from </small>
                                                        <strong className="price_index__strong">
                                                            <span className="money"> &#8377;{item.price} </span>
                                                        </strong>
                                                        <small className="price_index__small price_index__small_last"> per night</small>
                                                    </span>
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                            )
                                : (<div><h1>NO DATA FOUND</h1></div>)}
                            <Pagination
                                activePage={this.state.page}
                                itemsCountPerPage={this.state.per_page}
                                totalItemsCount={this.state.total_items}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-none d-sm-block bg-primary"
                        style={{ right: 0, left: "auto", position: "fixed" }}>
                        <div><h1>GOOGLE MAP</h1></div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.queryReducer.data
})
const mapDispatchToProps = dispatch => ({
    listOfItems: payload => dispatch(listOfItems(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingLayout)
