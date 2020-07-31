import React from "react"
import { Form, Col } from "react-bootstrap"

function PropertyCheckout() {
    return (
        <div>
            <div className="container mt-5" >
                <div className="row mb-5" style={{ marginTop: 80 }} >
                    <div className=" order-md-1 order-2 col-12 col-md-6 p-3">
                        <h3 style={{ color: "rgb(22, 139, 160)" }}><b>Enter Your Details</b></h3>
                        <Form className="mt-4">
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="Email " />
                                </Form.Group>
                                <Form.Group  as={Col} controlId="formGridContactNo">
                                    <Form.Label>Contact No.</Form.Label>
                                    <Form.Control type="number" placeholder="Contact No." />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>



                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <div className="text-center">
                                <button className="btn btn-success btn-block">Confirm Booking</button>
                            </div>
                        </Form>
                    </div>
                    <div className=" order-md-2 order-1 col-12 col-md-6 d-flex justify-content-center align-items-center" >
                        <div className="border rounded shadow p-3" style={{ width: 350 }}>
                            <div className="d-flex flex-row justify-cotent-center align-items-center mt-3" >
                                <div className="col-8">
                                    <h6><b>The Trident</b></h6>
                                    <p>Private room in farm stay in Bangalore</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://q-xx.bstatic.com/xdata/images/hotel/max500/16186396.jpg?k=ee4495ac70ef5c8665f457cbd509bd0a606be9f8ce41eef4eb2befd278ab0379&amp;o=" alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-row my-4">
                                <div className="col-12">
                                    <div className="mb-2">
                                        <span><img src="https://img.icons8.com/ios/30/000000/guest-male.png" alt="" /> 1 guest</span>
                                    </div>
                                    <div>
                                        <span><img src="https://img.icons8.com/ios/30/000000/planner.png" alt="" />  Jul 31, 2020 &#8594; Aug 1, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-cotent-center align-items-center">
                                <table className="table table-borderless ">
                                    <tbody>
                                        <tr>
                                            <td >₹1,200.00 x 1 night</td>
                                            <td className="text-right">₹1,200.00</td>
                                        </tr>
                                        <tr>
                                            <td >Service fee</td>
                                            <td className="text-right">₹169.41</td>
                                        </tr>
                                        <tr>
                                            <td >Occupancy taxes and fees</td>
                                            <td className="text-right">₹144.00</td>
                                        </tr>

                                        <tr className="border-top">
                                            <th scope="row">Total(INR)</th>
                                            <td className="text-right"><b>₹1,513.41</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyCheckout

