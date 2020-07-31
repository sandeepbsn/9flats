import {FETCH_BASIC_INFO, FETCH_AMENITY, FETCH_ROOMS, FETCH_REVIEWS, FETCH_RECOMMENDATIONS, FETCH_ROOM_STATUS, FETCH_BLOCKED_DATES, FETCH_VALIDATION, CLEAR_VALIDATION, VERIFY_OTP, CLEAR_OTP} from '../actiontypes/entityActionTypes'
import axiosInstance from '../../utils/axiosInstance'


export const getBasicInfo = (payload) =>({
    type:FETCH_BASIC_INFO,
    payload
})

export const getAmenities = (payload) => ({
    type:FETCH_AMENITY,
    payload
})

export const getRooms = (payload) => ({
    type: FETCH_ROOMS,
    payload
})
export const getReviews = (payload) => ({
    type: FETCH_REVIEWS,
    payload
})

export const getRecommendations = (payload) => ({
    type: FETCH_RECOMMENDATIONS,
    payload
})

export const getRoomStatus = (payload) => ({
    type: FETCH_ROOM_STATUS,
    payload
})

export const getBlockedDates = (payload) => ({
    type: FETCH_BLOCKED_DATES,
    payload
})
export const clearValidation = () => ({
    type:CLEAR_VALIDATION
})

export const clearOtp = () => ({
    type:CLEAR_OTP
})

export const getValidation = (payload) => ({
    type: FETCH_VALIDATION,
    payload
})

export const verifyOtp = (payload) => ({
    type:VERIFY_OTP,
    payload
})

export const getBasicInfoBackend = payload => dispatch => {
    return axiosInstance.get(`/entity/property/${payload}`)
    .then(res =>dispatch(getBasicInfo(res['data']['basic_details'])))
    .catch(err=>console.log(err))
}

export const getAmenitiesBackend = payload => dispatch => {
    return axiosInstance.get(`/entity/amenity/${payload}`)
    .then(res=>dispatch(getAmenities(res['data']['amenities'])))
    .catch(err=>console.log(err))
}

export const getRoomsBackend = payload => dispatch => {
    return axiosInstance.get(`/entity/rooms/${payload}`)
    .then(res=>dispatch(getRooms(res['data']['room_details'])))
    .catch(err=>console.log(err))
}

export const getReviewsBackend = payload => dispatch => {
    return axiosInstance.get(`/entity/reviews/${payload}`)
    .then(res=>dispatch(getReviews(res['data'])))
    .catch(err=>console.log(err))
}

export const getRecommendationsBackend = payload => dispatch => {
    return axiosInstance.post(`/entity/recommendations/${payload}`)
    .then(res=>dispatch(getRecommendations(res['data'])))
    .catch(err=>console.log(err))
}

export const getRoomStatusBackend = payload => dispatch => {
    return axiosInstance.get(`/entity/roomavailability${payload}`)
    .then(res => dispatch(getRoomStatus(res['data'])))
    .catch(err => console.log(err))
}

export const getBlockedDatesBackend = payload => dispatch => {
    return axiosInstance.get(`/entity/blockeddates/${payload}`)
    .then(res => dispatch(getBlockedDates(res['data'])))
    .catch(err=>console.log(err))
}

export const getOrderIdBackend = payload => dispatch => {
    return axiosInstance.post('/entity/payment',{
        ...payload
    })
    .then(res=>res['data'])
    .catch(err=>console.log(err))
}

export const getPaymentBackend = payload => dispatch => {
    return axiosInstance.post('/entity/paymentvalidation',{
        ...payload
    })
    .then(res=>dispatch(getValidation(res['data'])))
    .catch(err=>console.log(err))
}

export const getOtpBackend = payload => dispatch => {
    return axiosInstance.post('/entity/sendotp',{
        ...payload
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

export const verifyOtpBackend = payload => dispatch => {
    return axiosInstance.post('/entity/verifyotp',{
        ...payload
    })
    .then(res=>dispatch(verifyOtp(res['data'])))
    .catch(err=>console.log(err))
}
export const sendMailBackend = payload => dispatch =>{
    return axiosInstance.post('/entity/mail',{
        ...payload
    })
    .then(res=>console.log(res['data']))
    .catch(err=>console.log(err))
}
