import React, {useEffect, useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getListingsBackend} from '../../redux/actions/listingActions'
import styles from './ListingPage.module.css'
import axios from 'axios'
import FilterDropdown from './FilterDropdown'
import DateComponent from './DateComponent'
import Properties from './Properties'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';



export default function ListingPage(){
    const history = useHistory()
    const location = useLocation()
    
    const query = new URLSearchParams(location.search)
    const [search, setSearch] = useState(query.get('search_query'))
    

    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <div>
            <div>
                <div className={styles.searchbarflex}>
                    <div  className="mx-2">
                        <FilterDropdown
                        className={styles.searchBox}/>
                    </div>
                    <div className="mx-2">
                    <GooglePlacesAutocomplete
                        types = "region"
                        initialValue={query.get('search_query')}
                        onSelect={(description)=>setSearch(description['description'])}
                        apiKey="AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M"
                        renderInput={(props) => (
                          <div>
                            <input className={styles.wheretogo}
                              // Custom properties
                              {...props}
                            />
                          </div>
                        )}
                        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
                          <div className={styles.suggestionsContainer}>
                            {
                              suggestions.map((suggestion) => (
                                <div className="d-flex bg bg-white border border-dotted">
                                <div className={styles.locationDiv}>
                                    <img src="https://banner2.cleanpng.com/20180328/lde/kisspng-computer-icons-computer-software-location-icon-5abbd600c1a1b5.2376273015222594567931.jpg" alt="location" width="20px" height="20px" z-index="999"/>
                                </div>
                                <div
                                  className={styles.suggestion}
                                  onClick={(event) => onSelectSuggestion(suggestion, event)}
                                >
                                  {suggestion.description}
                                </div>
                                </div>

                              ))
                            }
                          </div>
                        )}
                      />
                    </div>
                    <div className="mx-2">
                        <DateComponent search_input = {search}/>
                    </div>
                </div>
            </div>
            <div>
                <Properties/>
            </div>
        </div>
    )
}