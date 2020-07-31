import React from 'react'
import {Carousel} from 'react-bootstrap'
import styles from '../Entity.module.css'
import StarRatings from 'react-star-ratings';

export default function ImageEntity({basicDetails}) {
    let images 
    if(basicDetails){
        images = Object.values(basicDetails['images'])
    }
    if(images && images.length){
        return (
            <div className="mb-4">
                <div className="container">
                    <div className=" d-flex flex-row mb-2 py-2 px-0">
                        <div className="col-9 p-0">
                            <h3 className="m-0"><b>{basicDetails ? basicDetails['name']+", "+[basicDetails['city'],basicDetails['country']].join(",") : "Loading"}</b></h3>
                            <span className="m-0">
                            <StarRatings
                            rating={basicDetails && basicDetails['review']!== "NA" ? Number(basicDetails['review']): 0}
                            starDimension="25px"
                            starSpacing="10px"                            
                            /><small><strong> - {basicDetails['review']}, {basicDetails['rooms']} rooms</strong></small>
                            </span>
                        </div>    
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className={`${styles.imageslider} col-6 border p-2`}>
                                <img src={images[0]} alt="hotel rooms" width="100%" height="100%"></img>
                            </div>
                            <div className={`${styles.imageslider} col-6 border`}>
                                <div className="row">
                                    <div className="col-6 pt-2 px-1">
                                        <img src="https://wisont.files.wordpress.com/2012/12/dasada-room-junior-suite-01.jpg" alt="hotel rooms" height="160px" width="100%"></img>
                                    </div>
                                    <div className="col-6 pt-2 px-1">
                                        <img src={images[2]} alt="hotel rooms" height="160px" width="100%" ></img>
                                    </div>
                                    <div className="col-6 pt-2 px-1">
                                        <img src={images[3]} alt="hotel rooms" height="160px" width="100%"></img>
                                    </div>
                                    <div className="col-6 pt-2 px-1">
                                        <img src="https://wisont.files.wordpress.com/2012/12/dasada-room-junior-suite-04.jpg" alt="hotel rooms" height="160px" width="100%"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    else{
        return (
            <div>Loading...</div>
        )
    }
    
}
