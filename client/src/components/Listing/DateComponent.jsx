import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useHistory, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import styles from './ListingPage.module.css'
import {getListingsBackend} from '../../redux/actions/listingActions'

export default function DateComponent({search_input}){
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const query = new URLSearchParams(location.search)

    let s = query.get('start_date').split("-").map(Number)
    let e = query.get('end_date').split("-").map(Number)
    console.log(s,e)

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
    const handleSubmit = (e) => {
        e.preventDefault()
        let start = startDate.toLocaleDateString().split("/").reverse().join("-")
        let end = endDate.toLocaleDateString().split("/").reverse().join("-")
        let payload = `search_query=${search_input}&start_date=${start}&end_date=${end}&page=${query.get('page')}&per_page=${query.get('per_page')}&category=${query.get('category')}&amenities=${query.get('amenities')}&price=${query.get('price')}`
        dispatch(getListingsBackend(payload))
        history.push(`/listing?${payload}`)
    }
    
    
    return (
        <div className="d-flex">
            <div>
                <DatePicker
                    className={`${styles.datecomponent} mx-2`}
                    selected={startDate}
                    onChange={date => handleStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="From"
                />
                <DatePicker
                    className={`${styles.datecomponent} mx-2`}
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="To"
                />
          </div> 
          <div>
              <button className={`${styles.searchbutton} btn btn-sm btn-warning px-3`}
              onClick = {(e) => handleSubmit(e)}>
                  Search
              </button>
          </div>
        </div>
      );
}