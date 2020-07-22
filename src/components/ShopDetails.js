import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ShopDetails.css';
import CoffeeShop from './CoffeeShop'
import {getHeaders} from '../Helpers'

class ShopDetails extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      coffeeshop : {
        id: this.props.match.params.id,
        image_url: '',
        address: '',
        phone: '',
        price: '',
        rating: null,
        favorited_shop_ids: []
      }
    };
  }
  
  getFavorites(coffeeshop_hash){
    let user_id = 1
    axios.get('http://localhost:5000/favorites/' + user_id,
    {headers : getHeaders()}).then((response)=> {
      console.log(response) 
      coffeeshop_hash['favorited_shop_ids'] = response.data.favorited_shop_ids

      this.setState({
        coffeeshop: coffeeshop_hash
      })
    }).catch(function (error) {
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
      }
      console.log("Error" + error);
    })  
  }
  
  componentDidMount() {
    //make a call to api to display shop detail based on id
    axios.get('http://localhost:5000/coffeeshops/' + this.state.coffeeshop.id,
    {headers : getHeaders()}).then((response)=> {
      // console.log(response)   
      var coffeeshop_hash= {
        id: this.state.coffeeshop.id,
        name: response.data.coffeeshops.name,
        image_url : response.data.coffeeshops.image_url,
        address: response.data.coffeeshops.location.display_address,
        phone : response.data.coffeeshops.display_phone,
        price: response.data.coffeeshops.price,
        rating: response.data.coffeeshops.rating
      } 

      // run the next axios
      this.getFavorites(coffeeshop_hash)
    }).catch(function (error) {
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
      }
      console.log("Error" + error);
    })  
  }


  render() {

    return (
      <div>
        <CoffeeShop
          key={this.state.coffeeshop.id}
          id={this.state.coffeeshop.id}
          image_url={this.state.coffeeshop.image_url}
          name={this.state.coffeeshop.name}
          address={this.state.coffeeshop.address}
          phone={this.state.coffeeshop.phone}
          price={this.state.coffeeshop.price}
          rating={this.state.coffeeshop.rating}
          favorited_shop_ids={this.state.coffeeshop.favorited_shop_ids}
          filled={(this.state.coffeeshop.favorited_shop_ids.includes(this.props.id))? true : false}
          // distance={distance}
          ></CoffeeShop> 
      </div>
    );
  }


}//class

ShopDetails.propTypes = {

};

export default ShopDetails;