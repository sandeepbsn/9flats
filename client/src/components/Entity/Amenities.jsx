import React from 'react'
import styles from './Entity.module.css'

export default function Amenities({amenities}) {
    console.log(amenities)
    const ame_img = {
        "wifi":"https://assets.dryicons.com/uploads/icon/svg/9007/c2c3a000-e454-4db5-96bd-35103a04b11a.svg",
        "ac":"https://cdn2.iconfinder.com/data/icons/amenities-1-1-1/1024/air_conditioner-512.png",
        "kitchen":"https://cdn2.iconfinder.com/data/icons/amenities-1-1-1/1024/kitchen-512.png",
        "breakfast":"https://cdn2.iconfinder.com/data/icons/hotel-facility-amenity/1024/ic_separate_dinning_area-512.png",
        "pool":"https://cdn1.iconfinder.com/data/icons/hotel-and-camping-50-linear-icons/29/hotel_and_camping_swimming_pool_dark_icon-512.png",
        "heater":"https://image.flaticon.com/icons/svg/889/889940.svg",
        "frontdesk":"https://image.flaticon.com/icons/svg/904/904507.svg"

    }
    const all_amenities = ['wifi', "ac", "kitchen", "breakfast", "pool", "heater", "frontdesk"]
    return (
        <div>
            <div className={`${styles.description} container`}>
                <div className="mb-3 p-0" style={{ maxWidth: 1220}}>
                    <div>
                        <h2>Amenities</h2>
                        <hr></hr>
                    </div>
                    <div className={styles.amenities}>
                        {amenities ? all_amenities.map(elem =>{
                            return(
                                amenities.indexOf(elem) !== -1 ? <div> <img src={ame_img[elem]} alt="l" height="15px" width="20px"/>  {elem} &#x2713;</div>: <div> <img src={ame_img[elem]} alt="l" height="15px" width="20px"/> {elem} &#x2717;</div>
                            )
                        }):<div>Loading...</div>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
