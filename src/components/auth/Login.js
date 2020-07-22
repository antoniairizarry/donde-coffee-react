import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header.js';
import Footer from '../footer.js'
import { Form, Button, Container, Row} from 'react-bootstrap'

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
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard")
    console.log("hi")
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
        localStorage.setItem('user_id', response.data.user_id)
        this.props.handleSuccessfulAuth(response.data);
      }
      else{
        console.log(response)
        alert("Something went wrong with your login, try again.")
      }
    }).catch(error => {
      console.log(error.response)
      if (error.response) {
        // client received an error response (5xx, 4xx)
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data.msg )
      } else if (error.request) {
        // client never received a response, or request never left
        alert(error.response)
      } else {
        // anything else
        alert(error)
      }      
    })
    event.preventDefault();
  }

  render() {
    return (
      <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container fluid="sm">
        <Form onSubmit={this.handleSubmit2}>
          <Form.Group input
          type="email">
          <Form.Control name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange} required />
          </Form.Group>

          <Form.Group input
          type="password">
          <Form.Control name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange} required />
          </Form.Group>

          <button type="submit">Login</button>
        </Form>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      </>
      );
  }
}