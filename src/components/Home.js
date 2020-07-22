import React, { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from 'axios'
import Header from './header.js';
import Footer from './footer.js'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard")
    console.log("hi")
  }

  handleLogoutClick() {
    axios.delete("http://localhost:5000/logout").then(response => {
    this.props.handleLogout();
    }).catch(error => {
      console.log("logout error", error);
    });
  }

  render() {
    return (
      <>
      <Header />
        {/* // <h1>Home</h1>
        // <h2>status: {this.props.loggedInStatus}</h2>
        // <button onClick={() => this.handleLogoutClick()}>Logout</button>
        // <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        // <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
      <Footer />
      </>
    )
  }
}