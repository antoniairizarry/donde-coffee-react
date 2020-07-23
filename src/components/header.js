import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      //area where you paste your HTML code
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="/"><img src="../img/logo-via-logohub.png" alt="" /></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars ml-1"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/register">Register</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login">Login</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/search">Search</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/reviews">Reviews</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/favorites">Favorites</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/about">About</a></li>
                  </ul>
              </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container">
              <div className="masthead-subheading">Welcome To Our Studio!</div>
              <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          </div>
        </header>
      </div>
    )
  }
} export default Header;