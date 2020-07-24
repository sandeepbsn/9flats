import React from "react"
// /import {Card} from "react-bootstrap/Card"

import { Card, CardDeck } from 'react-bootstrap/'
// import 'holderjs' { img: "holder.js/100px270", textHeader: "Well handled customers", link: "Our reviews on Reviews.co.uk", }


function TopCities() {
    return (
        <div className="container top-cities mb-5 mt-3" >
            <h2 className="mb-3">Our Top Cities</h2>

            <CardDeck>
                <Card className="rounded-border">
                    <Card.Img variant="top"
                        src="https://images.9flats.com/geo_locator_photos/photos/15-1552991527/small.jpg"
                    />
                    <Card.Body className="">
                        <Card.Title className="text-primary">Berlin</Card.Title>
                        {/* <Card.Link href="#">Berlin</Card.Link> */}
                    </Card.Body>
                    {/* <Card.Link href="#">Berlin</Card.Link> */}
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/19-1552991863/small.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="text-primary">Amsterdam</Card.Title>
                    </Card.Body>
                </Card>
                <Card>

                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/12-1552991296/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">London</Card.Title>

                    </Card.Body>
                </Card>

                <Card>
                          

                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/23-1552992205/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">Brussels</Card.Title>

                    </Card.Body>
                </Card>
            </CardDeck>



            <CardDeck className="mt-3">
                <Card>
                    
                    <Card.Img variant="top"
                        src="https://images.9flats.com/geo_locator_photos/photos/7-1552992258/small.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="text-primary h4 px-2">
                            <a href="/berlin">Dubai</a>
                            </Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/20-1552991880/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">Barcelona</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/17-1552991676/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">Munich</Card.Title>

                    </Card.Body>
                </Card>

                <Card>
                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/14-1552991516/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">Paris</Card.Title>

                    </Card.Body>
                </Card>
            </CardDeck>

            <CardDeck className="mt-3">
                <Card>
                    <Card.Img variant="top"
                        src="https://images.9flats.com/geo_locator_photos/photos/21-1552991908/small.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="text-primary">Madrid</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/25-1552992428/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">New York City</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/13-1552991353/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">Vienna</Card.Title>

                    </Card.Body>

                </Card>

                <Card>
                    
                    <Card.Img variant="top" src="https://images.9flats.com/geo_locator_photos/photos/56-1552992409/small.jpg" />
                    <Card.Body>
                        <Card.Title className="text-primary">Miami</Card.Title>

                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}
export default TopCities