import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { AmazonLoginButton } from "react-social-login-buttons"

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="rounded tab-box" className={styles.bordering}>
            <div className="outer-box">
              <div className="outer-box">
                <div className="inner-box row">
                  <div className="col-sm-6">
                    <h1>Log in via e-mail</h1>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" autoFocus="true" name="email" onChange={this.handleChange} />
                      </Form.Group>

                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handleChange} />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" checked />
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
                    <div className="facebook mb-3">
                      <FacebookLoginButton />
                    </div>
                    <div className="amazon mb-3">
                      <AmazonLoginButton />
                    </div>
                    <div className="amazon mb-3">
                      <GoogleLoginButton />
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
}
