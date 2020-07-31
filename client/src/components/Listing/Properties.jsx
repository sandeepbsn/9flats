import React,{useState,useEffect} from 'react'
import {Link,useLocation, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Card} from 'react-bootstrap'
import {getListingsBackend} from '../../redux/actions/listingActions'   
import styles from './ListingPage.module.css'
import PageList from './PageList'
import Maps from './Maps'
import {v4 as uuidv4} from 'uuid'

export default function Properties(){
    const data = useSelector(state=>state.listing.pageData)
    
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    let payload = `search_query=${query.get('search_query')}&page=${query.get('page')}&per_page=${query.get('per_page')}&category=${query.get('category')}&amenities=${query.get('amenities')}&price=${query.get('price')}`
    let pageData
    let totalPages 

    useEffect(()=>{
        dispatch(getListingsBackend(payload))
    },[payload])
    let per_page = query.get('per_page') === "" || null ? 10 : Number(query.get('per_page'))
    
    
    if(data){
        pageData = data['data']
        
        totalPages = Math.ceil(data['totalCount'] / per_page)
    }
    
    console.log(data)
    return (
        <div className="row">
             <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="row">
                    <div className={`${styles.searchHeader} col-12 p-2`}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="search__header__city text-truncate">
                                        <b>
                                            {query.get('search_query') + " "}
                                        </b>
                                        {data ? <small className={`${styles.searchHeaderFont} text-muted`} >({data['totalCount']} results)</small>:null}
                                    </h1>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {data && data['data'].length ? data['data'].map(item => (
                        <div className="col-6 p-20" key={uuidv4()}>
                            <Card >
                                <Link to = {`/entity/${item['id']}?search_query=${item['name']}&start_date=${query.get('start_date')}&end_date=${query.get('end_date')}`}>
                                    <Card.Img variant="top" src={item.images[0]} bsPrefix="card-img" />
                                </Link>
                                <span className={`${item['status'] === 'available' ? [styles.label_photo,styles.label_instant].join(" ") :[styles.label_photo, styles.label_not].join(" ")}`}>{item['status']}</span>
                                <Card.Body>
                                    <Card.Title>
                                        <h6>
                                            <span className={`${styles.category} ${styles.badge}`}>{item.type}</span><h6 className="accommodates ml-2 d-inline">Accommodates 2</h6>
                                        </h6>
                                    </Card.Title>
                                    <Card.Title bsPrefix=""></Card.Title>
                                    <Card.Link href="/entity" ><h5 className="text-primary">{item.name},{item.city}</h5></Card.Link>
                                    <div className="price mt-2">
                                        <Card.Text>
                                            <span className="price_index price_index_notour">
                                                <small className="price_index__small price_index__small_first">from &#8377; </small>
                                                <strong className="price_index__strong">
                                                    <span className="money">{item.price} </span>
                                                </strong>
                                                <small className="price_index__small price_index__small_last"> per night</small>
                                            </span>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                    )
                        : (<div><h1>NO DATA FOUND</h1></div>)}
                </div>
                {data && data['data'].length ? 
                <div className={styles.page}>
                    <PageList total_pages = {Math.ceil(Number(data['totalCount'])/per_page)}/>
                </div>:null}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-none d-sm-block mt-2"
                style={{ right: 0, left: "auto", position: "relative" ,"zIndex":"1"}}>
                <div>
                    {data && data['data'] ? <Maps coordinates={data['data']}/> : "Loading..."}
                </div>
            </div>
        </div>
    )
}