import React, { Component } from 'react'

export class LogIn extends Component {
    constructor(){
        super()
        this.state ={
            email: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>Sign In</h5>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" id="email" onChange ={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" id="password" onChange ={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LogIn
