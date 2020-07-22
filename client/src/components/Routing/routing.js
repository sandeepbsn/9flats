import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import LogIn from '../Login/Login'
import SignUp from '../Registration/Registration'
export class Routing extends Component {
    render() {
        return (
           <>
            <Switch>
                {/* <Route exact path="/" component={LandingPage}/> */}
                <Route path="/signin" component={LogIn}/>
                <Route path="/signup" component={SignUp}/>
            </Switch>
           </>
        )
    }
}

export default Routing
