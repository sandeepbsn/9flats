import React, { Component } from 'react'

export default class Reviews extends Component {
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
                <div className="container">
                    <div className=" mb-3 p-4 border rounded bg-light"  style={{ maxWidth: 1220}}>
                        <h5>Ratings and Reviews</h5>
                        <div className="row text-center">
                            <div className="col-md-6 col-12 d-flex flex-column rounded ">
                                <div className="d-flex flex-row p-3">
                                    <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                    <div className="d-flex flex-column">
                                        <p>Ankit<br />
                                            <span className="text-muted">18 MAR 2020</span></p>
                                    </div>

                                    <div className="text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                        5 &#9733;
                                    </div>

                                </div>
                                <div className="font-italic pb-2 ">
                                    <small>
                                        front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                </small>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 d-flex flex-column ">
                                <div className="d-flex flex-row p-3">
                                    <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                    <div className="d-flex flex-column">
                                        <p>Ankit<br />
                                            <span className="text-muted">18 MAR 2020</span></p>
                                    </div>

                                    <div className=" text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                        4.5 &#9733;
                                    </div>

                                </div>
                                <div className="font-italic pb-2">
                                    <small>
                                        front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                </small>
                                </div>
                            </div>


                            <div onClick={this.handleMore} ><b className="text-danger font-italic">{showMoreDesc ? "" : "Show More"}</b></div>
                            {showMoreDesc ?
                                (<><div className="col-md-6 col-12 d-flex flex-column rounded ">
                                    <div className="d-flex flex-row p-3">
                                        <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                        <div className="d-flex flex-column">
                                            <p>Ankit<br />
                                                <span className="text-muted">18 MAR 2020</span></p>
                                        </div>

                                        <div className="text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                            5 &#9733;
                                    </div>

                                    </div>
                                    <div className="font-italic pb-2 ">
                                        <small>
                                            front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                </small>
                                    </div>
                                </div>
                                    <div className="col-md-6 col-12 d-flex flex-column ">
                                        <div className="d-flex flex-row p-3">
                                            <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                            <div className="d-flex flex-column">
                                                <p>Ankit<br />
                                                    <span className="text-muted">18 MAR 2020</span></p>
                                            </div>

                                            <div className=" text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                                4.5 &#9733;
                                    </div>

                                        </div>
                                        <div className="font-italic pb-2">
                                            <small>
                                                front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                        </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 d-flex flex-column rounded ">
                                        <div className="d-flex flex-row p-3">
                                            <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                            <div className="d-flex flex-column">
                                                <p>Ankit<br />
                                                    <span className="text-muted">18 MAR 2020</span></p>
                                            </div>

                                            <div className="text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                                5 &#9733;
                                        </div>

                                        </div>
                                        <div className="font-italic pb-2 ">
                                            <small>
                                                front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                        </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 d-flex flex-column ">
                                        <div className="d-flex flex-row p-3">
                                            <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                            <div className="d-flex flex-column">
                                                <p>Ankit<br />
                                                    <span className="text-muted">18 MAR 2020</span></p>
                                            </div>

                                            <div className=" text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                                4.5 &#9733;
                                        </div>

                                        </div>
                                        <div className="font-italic pb-2">
                                            <small>
                                                front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                        </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 d-flex flex-column rounded ">
                                        <div className="d-flex flex-row p-3">
                                            <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                            <div className="d-flex flex-column">
                                                <p>Ankit<br />
                                                    <span className="text-muted">18 MAR 2020</span></p>
                                            </div>

                                            <div className="text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                                5 &#9733;
                                        </div>

                                        </div>
                                        <div className="font-italic pb-2 ">
                                            <small>
                                                front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                        </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 d-flex flex-column ">
                                        <div className="d-flex flex-row p-3">
                                            <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                            <div className="d-flex flex-column">
                                                <p>Ankit<br />
                                                    <span className="text-muted">18 MAR 2020</span></p>
                                            </div>

                                            <div className=" text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                                4.5 &#9733;
                                        </div>

                                        </div>
                                        <div className="font-italic pb-2">
                                            <small>
                                                front desk people are really very good. if you ask for any help they ll help you anytime. breakfast can be improved. other than that location, ambience is awesome. they too have swimming pool which one can enjoy from 9a. m to 7p. m. great stay.
                                        </small>
                                        </div>
                                    </div></>
                                ) : ""}
                            <div onClick={this.handleMore}><b className="text-danger font-italic">{showMoreDesc ? "Show Less" : ""}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}