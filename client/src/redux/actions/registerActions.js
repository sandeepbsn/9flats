import {REGISTER_USER, CLEAR_REGMESSAGE} from '../actiontypes/registerActionTypes'
import axiosInstance from '../../utils/axiosInstance'



export const registerUser = (payload) => ({
    type:REGISTER_USER,
    payload
})

export const clearMessage = () => ({
    type:CLEAR_REGMESSAGE
})

export const userRegistration = payload => dispatch => {
    
    return axiosInstance.post('register/native',{
        ...payload
    })
    .then(res=>dispatch(registerUser(res.data)))
    .catch(err=>console.log(err))
}