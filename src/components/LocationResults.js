import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './LocationResults.css';
import CoffeeShop from './CoffeeShop'

class LocationResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      coffeeShops:[]
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
    axios.get('http://localhost:5000/coffeeshops?location=' + this.state.value).then((response) => {
      console.log(response)
      this.setState({
        coffeeShops : response.data.shops
    })
    //parse out the json response
  })
}


  render() {
    const shops = this.state.coffeeShops.map((coffeeshop, i) => {
      let name = coffeeshop.name 
      let address = coffeeshop.address
      let phone = coffeeshop.phone
      return <CoffeeShop
          key={i}
          name={name}
          address={address}
          phone={phone}
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

        {this.state.value}
        {shops}
      </div>
    );
  }


}//class

LocationResults.propTypes = {

};

export default LocationResults;