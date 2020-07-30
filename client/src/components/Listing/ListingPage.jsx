import React, {useEffect, useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getListingsBackend} from '../../redux/actions/listingActions'
import styles from './ListingPage.module.css'
import axios from 'axios'
import FilterDropdown from './FilterDropdown'
import DateComponent from './DateComponent'
import Properties from './Properties'


export default function ListingPage(){
    const history = useHistory()
    const location = useLocation()
    
    const query = new URLSearchParams(location.search)
    const [search, setSearch] = useState(query.get('search_query'))
    

    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    // const razorpay = async(details) => {
    //     try {
    //         let order_res = await axios.post("http://127.0.0.1:5000/entity/payment",{
    //         "amount":Number(details['price']) * 100,
    //         "currency":"INR",
    //         "receipt":details['id'] + "#" + details['name'] + "#" + Date.now(),
    //         "payment_capture":"1",
    //     })
        
    //     var options = {
    //         "key": "rzp_test_lskMJcJY6Yjp9c", // Enter the Key ID generated from the Dashboard
    //         "amount": Number(details['price']) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //         "currency": "INR",
    //         "name": details['name'],
    //         "description": "Test Transaction",
    //         "image": "https://assets.9flats.com/assets/new_home/logo-0aee51de5d08cfd71ad01d410e9b61ad821b8768f3c9de039f6bb6e48b792be7.svg",
    //         "order_id": order_res['data']['id'], //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //         "prefill": {
    //             "name": "Username",
    //             "email": "User email address",
    //             "contact": "9999999999"
    //         },
    //         "notes": {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         "theme": {
    //             "color": "#F37254"
    //         },
    //         handler: async (response) => {
    //             console.log(response)
    //             let final_res = await axios.post("http://127.0.0.1:5000/entity/paymentvalidation", {
    //                 ...response,
    //             })
    //             if(final_res['data']['status'] == 'success'){
    //                 alert(final_res['data']['message'])
    //                 history.push('/')
    //             }
    //             else{
    //                 alert(final_res['data']['message'])
    //             }
    //         },
    //     };
    //     const rzp_trial = window.Razorpay(options);
    //     rzp_trial.open();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div>
            <div>
                <div className={styles.searchbarflex}>
                    <div  className="mx-2">
                        <FilterDropdown
                        className={styles.searchBox}/>
                    </div>
                    <div className="mx-2">
                        <input value={search}
                        className={styles.searchcomponent}
                        onChange = {(e)=>handleChange(e)} />
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