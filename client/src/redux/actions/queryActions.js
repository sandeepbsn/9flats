import {
    QUERY_REQUEST,
    QUERY_SUCCESS,
    QUERY_FAILURE,
  } from "../actiontypes/queryActionTypes";
  import axios from "../../utils/axiosInstance";
  import { apiServices } from '../apiServices/apiServices';
  
  
  export const queryRequest = () => ({
    type: QUERY_REQUEST
  });
  
  export const querySuccess = payload => ({
    type: QUERY_SUCCESS,
    payload
  });
  
  export const queryFailure = payload => ({
    type: QUERY_FAILURE,
    error: payload
  });
  
  export const listOfItems = (params) => {
    console.log("hello")
    return dispatch => {
      dispatch(queryRequest());
  
      apiServices.fetchListOfItems(params)
        .then(
          res => {
            dispatch(querySuccess(res));
            console.log(res)
          }
        ) 
        .catch(
          error => {
            dispatch(queryFailure(error.toString()));
            console.log(error)
          }
        );
    };
  }