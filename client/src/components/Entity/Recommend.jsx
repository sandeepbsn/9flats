import React from "react"
import { ControlledCarousel, Carousel, Card, CardDeck, Container, CarouselItem } from "react-bootstrap"
import styles from './Entity.module.css'




function Recommendation({recommendations}) {
    let count = 0
    let index = 0
    let master = []
    for(let i = 0; i < recommendations.length; i++){
        let temp = []
        let count = 0
        let dummy = <CarouselItem>
            <CardDeck>
                {temp}
            </CardDeck>
        </CarouselItem>
        while(count <= 2){
            if(index >= recommendations.length){break}
            else{
                temp.push(
                    <Card>
                        <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/11f5e49c-3009-4118-8a60-cf1377d19d16.jpg?aki_policy=large" data-original-uri="https://a0.muscache.com/im/pictures/11f5e49c-3009-4118-8a60-cf1377d19d16.jpg?aki_policy=large" />

                        {/* <img className="_91slf2a" aria-hidden="true" alt="Panoramic Sea View Apartment At Dona Paula" loading="lazy" src="https://a0.muscache.com/im/pictures/11f5e49c-3009-4118-8a60-cf1377d19d16.jpg?aki_policy=large" data-original-uri="https://a0.muscache.com/im/pictures/11f5e49c-3009-4118-8a60-cf1377d19d16.jpg?aki_policy=large" style="object-fit: cover;"> */}

                        <Card.Body>
                            <Card.Text>
                                <span className="text-muted">
                                    <small> {recommendations[index]['type']}, </small>
                                    <small > {recommendations[index]['city']}, </small>

                                    <small > {recommendations[index]['country']} </small>

                                </span>

                                <div >
                                    <h5>{recommendations[index]['name']}</h5></div>
                            </Card.Text>
                            <Card.Title>
                                <span>
                                    <strong>&#8377;  {recommendations[index]['price']}</strong>
                                        /per night
                                        </span></Card.Title>
                        </Card.Body>
                    </Card>
                )
                count++
                index++
            }
            i = index - 1
        }
        master.push(dummy)
    }
    

    return (
        <Container className={`${styles.description} mt-2 mb-5`}>
            <h2>Recommendations</h2>
            <hr></hr>
            
            <Carousel className="p-0">
                {master}
            </Carousel>

        </Container>
    )
}

export default Recommendation