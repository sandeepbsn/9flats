import React from "react"


import { Form, Col, Button ,Row} from "react-bootstrap"




function PaymentDetail() {
    return (
        <div>
            <div className="container mt-5">
                <div className="p-3 rounded tab-box">
                    <div className="outer-box">
                        <div className="outer-box">
                            <div className="inner-box row">
                                <div className="col-sm-6">
                                    <h1>Fill the details</h1>
                                    <Form  border="success">
                                        <Form.Row>
                                            <Form.Group as={Col}  border="success" controlId="formGridFname">
                                                <Form.Label>First Name*</Form.Label>
                                                <Form.Control placeholder="First name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridLname">
                                                <Form.Label>Last Name*</Form.Label>
                                                <Form.Control placeholder="Last name" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridEmail">
                                            <Form.Label>Email*</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formGridMobile">
                                            <Form.Label>Mobile*</Form.Label>
                                            <Form.Control placeholder="Mobile Number" />
                                        </Form.Group>

                                        <Form.Group controlId="formGridAddress">

                                            <Form.Label>Address*</Form.Label>
                                           <Form.Control as="textarea" rows="4" />
                                        </Form.Group>

                                        {/* <Form.Group controlId="formGridCardNo">
                                            <Form.Label>Card Holder Name</Form.Label>
                                            <Form.Control placeholder="Name on Card" />
                                        </Form.Group> */}
                                        
                                            {/* <div>
                                                <Row>
                                            <Col lg={6}>
                                                <Form.Group controlId="formGridCardNo">
                                                    <Form.Label>Expiry Date</Form.Label>
                                                    <Form.Control placeholder="Expiration Date" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group controlId="formGridCardNo">
                                                    <Form.Label>CVV</Form.Label>
                                                    <Form.Control placeholder="CVV" />
                                                </Form.Group>
                                            </Col>
                                            </Row>
                                            </div> */}  

                                        <Button variant="success" type="submit">
                                            Submit
                                          </Button> 
                                    </Form>
                                </div>
                                {/* <div className="col-sm-6">
                                 
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                    <div className="small">The Field marked with * is required</div>
                </div>
            </div>
        </div>

    )
}

export default PaymentDetail