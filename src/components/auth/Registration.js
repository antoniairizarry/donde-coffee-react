import React, { Component, header } from 'react';
import axios from 'axios';
import Header from '../header.js';
import Footer from '../footer.js'
import { Form, Button, Container, Row, Card} from 'react-bootstrap'

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: "",
      registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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
    
    axios.post(process.env.REACT_APP_FLASK_API_URL + "/signup", {
      user: {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      }
    },
    // MAKE SURE THIS NEXT LINE DOESN'T BREAK THINGS
    // { withCredentials: true }
    ).then(response => {
      console.log('registration res', response);
      if (response.status === 200){
        console.log('blah')
        //SAVING TOKEN HERE
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user_id', response.data.user_id)
        this.props.handleSuccessfulAuth(response.data);}
    }).catch(error => {
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
      }
      console.log("registration error", error);      
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group input
          type="email">
          <Form.Control name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group input
          type="name">
          <Form.Control name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group input
          type="password">
          <Form.Control name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange} required />
          </Form.Group>

<Button variant="info" type="submit">
    Submit
  </Button>
        </Form>
        </Container>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      </>
    )
  }
}