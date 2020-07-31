import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import LogIn from '../Login/Login'
import SignUp from '../Registration/Registration'
import LandingPage from '../LandingPage/LandingPage'
import ListingPage from '../Listing/ListingPage'
import Entity from '../Entity/MainEntity/Entity'
import PropertyCheckout from '../Entity/CheckoutForm'
export class Routing extends Component {
    render() {
        return (
           <>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/listing" component={ListingPage}/>
                <Route path="/signin" component={LogIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/entity/:property_id" component={Entity}/>
                <Route path="/payment/:property_id" component={PropertyCheckout}/>
            </Switch>
           </>
        )
    }
}

export default Routing
