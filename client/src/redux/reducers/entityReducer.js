import {FETCH_BASIC_INFO, FETCH_AMENITY, FETCH_ROOMS, FETCH_REVIEWS, FETCH_RECOMMENDATIONS, FETCH_ROOM_STATUS, FETCH_BLOCKED_DATES, FETCH_VALIDATION, CLEAR_VALIDATION, VERIFY_OTP, CLEAR_OTP} from '../actiontypes/entityActionTypes'

export const entityState = {
    "basicInfo":"",
    "amenities":"",
    "rooms":"",
    "room_status":"",
    "reviews":"",
    "recommendations":"",
    "blockedDates":"",
    "validation":"",
    "otp":""
}

export default (state = entityState, {type,payload}) => {
    switch(type){
        case FETCH_BASIC_INFO:
            return ({
                ...state,
                "basicInfo":payload
            })

        case FETCH_AMENITY:
            return ({
                ...state,
                "amenities":payload
            })

        case FETCH_ROOMS:
            return ({
                ...state,
                "rooms":payload
            })

        case FETCH_REVIEWS:
            return ({
                ...state,
                "reviews":payload
            })

        case FETCH_RECOMMENDATIONS:
            return ({
                ...state,
                "recommendations":payload
            })

        case FETCH_ROOM_STATUS:
            return ({
                ...state,
                "room_status":payload
            })

        case FETCH_BLOCKED_DATES:
            return({
                ...state,
                "blockedDates":payload
            })

        case FETCH_VALIDATION:
            return ({
                ...state,
                "validation":payload
            })

        case CLEAR_VALIDATION:
            return ({
                ...state,
                "validation":""
            })

        case VERIFY_OTP:
            return ({
                ...state,
                "otp":payload
            })

        case CLEAR_OTP:
            return ({
                ...state,
                "otp":""
            })
        default:
            return state
    }
}