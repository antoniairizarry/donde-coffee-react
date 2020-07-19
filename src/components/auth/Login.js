import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    
    axios.post("http://localhost:5000/login", {
      user: {
        email: email,
        password: password
      }
    },
    // MAKE SURE THIS NEXT LINE DOESN'T BREAK THINGS
    // { withCredentials: true }
    ).then(response => {
      console.log('res from login', response);
      if (response.status === 200){
        
        this.props.handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("login error", error);
    })
    event.preventDefault();
  }

  handleSubmit2(event) {
    const { email, password } = this.state;
    //making a call to flask
    axios.post("http://localhost:5000/login2", {      
        username: email,
        password: password
  
    },
    // MAKE SURE THIS NEXT LINE DOESN'T BREAK THINGS
    // { withCredentials: true }
    ).then(response => {
      console.log('res from login', response);
      if (response.status === 200){
        //KEY PART
        //SAVE TOKEN TO LOCAL STORAGE
        localStorage.setItem('token', response.data.token)
        this.props.handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("login error", error);
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit2}>
          <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange} required />

          <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange} required />

          <button type="submit">Login</button>
        </form>
      </div>);
  }
}