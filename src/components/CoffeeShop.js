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
    let base_url = "/search/"+ this.props.id 

    return (
      <div className='coffeeshop-card'>
        <a href={base_url}><div className='coffeeshop-image-url'><img src={this.props.image_url}/></div></a>
        <a href={base_url}><div className='coffeeshop-name'>{this.props.name}</div></a>
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