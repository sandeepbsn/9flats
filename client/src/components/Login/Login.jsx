import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import styles from './Login.module.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import GoogleLogin from 'react-google-login'
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookLogin from 'react-facebook-login';

import {
  loginNativeBackend, 
  loginGoogleBackend, 
  loginFacebookBackend
} from '../../redux/actions/loginActions'

import {clearMessage} from '../../redux/actions/registerActions'


export default function Login(){
  const dispatch = useDispatch()
  const history = useHistory()
  const message = useSelector(state => state.register.message)
  const loginInfo = useSelector(state => state.login.loginInfo)
  const [login, setLogin] = useState({
      "email":"",
      "password":"",
  })

  useEffect(()=>{
    if(message){
      dispatch(clearMessage())
    }
    if (loginInfo){
      if(loginInfo?.token){
        history.push('/')
      }
    }
  },[loginInfo,history])

  const handleChange = (e) => {
    setLogin({
        ...login,
        [e.target.name] : e.target.value
    })
  }

  const responseGoogle = async(response) => {
    let tokenObj = {
      "token": response.tokenId
    }
    try {
      await dispatch(loginGoogleBackend(tokenObj))
      window.location.reload()
      
    } catch (error) {
      console.log(error)
    }
  }

  const responseFacebook = async(response) => {
    console.log(response)
    let tokenObj = {}
    tokenObj['name'] = response.name
    tokenObj['user_uuid'] = response.userID
    if(response.email){
      tokenObj['email'] = response.email 
    }
    try {
      await dispatch(loginFacebookBackend(tokenObj)) 
      window.location.reload()     
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async(e) => {
      e.preventDefault()
      await dispatch(loginNativeBackend(login))
  }
  console.log(loginInfo)
  return (
    <div>
      <div className="container mt-5">
        <div className={`${styles.bordering} rounded tab-box`}>
          <div className="outer-box">
            <div className="outer-box">
              <div className="inner-box row">
                <div className="col-sm-6">
                  <h1>Log in via e-mail</h1>
                  <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" autoFocus="true" name="email" onChange={(e)=>handleChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" onChange={(e)=>handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                      Log in</Button>
                    <Form.Text className="text-primary">
                      Forgot your password? Haven't received confirmation instructions?
                    </Form.Text>
                  </Form>
                </div>
                <div className="col-sm-6">
                  <h1>or log in with</h1>
                  <div className="facebook mt-4 mb-4">
                    <FacebookLogin
                      appId="203954837724135"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={responseFacebook}
                    />
                  </div>
                  <div className="amazon mt-3  mb-3">
                    <GoogleLogin
                      clientId="471977914473-cn7u1rs5sopnfdh3a3u6bt17ecpp50t3.apps.googleusercontent.com"
                      buttonText='Sign in with Google'
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={false}/>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small" id="required">The fields marked with * are required</div>
        <div className="outer-box">
          <h5 className="text-center">
            <div><Link to="/signup" className="btn btn-primary ">Not a member yet? Sign up now.</Link></div>
          </h5>
        </div>
        <div className="outer-box text-center d-none d-md-block mb-5">
          <a alt="The following media featured 9flats.com: Bild, Sueddeutsche Zeitung, Hamburger Abendblatt, Welt, RTL 2, Techcrunch, The Next Web" href="http://about.9flats.com/press/?lang=en">
            <img src="//assets.9flats.com/assets/i18n/en/press_banner_940x76-655826b25475282229c9d250726f2c9bef368ebe1d69db1939f5d2df08741dbb.png" alt=""/></a>
        </div>
      </div>
    </div>

  )
}
