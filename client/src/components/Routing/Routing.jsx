import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../Registration/Registration'
import Entity from '../Entity/MainEntity/Entity'
import LandingPage from '../LandingPage/LandingPage'
import ListingLayout from '../Listing/ListingLayout'
import CheckoutForm from '../PaymentCheckout/CheckoutForm'
import OrderModals from '../SuccessModal/OrderModals'
export class Routing extends Component {
    render() {
        return (
           <>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/entity" component={Entity}/>
                <Route path="/listing/display" component={ListingLayout}/>
                <Route path="/checkoutForm" component={CheckoutForm}/>
                <Route path= "/success" component={OrderModals}/>
            </Switch>
           </>
        )
    }
}

export default Routing
