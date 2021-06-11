import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useLocation, useHistory, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getRoomStatusBackend} from '../../../redux/actions/entityActions'
import styles from '../Entity.module.css'

export default function Description({basicDetails, blockedDates}){
    const location = useLocation()
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()

    const query = new URLSearchParams(location.search)

    let s = query.get('start_date').split("-").map(Number)
    let e = query.get('end_date').split("-").map(Number)
    blockedDates = blockedDates ? Object.values(blockedDates) : []
    for(let i = 0; i < blockedDates.length; i++){
        let temp = blockedDates[i].split("-").reverse().map(Number)
        blockedDates[i] = new Date(temp[0], temp[1] - 1, temp[2])
    }

    const [startDate, setStartDate] = useState(new Date(s[0], s[1] - 1, s[2]));

    const [endDate, setEndDate] = useState(new Date(e[0], e[1] - 1, e[2]));

    const [changed, setChanged] = useState(false)

    useEffect(()=>{
        console.log(startDate, endDate)
        if(changed){
            let end_update = new Date(Number(startDate))
            end_update.setDate(startDate.getDate()+1)
            setEndDate(end_update)
        }
    },[startDate])

    const handleStartDate = (date) => {
        setStartDate(date)
        setChanged(true)
    }
    const addDays = (days) => {
        var result = new Date();
        result.setDate(result.getDate() + days);
        console.log("*********",result)
        return result;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let start = startDate.toLocaleDateString().split("/").reverse().join("-")
        let end = endDate.toLocaleDateString().split("/").reverse().join("-")
        let payload = `/${params['property_id']}?search_query=${query.get('search_query')}&start_date=${start}&end_date=${end}`
        dispatch(getRoomStatusBackend(payload))
        history.push(`/entity${payload}`)
    }  

    return (
        <div>
            <div className={`${styles.description} container mb-3 p-0`}>
                <div className="d-flex flex-row text-justify">
                    <div className="col-md-7 col-12">
                        <p>
                            <h2>Description</h2>
                            <hr></hr>
                            {basicDetails ? basicDetails['description'] : "Loading..."}
                        </p>
                    </div>
                    <div className="col-md-5 col-12  d-flex flex-column justify-content-center border rounded shadow-sm ">
                        <div className="d-flex-column align-items-center text-center">
                            <div className="p-1">
                                Check - in
                            </div>
                            <div className="text-center p-1">
                                <DatePicker
                                    className={`${styles.datecomponent} ${styles.fromDate} mx-2`}
                                    selected={startDate}
                                    onChange={date => handleStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    excludeDates={blockedDates}
                                    endDate={endDate}
                                    minDate={new Date()}
                                    placeholderText="From"
                                />
                            </div>
                            <div className="p-1">
                                Check - out
                            </div>
                            <div className="p-1">
                                <DatePicker
                                    className={`${styles.datecomponent} ${styles.fromDate} mx-2`}
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    excludeDates={blockedDates}
                                    endDate={endDate}
                                    minDate={new Date()}
                                    placeholderText="To"
                                    maxDate={addDays(60)}
                                />
                            </div>
                            <div className="text-center mt-2">
                                <button className={`${styles.checkbutton} btn btn-sm px-5`}
                                onClick={(e)=>handleSubmit(e)}>
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}