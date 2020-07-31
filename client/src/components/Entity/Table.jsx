import React from 'react'
import single from '../Entity/Resources/Images/single.png'
import double from '../Entity/Resources/Images/double.png'
import triple from '../Entity/Resources/Images/triple.png'
import bed2 from '../Entity/Resources/Images/bed2.png'
import king from '../Entity/Resources/Images/king.png'

export default function Table() {
    return (
        <div>
            <div className="container">
                <div className="mb-3 p-4 border rounded bg-light" style={{ maxWidth: 1220 }}>
                    <table className="table">
                        <thead className="thead" style={{backgroundColor:"rgb(4, 177, 177)", color:"white", position:"sticky", top:0, }}>
                            <tr>
                                <th scope="col" className="text-center" style={{ width: "30%" }}>Types of Rooms</th>
                                <th scope="col" className="text-center ">Sleeps</th>
                                <th scope="col" className="text-center ">Price</th>
                                <th scope="col" className="text-center ">Availability</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <th rowspan="3" scope="row" >
                                    <h6 className="text-primary">Delux King Room</h6>
                                    <small>1 king bed  <img  src={king} /></small>
                                    <div>
                                        <small className="text-success ">
                                            <div className="d-flex text-justify">
                                            &#x2713;23 m² &#x2713;Air conditioning &#x2713;Attached bathroom &#x2713;Flat-screen &#x2713;TV &#x2713;Free WiFi
                                            </div>
                                            <hr />
                                            <div  className="d-flex text-justify">
                                                &#x2713;Free &#x2713;toiletries &#x2713;Shower &#x2713;Safe Toilet &#x2713;Towels &#x2713;Linens &#x2713;Socket near the bed &#x2713;Desk &#x2713;Slippers &#x2713;Telephone &#x2713;Ironing-facilities Satellite-channels &#x2713;Tea/Coffee-maker &#x2713;Iron &#x2713;Hairdryer &#x2713;Extra-long beds-(>6.5ft) &#x2713;Electric-kettle &#x2713;Wake-up-service &#x2713;Wardrobe-or-closet  &#x2713;Clothes-rack  &#x2713;Toilet-paper &#x2713;Child safety socket covers &#x2713;Entire unit wheelchair accessible
                                            </div>
                                        </small>
                                    </div>
                                </th>
                                <th className="text-center ">
                                    <img src={single} height="20px" width="20px"/>
                                </th>
                                <td className="text-center ">Otto</td>
                                <td className="text-center ">@mdo</td>
                            </tr>
                            <tr className="text-center ">
                                <th scope="row">
                                    <img src={double} height="20px" width="20px"/>
                                </th>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr className="text-center ">
                                <th scope="row">
                                    <img src={triple} height="20px" width="20px"/>
                                </th>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr >
                                <th rowspan="3" scope="row" >
                                    <h6 className="text-primary">Delux Twin Room</h6>
                                    <small>2 twin beds  <img src={bed2} /></small>
                                    <div>
                                        <small className="text-success ">
                                            <div className="d-flex text-justify">
                                            &#x2713;23 m² &#x2713;Air conditioning &#x2713;Attached bathroom &#x2713;Flat-screen &#x2713;TV &#x2713;Free WiFi
                                            </div>
                                            <hr />
                                            <div  className="d-flex text-justify">
                                                &#x2713;Free &#x2713;toiletries &#x2713;Shower &#x2713;Safe Toilet &#x2713;Towels &#x2713;Linens &#x2713;Socket near the bed &#x2713;Desk &#x2713;Slippers &#x2713;Telephone &#x2713;Ironing-facilities Satellite-channels &#x2713;Tea/Coffee-maker &#x2713;Iron &#x2713;Hairdryer &#x2713;Extra-long beds-(>6.5ft) &#x2713;Electric-kettle &#x2713;Wake-up-service &#x2713;Wardrobe-or-closet  &#x2713;Clothes-rack  &#x2713;Toilet-paper &#x2713;Child safety socket covers &#x2713;Entire unit wheelchair accessible
                                            </div>
                                        </small>
                                    </div>
                                </th>
                                <th className="text-center ">
                                    <img src={single} height="20px" width="20px"/>
                                </th>
                                <td className="text-center ">Otto</td>
                                <td className="text-center ">@mdo</td>
                            </tr>
                            <tr className="text-center ">
                                <th scope="row">
                                    <img src={double} height="20px" width="20px"/>
                                </th>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr className="text-center ">
                                <th scope="row">
                                    <img src={triple} height="20px" width="20px"/>
                                </th>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr >
                                <th rowspan="3" scope="row" >
                                    <h6 className="text-primary">Executive King Room</h6>
                                    <small>1 king bed  <img src={king} /></small>
                                    <div>
                                        <small className="text-success ">
                                            <div className="d-flex text-justify">
                                            &#x2713;23 m² &#x2713;Air conditioning &#x2713;Attached bathroom &#x2713;Flat-screen &#x2713;TV &#x2713;Free WiFi
                                            </div>
                                            <hr />
                                            <div  className="d-flex text-justify">
                                                &#x2713;Free &#x2713;toiletries &#x2713;Shower &#x2713;Safe Toilet &#x2713;Towels &#x2713;Linens &#x2713;Socket near the bed &#x2713;Desk &#x2713;Slippers &#x2713;Telephone &#x2713;Ironing-facilities Satellite-channels &#x2713;Tea/Coffee-maker &#x2713;Iron &#x2713;Hairdryer &#x2713;Extra-long beds-(>6.5ft) &#x2713;Electric-kettle &#x2713;Wake-up-service &#x2713;Wardrobe-or-closet  &#x2713;Clothes-rack  &#x2713;Toilet-paper &#x2713;Child safety socket covers &#x2713;Entire unit wheelchair accessible
                                            </div>
                                        </small>
                                    </div>
                                </th>
                                <th className="text-center ">
                                    <img src={single} height="20px" width="20px"/>
                                </th>
                                <td className="text-center ">Otto</td>
                                <td className="text-center ">@mdo</td>
                            </tr>
                            <tr className="text-center ">
                                <th scope="row">
                                    <img src={double} height="20px" width="20px"/>
                                </th>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr className="text-center ">
                                <th scope="row">
                                    <img src={triple} height="20px" width="20px"/>
                                </th>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
