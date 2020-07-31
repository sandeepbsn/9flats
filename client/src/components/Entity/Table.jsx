import React from 'react'
import single from '../Entity/Resources/Images/single.png'
import double from '../Entity/Resources/Images/double.png'
import triple from '../Entity/Resources/Images/triple.png'
import {useLocation, useHistory, useParams} from 'react-router-dom'

export default function Table({rooms, room_status}) {
    const location = useLocation()
    const history = useHistory()
    const params = useParams()

    const query = new URLSearchParams(location.search)
    
    const handleBook = (price, room) =>{
        const s_date = query.get('start_date').split("-").map(Number)
        const d1 = new Date(s_date[0], s_date[1] - 1, s_date[2])

        const e_date = query.get('end_date').split("-").map(Number)
        const d2 = new Date(e_date[0], e_date[1] - 1, e_date[2])

        let days = Math.round((d2.getTime()-d1.getTime())/(1000*60*60*24))

        let payload = `/${params['property_id']}?start_date=${query.get('start_date')}&end_date=${query.get('end_date')}&days=${days}&price=${price}&room_type=${room}`
        history.push(`/payment${payload}`)
    }
    console.log(rooms, room_status)
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
                                <th scope="col" className="text-center ">Book</th>
                            </tr>
                        </thead>
                        <tbody >
                            {rooms ? rooms.map(elem => {
                                return (
                                    <tr>
                                        <td className="d-inline-block text-wrap text-truncate">
                                            <strong>{elem['room_type']}</strong><br></br>
                                            {elem['description']}
                                        </td>
                                        <td className="text-center">
                                            <img src={elem['capacity'] === 1 ? single :
                                            elem['capacity'] === 2 ? double :
                                            elem['capacity'] === 4 ? triple :
                                            "NA"}></img>
                                        </td>
                                        <td className="text-center">
                                            {elem['price']}
                                        </td>
                                        <td className="text-center">
                                            {room_status[elem['room_type']]}
                                        </td>
                                        <td className="text-center">
                                            {room_status[elem['room_type']] !== 'booked'? 
                                            <button className="btn btn-sm btn-success"
                                            onClick = {()=>handleBook(elem['price'], elem['room_type'])}>
                                                Book Now
                                            </button>:
                                            <button className="btn btn-sm btn-success disabled">
                                                Book Now
                                            </button>}
                                        </td>
                                    </tr>
                                )
                            }):<tr><td>Loading...</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
