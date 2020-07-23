import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from './nathan-dumlao-I_394sxx0ec-unsplash.jpg';
import Logo from './logo-via-logohub.png';
import "./header.css";


class Header extends Component {
  render() {
    var sectionStyle = {

      backgroundImage: `url(${Background})`
    };
    return (
      //area where you paste your HTML code
      <div>
        <nav className="navbar navbar-expand-lg navbar-background" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={Logo}alt="" /></a>
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
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/about">About Us</a></li>
                  </ul>
              </div>
          </div>
        </nav>
        <header className="masthead" style={sectionStyle}>
          <div className="container">
              <div className="masthead-subheading">Welcome To</div>
              <div className="masthead-heading text-uppercase">DONDE COFFEE</div>
              {/* <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a> */}
          </div>
        </header>
      </div>
    )
  }
} export default Header;