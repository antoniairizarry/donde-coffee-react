import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ShopDetails.css';
import CoffeeShop from './CoffeeShop'

class ShopDetails extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name : null
    };
    this.id = this.props.match.params.id
    this.image_url = ''
    this.address = ''
    this.phone = ''
    this.price = ''
    this.rating = null
  

  }
  
  componentDidMount() {
      //make a call to api to display shop detail based on id
      axios.get('http://localhost:5000/coffeeshops/' + this.id).then((response)=> {
        console.log(response)   
        this.image_url = response.data.coffeeshops.image_url
        this.address = response.data.coffeeshops.location.display_address
        this.phone = response.data.coffeeshops.display_phone
        this.price = response.data.coffeeshops.price
        this.rating = response.data.coffeeshops.rating
        this.setState({name: response.data.coffeeshops.name})
      })
  }

  render() {

    return (
      <div>
        <CoffeeShop
          key={this.id}
          id={this.id}
          image_url={this.image_url}
          name={this.state.name}
          address={this.address}
          phone={this.phone}
          price={this.price}
          rating={this.rating}
          // distance={distance}
          ></CoffeeShop>
      </div>
    );
  }


}//class

ShopDetails.propTypes = {

};

export default ShopDetails;