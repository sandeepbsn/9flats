import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER
} from '../actiontypes/loginActionTypes'

import axiosInstance from '../../utils/axiosInstance'

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
})

export const fetchUser = (payload) => ({
  type:FETCH_USER,
  payload
})

export const logoutUser = () => ({
  type:LOGOUT_USER
})


export const loginNativeBackend = payload => dispatch => {
  return axiosInstance.post('/login/native', {
      ...payload
  })
  .then(res => dispatch(loginUser(res.data)))
  .catch(err => console.log(err))
}

export const loginGoogleBackend = payload => dispatch => {
  return axiosInstance.post('/login/google', {
      ...payload
  })
  .then(res => dispatch(loginUser(res.data)))
  .catch(err => console.log(err))
}

export const loginFacebookBackend = payload => dispatch => {
  return axiosInstance.post('/login/facebook', {
      ...payload
  })
  .then(res => dispatch(loginUser(res.data)))
  .catch(err => console.log(err))
}

export const tokenValidation = payload => dispatch => {
  return axiosInstance.post('/login/validation',{
    ...payload
  }).
  then(res => dispatch(fetchUser(res.data)))
  .catch(err=>console.log(err))
}