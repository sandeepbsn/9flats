import React, { Component } from 'react'
import ImageEntity from '../ImageEntity/ImageEntity'
import Description from '../Description/Description'
import Amenities from '../Amenities'
import Table from '../Table'
import Reviews from '../Reviews'
import Recommendation from '../Recommend'
import CarousalEntity from '../ImageEntity/CarousalEntity'
export class Entity extends Component {
    render() {
        return (
            <div>
                <div>
                    <CarousalEntity/>
                    <Description/>
                    <Amenities/>
                    <Table/>
                    <Reviews/>
                    <Recommendation/>
                </div>
            </div>
        )
    }
}

export default Entity
