import React, { Component } from "react"
import { connect } from 'react-redux'
import { Form, Button, Col } from "react-bootstrap"
import styles from './Registration.module.css'
import { Link } from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
// import { GoogleLoginButton } from "react-social-login-buttons";
import GoogleLogin from 'react-google-login'
import { AmazonLoginButton } from "react-social-login-buttons"
import { register } from '../../redux/actions/registerActions'
import { responseGoogle } from '../../redux/actions/loginActions'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname:"",
            lastname:"",
            email: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.firstname && this.state.lastname && this.state.email && this.state.password){
            var user = {
                name: this.state.firstname + " " + this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }
            
            this.props.register(user)    
            console.log(user)
        }
    }
    handleChange = (e) => {
        this.setState({ 
            [e.target.name]:e.target.value
        })

    }
    passwordsMustMatch = (value, allValues) => {return (
        value !== allValues.password ?
            'Passwords do not match' :
            undefined
    )}
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="rounded tab-box" className={styles.bordering}>
                        <div className="outer-box">
                            <div className="outer-box">
                                <div className="inner-box row">
                                    <div className="col-sm-6">
                                        <h1>Sign up Via e-mail</h1>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridFname">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control placeholder="First name" autoFocus={true} name="firstname" onChange={this.handleChange} />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridLname">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control placeholder="Last name" name="lastname" onChange={this.handleChange} />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Group controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formGridPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control placeholder="password" name="password" onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formGridRePasword">
                                                <Form.Label>Repeat Password</Form.Label>
                                                <Form.Control placeholder="Repeat Password" name="passwordC"  validate={[this.passwordsMustMatch]} />
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
                                            <FacebookLoginButton />
                                        </div>
                                        <div className="amazon mb-3">
                                            <AmazonLoginButton />
                                        </div>
                                        <div className="amazon mb-3">
                                            <GoogleLogin
                                                clientId="471977914473-cn7u1rs5sopnfdh3a3u6bt17ecpp50t3.apps.googleusercontent.com"
                                                buttonText='Sign in with Google'
                                                onSuccess={this.props.responseGoogle}
                                                onFailure={this.props.responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                accessType='offline' />
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
}
const mapDispatchToProps = {register, responseGoogle}
export default connect(null, mapDispatchToProps )(SignUp)