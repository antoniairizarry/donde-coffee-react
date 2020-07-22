import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Favorites.css';
import CoffeeShop from './CoffeeShop'
import {getHeaders} from '../Helpers'
import Header from './header.js';
import Footer from './footer.js'

class Favorites extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coffeeShops_array:[],
      favorited_shop_ids: []
    };
  }


  populateFavorites(){
    var shop_array = []
    console.log("here" + this.state.favorited_shop_ids)
    for (let i = 0; i < this.state.favorited_shop_ids.length; i++) {
      axios.get('http://localhost:5000/coffeeshops/' + this.state.favorited_shop_ids[i],
      {headers : getHeaders()})
      .then((response)=> {
      // console.log(response)   
       let coffeeshop = {
          id: this.state.favorited_shop_ids[i],
          image_url : response.data.coffeeshops.image_url,
          address :response.data.coffeeshops.location.display_address,
          phone: response.data.coffeeshops.display_phone,
          price : response.data.coffeeshops.price,
          rating : response.data.coffeeshops.rating,
          name : response.data.coffeeshops.name
        }
        shop_array.push(coffeeshop);
        // since axios is async meaning it does not wait for the response/then, we will just setState and re-render the page as the responses come back
        this.setState({
          coffeeShops_array : shop_array
        })
        console.log("me again" + this.state.coffeeShops_array)
      }).catch(function (error) {
        if(error.response){
          alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
        }
        console.log("Error" + error);
     })  
    }
  }

  componentDidMount() {
    //check if user has favorites already marked
    //query table, ask flask if favorite exists
    // GET '/favorites/<user_id>'
    let user_id = 1
    axios.get('http://localhost:5000/favorites/' + user_id,
    {headers : getHeaders()}
    ).then((response)=> {
      console.log("hi" +response) 
      let shop_ids_array = response.data.favorited_shop_ids
      this.setState({
        favorited_shop_ids: shop_ids_array
      })
      this.populateFavorites()
    }).catch(function (error) {
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
      }
      console.log("Error" + error);
    })  
    //loop through favorited_shop_ids
    //get business details for each via axios
    //store results into coffeeShops_array
    
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
          favorited_shop_ids={this.state.favorited_shop_ids}
          // distance={distance}
          ></CoffeeShop>
    })

    return (
      <>
      <Header />
      <div>
        {coffeshops}
      </div>
      <Footer />
      </>
    );
  }


}//class

Favorites.propTypes = {

};

export default Favorites;