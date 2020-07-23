import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "../actiontypes/loginActionTypes";
import axios from "../../utils/axiosInstance";
import { apiServices } from '../apiServices/apiServices';
import { history } from '../history/routerHitory'

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  error: payload
});


export const login = (user) => {
  return dispatch => {
    dispatch(loginUserRequest());

    apiServices.login(user)
      .then(
        user => {
          dispatch(loginUserSuccess(user));
          history.push('/');
        },
        error => {
          dispatch(loginUserFailure(error.toString()));
          console.log(error)
        }
      );
  };
}
export const responseGoogle = async (response) => {
  let tokenObj = {
    "token": response.tokenId
  }
  console.log(response)
  return dispatch => {
    apiServices.loginGoogle(tokenObj)
      .then(
        user => {
          dispatch(loginUserSuccess(user));
          history.push('/')
        },
        error => {
          dispatch(loginUserFailure(error.toString()));
          console.log(error)
        }
      )
  }

}


export const logoutUserRequest = payload => ({
  type: LOGOUT_USER_REQUEST,
  payload
});

export const logoutUserSuccess = payload => ({
  type: LOGOUT_USER_SUCCESS,
  payload
});

export const logoutUserFailure = payload => ({
  type: LOGOUT_USER_FAILURE,
  error: payload
});

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserRequest());
    return axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: payload.token
          }
        }
      )
      .then(res => {
        dispatch(logoutUserSuccess(res));
      })
      .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};