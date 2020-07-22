import React from "react"
import { Form, Button } from "react-bootstrap"
// import FacebookLogin from 'react-facebook-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { AmazonLoginButton } from "react-social-login-buttons"

function Login() {
  return (
    <div>
      <div className="container mt-5">
        <div className="p-3 rounded tab-box">
          <div className="outer-box">
            <div className="outer-box">
              <div className="inner-box row">
                <div className="col-sm-6">
                  <h1>Log In Via e-mail</h1>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                       </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
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
                  <div className="facebook mb-3">
                    {/* <FacebookLogin /> */}
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

export default Login