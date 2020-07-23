import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../Registration/Registration'
import LandingPage from '../LandingPage/LandingPage'
export class Routing extends Component {
    render() {
        return (
           <>
            <Switch>
                {/* <Route exact path="/" component={LandingPage}/> */}
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
            </Switch>
           </>
        )
    }
}

export default Routing
