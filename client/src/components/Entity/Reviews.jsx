import React, { Component } from 'react'

export default function Reviews({reviews}){
    console.log(reviews)
    return (
        <div>
            <div className="container">
                <div className=" mb-3 p-4 border rounded bg-light"  style={{ maxWidth: 1220}}>
                    <h5>Ratings and Reviews</h5>
                    <div className="row text-center">
                        {reviews ? reviews.map(elem => {
                            
                            return (
                                <div className="col-md-6 col-12 d-flex flex-column rounded ">
                                    <div className="d-flex flex-row p-3">
                                        <div><img src="https://img.icons8.com/fluent/48/000000/name.png" alt="" /></div>
                                        <div className="d-flex flex-column">
                                            <p>Unknown<br />
                                                <small className="text-muted">{elem['reviewed_at']}</small></p>
                                        </div>

                                        <div className="text-center rounded text-white ml-auto" style={{ height: 25, width: 50, backgroundColor: "green" }}>
                                            {elem['star_rating']} &#9733;
                                        </div>

                                    </div>
                                    <div className="font-italic pb-2 ">
                                        <small>
                                            {elem['review']}
                                    </small>
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