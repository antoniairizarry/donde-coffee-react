import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      //area where you paste your HTML code
      <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="../img/logo-via-logohub.png" alt="" /></a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars ml-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/dashboard">Dashboard</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/search">Search</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/reviews">Reviews</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/favorites">Favorites</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
          <header class="masthead">
          <div class="container">
              <div class="masthead-subheading">Welcome To Our Studio!</div>
              <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
              <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
      </header>
      </>
    )
  }
} export default Header;