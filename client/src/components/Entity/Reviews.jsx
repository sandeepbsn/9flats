import React, { Component } from 'react'
import styles from './Entity.module.css'
import StarRatings from 'react-star-ratings';

export default function Reviews({reviews}){
    console.log(reviews)
    return (
        <div className="mt-2">
            <div className={`${styles.description} container`}>
                <div className="p-0">
                    <h2>Ratings & Reviews</h2>
                    <hr></hr>
                    <div className="row text-center">
                        {reviews ? reviews.map(elem => {
                            
                            return (
                                <div className="col-md-6 col-12 d-flex flex-column rounded ">
                                    <div className="d-flex flex-row">
                                        <div><img src="https://icon-library.net/images/user-accounts-icon/user-accounts-icon-15.jpg" alt="user" width="25px" height="25px"/></div>
                                        <div className="d-flex text-left ml-1 flex-column">
                                            <p>Unknown<br/>
                                                <small className="text-muted">{elem['reviewed_at']}</small></p>
                                        </div>

                                        <div  className="ml-auto" style={{ height: 25, width: 100 }}>
                                        <StarRatings
                                            rating={elem['star_rating']}
                                            starDimension="15px"
                                            starSpacing="2px"                            
                                            />
                                        </div>

                                    </div>
                                    <div className="mb-3 ml-5 text-left">
                                        <small>{elem['review']}</small>
                                    </div>
                                </div>
                            )
                        }):<div>Loading...</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}