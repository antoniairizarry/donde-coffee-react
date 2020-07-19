import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './LocationResults.css';
import CoffeeShop from './CoffeeShop'
import {getHeaders} from '../Helpers'

class LocationResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '', 
      coffeeShops_array:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //after clicking ok, call Flask API (GET /coffeeshops)
    //ADDING AUTH HEADERS == TOKEN LIVES HERE
    axios.get('http://localhost:5000/coffeeshops?location=' + this.state.value,
    //SECOND PARAM OF .get using helper fx 
    {headers : getHeaders()}
    ).then((response) => {
      console.log(response)
      this.setState({
        coffeeShops_array : response.data.coffeeshops
      })
    }).catch(function (error) {
    // handle error
      console.log(error);
    })
  }

  render() {
    const coffeshops = this.state.coffeeShops_array.map((coffeeshop, i) => {
      let id = coffeeshop.id
      let image_url = coffeeshop.image_url
      let name = coffeeshop.name 
      let address = coffeeshop.address
      let phone = coffeeshop.phone
      let price = coffeeshop.price
      let rating = coffeeshop.rating
      // let distance = coffeeshop.distance
      
      return <CoffeeShop
          key={i}
          id={id}
          image_url={image_url}
          name={name}
          address={address}
          phone={phone}
          price={price}
          rating={rating}
          // distance={distance}
          ></CoffeeShop>
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="OK" />
      </form>
        {/* {this.state.value} */}
        {coffeshops}
      </div>
    );
  }


}//class

LocationResults.propTypes = {

};

export default LocationResults;