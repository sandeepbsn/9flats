import {GET_LISTINGS} from '../actiontypes/listingActionTypes'
import axiosInstance from '../../utils/axiosInstance'


export const getListings = (payload) => ({
    type:GET_LISTINGS,
    payload
})

export const getListingsBackend = payload => dispatch => {
    
    return axiosInstance.get(`/listing/display?${payload}`)
    .then(res=>dispatch(getListings(res.data)))
    .catch(err=>console.log(err))
}