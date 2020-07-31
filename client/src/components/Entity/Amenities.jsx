import React from 'react'

export default function Amenities() {
    return (
        <div>
            <div className="container">
                <div className="mb-3 p-4 border rounded bg-light" style={{ maxWidth: 1220}}>
                    <div><h5><b>Amenities</b></h5></div>
                    <ul className="row ">
                        <div className="col-md-4 col-6">
                            <li><h6>Wifi</h6></li>
                            <li><h6>Kitchen</h6></li>
                            <li><h6>Heating</h6></li>
                            <li><h6>Hair dryer</h6></li>
                        </div>
                        <div className="col-md-4 col-6">
                            <li><h6>Iron</h6></li>
                            <li><h6>Cable TV</h6></li>
                            <li><h6>Laptop-friendly workspace</h6></li>
                        </div>
                        <div className="col-md-4">
                            <li><h6>Hangers</h6></li>
                            <li><h6>Carbon monoxide alarmCarbon monoxide alarm</h6></li>
                            <li><h6>Smoke alarmSmoke alarm</h6></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
