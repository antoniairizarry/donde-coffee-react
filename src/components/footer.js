import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import './footer.css'; 

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-4">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-4 text-lg-left">Copyright © Kate + Antonia 2020</div>
              <div className="col-lg-4 my-3 my-lg-0">
                  <a href="https://github.com/katemyer/donde_coffee" target="_blank" rel="noopener noreferrer">
                    <img className='githubIcon' src="../img/githubk.png" alt='' /></a>
                  <a href="https://github.com/antoniairizarry/donde-coffee-react" target="_blank" rel="noopener noreferrer">
                    <img className='githubIcon' src="../img/githuba.jpeg" alt='' /></a>
              </div>
              <div className="col-lg-4 text-lg-right">
             
              </div>
          </div>
      </div>
      </footer>
      )
    }
  } export default Footer;