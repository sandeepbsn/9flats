import React, { Component } from 'react';
import './CarousalEntity.css'
import { Carousel } from 'react-responsive-carousel'
// import imag from './assets/shoes.jpg'
import imag from '../ImageEntity/assets/1.jpg'

export default class CarouselEntity extends Component {
    
    render() {
        return (
            <>
                <Carousel autoPlay infiniteLoop={true}>
                    {[1, 2, 3, 4, 5, 6].map(item => {
                        return (
                        <div key={item}>
                            <img src={require(`../ImageEntity/assets/${item}.jpg`)} />
                            <p className="legend">Legend {item}</p>
                        </div>
                        )
                    })}
                </Carousel>
            </>
        );
    }
};



