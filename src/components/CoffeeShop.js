import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import './CoffeeShop.css';

class CoffeeShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {


    return (
      <div className='coffeeshop-card'>
        <div className='coffeeshop-image_url'>{this.props.image_url}</div>
        <div className='coffeeshop-name'>{this.props.name}</div>
        <div className='coffeeshop-address'>{this.props.address}</div>
        <div className='coffeeshop-phone'>{this.props.phone}</div>
        <div className='coffeeshop-price'>{this.props.price}</div>
        <div className='coffeeshop-rating'>{this.props.rating}</div>
        {/* <div className='coffeeshop-distance'>{this.props.distance}</div> */}
      </div>
     
    );
  }


}//class

CoffeeShop.propTypes = {

};

export default CoffeeShop;