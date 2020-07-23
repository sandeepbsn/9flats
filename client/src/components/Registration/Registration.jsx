import React from "react"
import { Form, Button,Col } from "react-bootstrap"
// import FacebookLogin from 'react-facebook-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { AmazonLoginButton } from "react-social-login-buttons"

function Registration() {
    return (
        <div>
            <div className="container mt-5">
                <div className="p-3 rounded tab-box">
                    <div className="outer-box">
                        <div className="outer-box">
                            <div className="inner-box row">
                                <div className="col-sm-6">
                                    <h1>Sign up Via e-mail</h1>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridFname">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control  placeholder="First name" />
                                            </Form.Group>

                                            <Form.Group as={Col}  controlId="formGridLname">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control placeholder="Last name" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group  controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                        <Form.Group controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control placeholder="password" />
                                        </Form.Group>

                                        <Form.Group controlId="formGridRePasword">
                                            <Form.Label>Repeat Password</Form.Label>
                                            <Form.Control placeholder="Repeat Password" />
                                        </Form.Group>

                                        <Form.Group id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="By clicking 'Create Account' or signing up with Facebook, Amazon or Google you accept the Terms of service and Data protection policy." />
                                        </Form.Group>

                                        <Button variant="warning" type="submit">
                                            Create account
                                          </Button>
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
                    <div className="small">The Field marked with * is required</div>
                </div>
            </div>
        </div>

    )
}

export default Registration