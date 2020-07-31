import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER
} from '../actiontypes/loginActionTypes'

import {loadData, saveData, removeData} from '../localStorage'

export const loginState = {
  "loginInfo":loadData("loginInfo") || null,
  "userInfo":loadData("userInfo") || null
};

export default (state = loginState, {type, payload}) => {
  switch(type){
      case LOGIN_USER:
          saveData("loginInfo", payload)
          return ({
              ...state,
              "loginInfo":payload
          })
      case FETCH_USER:
          saveData("userInfo", payload)
          return ({
              ...state,
              "userInfo":loadData("userInfo")
          })

      case LOGOUT_USER:
          removeData("loginInfo")
          removeData("userInfo")
          console.log("in")
          return ({
              ...state,
              "userInfo":loadData("userInfo"),
              "loginInfo":loadData("loginInfo"), 
          })

      default:
          return state
  }
}