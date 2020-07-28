import React from "react"
import "./PopularAcc.css"
import { Card, Badge, Row, Col, Container, Button } from "react-bootstrap"




function PopularAcc() {
    return (
        <Container>
            <Card className="Container row card-hotel">
                <Row>
                {/* <Badge variant="primary" className="p-2 ">INSTANT BOOKING</Badge> */}
                    <Col xs={12} sm={12} md={4}>
                    <Badge variant="primary" className="p-2 instant-booking">INSTANT BOOKING</Badge>
                        <div >
                        
                            <Card.Img
                                //    <Badge variant="primary" className="mt-{2}">Hotel</Badge>
                                // className="badge badge-primary"
                                src="https://q-xx.bstatic.com/xdata/images/hotel/max500/16186396.jpg?k=ee4495ac70ef5c8665f457cbd509bd0a606be9f8ce41eef4eb2befd278ab0379&amp;o=" alt="Card image" />
                            {/* <span> <Badge variant="primary" className="mt-{2}">Hotel</Badge></span> */}
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                        <Card.Body className="Col-lg-8">
                            <h6 className="card-text mt-3 mt-sm-0">

                                <Badge variant="primary">Hotel</Badge>
                                <div className="accomodates ml-2 d-inline">Accomodates 4</div>
                            </h6>

                            <Card.Title text-color="">
                                <h5>Hotel Elba am Kurfürstendamm - Design Chambers</h5>
                            </Card.Title>
                            <Card.Text>
                                This Berlin hotel lies next to the Kurfürstendamm Shopping Street and is just a 5-minute walk from  Savignyplatz Train Station. Its rooms include hot drinks facilities and free Wi-Fi.
               </Card.Text>
                          
                            <div className="price mt-2" >
                            <span>
                                    <small >From</small>
                                    <strong>$73</strong>
                                    <small >per night</small>

                                </span>

                            </div>
                             <div className="mt-4 mb-4 float-xs-right float-sm-right float-lg-right  ">
                            <Button variant="success" className="mt-4 mb-4 d-flex justify-content-end">Book Now</Button>
                            </div>
                            {/* <a href="/">  <Button variant="success" className="mt-4 mb-4 ml-4">Book Now Plz</Button> </a> */}
                            {/* <Button variant="success" className="mt-4 mb-4 d-flex justify-content-end">Book Now</Button> */}
                        </Card.Body>

                    </Col>
                </Row>
            
             

            </Card>
        </Container>

    )
}
export default PopularAcc


