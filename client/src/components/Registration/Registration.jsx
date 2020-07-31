import React, { useEffect, useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import styles from './Registration.module.css'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

import {
  loginGoogleBackend, 
  loginFacebookBackend
} from '../../redux/actions/loginActions'

import {userRegistration} from '../../redux/actions/registerActions'

export default function Registration(){
    const message = useSelector(state => state.register.message)
    const dispatch = useDispatch()
    const history = useHistory()
    const loginInfo = useSelector(state => state.login.loginInfo)

    const [user, setUser] = useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "password":"",
    })

    useEffect(()=>{
        if(loginInfo){
            if(loginInfo?.token){
                history.push('/')
            }
        }
        if(message){
            if(message === "registration successfull"){
                alert(message)
                history.push('/signin')
            }
            else{
                alert(message)
            }
        }
    },[history, message])

    const responseGoogle = async(response) => {
        let tokenObj = {
          "token": response.tokenId
        }
        try {
          await dispatch(loginGoogleBackend(tokenObj))
          window.location.reload()
          
        } 
        catch (error) {
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
        } 
        catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await dispatch(userRegistration({
            "name":user['firstname'] + " " + user['lastname'],
            "email":user['email'],
            "password":user['password']
        }))                                                  
    }
    console.log(message)
    return (
        <div>
            <div className="container mt-5">
                <div className="rounded tab-box" className={styles.bordering}>
                    <div className="outer-box">
                        <div className="outer-box">
                            <div className="inner-box row">
                                <div className="col-sm-6">
                                    <h1>Sign up Via e-mail</h1>
                                    <Form onSubmit={(e)=>handleSubmit(e)}>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridFname">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control placeholder="First name" autoFocus="true" name="firstname" onChange={(e)=>handleChange(e)}/>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridLname">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control placeholder="Last name" name="lastname" onChange={(e)=>handleChange(e)}/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Group controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>handleChange(e)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control placeholder="password" name="password" onChange={(e)=>handleChange(e)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridRePasword">
                                            <Form.Label>Repeat Password</Form.Label>
                                            <Form.Control placeholder="Repeat Password" name="password" onChange={(e)=>handleChange(e)}/>
                                        </Form.Group>
                                        <Form.Group id="formGridCheckbox">
                                            <Form.Check 
                                                type="checkbox" 
                                                label="By clicking 'Create Account' or signing up with Facebook, Amazon or Google you accept the Terms of service and Data protection policy." />
                                        </Form.Group>
                                        <Button variant="warning" type="submit">
                                            Create account
                                        </Button>
                                    </Form>
                                </div>
                                <div className="col-sm-6">
                                    <h1>or sign up with</h1>
                                    <div className="facebook mb-3">
                                        <FacebookLogin
                                        appId="203954837724135"
                                        textButton='Sign up with Facebook'
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={responseFacebook} />
                                    </div>
                                    <div className="amazon mb-3">
                                        <GoogleLogin
                                        clientId="471977914473-cn7u1rs5sopnfdh3a3u6bt17ecpp50t3.apps.googleusercontent.com"
                                        buttonText='Sign up with Google'
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
                        <img src="//assets.9flats.com/assets/i18n/en/press_banner_940x76-655826b25475282229c9d250726f2c9bef368ebe1d69db1939f5d2df08741dbb.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
