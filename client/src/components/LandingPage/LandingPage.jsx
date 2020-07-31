import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './LandingPage.module.css'
import DatePicker from "react-datepicker";
import TopCities from './TopCities'
import PopularPlaces from './PopularPlaces'
import { clearValidation } from '../../redux/actions/entityActions'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';





export default function LandingPage() {
  const final_res = useSelector(state => state.entity.validation)
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date());

  const copy = new Date(Number(startDate))
  copy.setDate(startDate.getDate() + 1)

  const [endDate, setEndDate] = useState(copy);

  const [params, setParams] = useState({
    "search_query": "",
    "guests": ""
  })
  const loginInfo = useSelector(state => state.login.loginInfo)
  const history = useHistory()

  const handleChange = (e) => {
    console.log(e.target.name)
    setParams({
      ...params,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (final_res?.['status']) {
      dispatch(clearValidation())
    }
    let end_update = new Date(Number(startDate))
    end_update.setDate(startDate.getDate() + 1)
    setEndDate(end_update)
  }, [startDate])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(params, startDate, endDate)
    let start = startDate.toLocaleDateString().split("/").reverse().join("-")
    let end = endDate.toLocaleDateString().split("/").reverse().join("-")
    let { search_query } = params
    history.push(`/listing?search_query=${search_query}&start_date=${start}&end_date=${end}&page=&per_page=&category=&amenities=&price=`)
  }

  return (
    <>
      <div className="container-fluid" >
        <div className={`${styles.landingImage} row`}>
          <div className={`${styles.over} container-fluid`} style={{ height: 400 }}>
            <div className="row text-center my-5 d-none  d-md-block" >
              <h2 className="col-12 text-white " style={{ marginTop: 80 }}>
                <b>Feel like Home away from Home</b>
              </h2>
              <h6 className="col-12 text-white mt-4 mb-4">
                The alternative to hotel with 6 million homes worldwide
              </h6>
            </div>
            <div className="container searchPanel  my-5" >
              <div className="m-auto text-center">
                <form 
                  onSubmit={(e) => handleSearch(e)} 
                  className={`${styles.searchbg} rounded p-2 d-flex flex-md-row flex-column d-md-inline-flex justify-content-around`}>
                    <GooglePlacesAutocomplete
                      types="region"
                      onSelect={(description) => setParams({
                        ...params,
                        "search_query": description['description']
                      })}
                      // apiKey="AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M"
                      renderInput={(props) => (
                        <div>
                          <input className={`${styles.wheretogo}`}
                            // Custom properties
                            {...props}
                          />
                        </div>
                      )}
                      renderSuggestions={(active, suggestions, onSelectSuggestion) => (
                        <div className={styles.suggestionsContainer}>
                          {
                            suggestions.map((suggestion) => (
                              <div
                                className={styles.suggestion}
                                onClick={(event) => onSelectSuggestion(suggestion, event)}
                              >
                                {suggestion.description}
                              </div>
                            ))
                          }
                        </div>
                      )}
                    />
                  <DatePicker
                    className={`${styles.datecomponent} ${styles.fromDate} mx-md-2`}
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="From"
                  />


                  <DatePicker
                    className={`${styles.datecomponent} ${styles.toDate} `}
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={endDate}
                    placeholderText="To"
                  />
                  <input
                    className={`${styles.beds} mx-md-2`}
                    type="text"
                    name="guests"
                    id="search_number_of_beds"
                    placeholder="Guests"
                    tabIndex="4"
                    value={params['guests']}
                    onChange={(e) => handleChange(e)}
                  />

                  <button
                    type="submit"
                    name="commit"
                    className={`${styles.searchSubmit}`}
                    id="fullSearch">Search
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <TopCities />
        <PopularPlaces />
      </div>
    </>
  )
}



