import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation, useHistory} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import styles from './ListingPage.module.css'


export default function PageList({total_pages}){
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    

    let pages = []
    const query = new URLSearchParams(location.search)
    const activePage = query.get('page') === "" || null ? 1 : Number(query.get('page'))
    console.log("page is ", activePage)
    const handlePageChange = (page) => {
        page = Number(page) ? page : Number(activePage) + 1  
        

        let payload = `search_query=${query.get('search_query')}&start_date=${query.get('start_date')}&end_date=${query.get('end_date')}&page=${page}&per_page=${query.get('per_page')}&category=${query.get('category')}&amenities=${query.get('amenities')}&price=${query.get('price')}`

        history.push(`/listing?${payload}`)
    } 

    for(let i = activePage - 1; i >= 0 && i<=activePage+3 && i <= total_pages; i++){
        if(i === activePage){
            pages.push(<button className = {`${styles.activepage}`} key={uuidv4()} onClick={()=>handlePageChange(i)}>{i}</button>)
            continue
        }
        if(i === activePage - 1){
            if(i !== 0){
                pages.push(<button key={uuidv4()} onClick={()=>handlePageChange(activePage - 1)}>&#8592;</button>)
            }
            continue
        }
        if (i === activePage + 3){
            pages.push(<button key={uuidv4()} onClick={()=>handlePageChange(activePage + 1)}>&#8594;</button>)
            continue
        }
        pages.push(<button key={uuidv4()} onClick={()=>handlePageChange(i)}>{i}</button>)

    }
    
    if(pages.length){
        return (
            pages.map(page=><div key = {uuidv4()} className="d-flex">{page}</div>)
        )
    }
    else{
        return (
            <div>Loading...</div>
        )
    }
}