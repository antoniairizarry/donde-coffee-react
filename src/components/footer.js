import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-4">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-4 text-lg-left">Copyright © Kate + Antonia 2020</div>
              <div className="col-lg-4 my-3 my-lg-0">
                  <a className="btn btn-dark btn-social mx-2" href="https://github.com/katemyer/donde_coffee" img src="../img/githubk.png" target="_blank"><i className="fab fa-github"></i></a>
                  <a className="btn btn-dark btn-social mx-2" href="https://github.com/antoniairizarry/donde-coffee-react" img src="../img/githuba.jpeg" target="_blank"><i className="fab fa-github"></i></a>
              </div>
              <div className="col-lg-4 text-lg-right">
             
              </div>
          </div>
      </div>
      </footer>
      )
    }
  } export default Footer;