import React, {useEffect} from 'react'
import ImageEntity from '../ImageEntity/ImageEntity'
import Description from '../Description/Description'
import Amenities from '../Amenities'
import Table from '../Table'
import Reviews from '../Reviews'
import Recommendation from '../Recommend'
import {getBasicInfoBackend, getAmenitiesBackend, getRoomsBackend, getReviewsBackend, getRecommendationsBackend, getRoomStatusBackend, getBlockedDatesBackend} from '../../../redux/actions/entityActions'
import {useParams, useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import MapImage from '../MapImage'

export default function Entity(){
    const basicInfo = useSelector(state=>state.entity.basicInfo)
    const amenities = useSelector(state=>state.entity.amenities)
    const rooms = useSelector(state=>state.entity.rooms)
    const reviews = useSelector(state=>state.entity.reviews)
    const recommendations = useSelector(state=>state.entity.recommendations)
    const room_status = useSelector(state=>state.entity.room_status)
    const blockedDates = useSelector(state=>state.entity.blockedDates)

    const dispatch = useDispatch()
    const params = useParams()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    let payload = `/${params['property_id']}?start_date=${query.get('start_date')}&end_date=${query.get('end_date')}`

    useEffect(()=>{
        const entityDetails = async() =>{
            try {
                await dispatch(getBasicInfoBackend(params['property_id']))
                await dispatch(getAmenitiesBackend(params['property_id']))
                await dispatch(getRoomsBackend(params['property_id']))
                await dispatch(getReviewsBackend(params['property_id']))
                await dispatch(getRecommendationsBackend(params['property_id']))
                await dispatch(getBlockedDatesBackend(params['property_id']))
                await dispatch(getRoomStatusBackend(payload))
            } catch (error) {
                console.log(error)
            }
        }
        entityDetails()
    },[])
    console.log(basicInfo)
    console.log(amenities)
    return (
        <div>
            <div>
                <ImageEntity basicDetails = {basicInfo}/>
                <Description basicDetails={basicInfo} blockedDates = {blockedDates} />
                <Amenities amenities = {amenities}/>
                {/* <MapImage basicDetails={query.get('search_query')}/> */}
                <Table rooms = {rooms} room_status = {room_status} basicDetails = {basicInfo} hotel = {query.get('search_query')}/>
                <Reviews reviews = {reviews}/>
                <Recommendation recommendations = {recommendations}/>
            </div>
        </div>
    )
}
