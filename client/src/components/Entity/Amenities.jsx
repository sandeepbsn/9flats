import React from 'react'
import styles from './Entity.module.css'

export default function Amenities({amenities}) {
    console.log(amenities)
    const all_amenities = ['wifi', "ac", "kitchen", "breakfast", "pool", "heater", "frontdesk"]
    return (
        <div>
            <div className="container">
                <div className="mb-3 p-4 border rounded bg-light" style={{ maxWidth: 1220}}>
                    <div>
                        <h5><b>Amenities</b></h5>
                    </div>
                    <div className={styles.amenities}>
                        {amenities ? all_amenities.map(elem =>{
                            return(
                                amenities.indexOf(elem) !== -1 ? <div>&#x2713; {elem}</div>: <div>&#x2717; {elem}</div>
                            )
                        }):<div>Loading...</div>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
