import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(){
        super()
        this.state ={
            email: "",
            password: "",
            firstname: "",
            lastname: ""
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
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label>Firstname</label>
                        <input type="text" id="firstname" onChange ={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label>Lastname</label>
                        <input type="text" id="lastname" onChange ={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" id="email" onChange ={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" id="password" onChange ={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn">SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
