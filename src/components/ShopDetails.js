import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ShopDetails.css';
import CoffeeShop from './CoffeeShop'
// https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
import emptycup from '../images/emptycup.jpeg';
import filledcup from '../images/filledcup.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

class ShopDetails extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name : null,
      filled: false
    };
    this.id = this.props.match.params.id
    this.image_url = ''
    this.address = ''
    this.phone = ''
    this.price = ''
    this.rating = null
    this.cupIcon = emptycup
  
  }
  
  componentDidMount() {
      //make a call to api to display shop detail based on id
      axios.get('http://localhost:5000/coffeeshops/' + this.id).then((response)=> {
        // console.log(response)   
        this.image_url = response.data.coffeeshops.image_url
        this.address = response.data.coffeeshops.location.display_address
        this.phone = response.data.coffeeshops.display_phone
        this.price = response.data.coffeeshops.price
        this.rating = response.data.coffeeshops.rating
        this.setState({name: response.data.coffeeshops.name})
      })
      //determine when cup is filled
      //query table, ask flask if favorite exists
      // GET '/favorites/<user_id>'
      let user_id = 1
      axios.get('http://localhost:5000/favorites/' + user_id).then((response)=> {
        console.log(response) 
        let shop_ids_array = response.data.favorited_shop_ids
        // if yelpID exists == filledcup 
        //loop through shop_ids
          // Check if a value exists in the shop id array
          // else, emptycup
          if(shop_ids_array.includes(this.id)){
            this.setState({ filled: true });
         } else{
            this.setState({ filled: false });
         }  
      });  
  }

  myFunction(x) {
    console.log("here")
    x.classList.toggle("fa-heart-o");
  }

  handleClick = () => {
    this.setState({ filled: !this.state.filled });
    axios.post("http://localhost:5000/togglefavorite", {      
        user_id: 1,
        shop_id: this.id
    },)
    .then(response => {
      console.log(response);
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
          <div onClick={this.handleClick} >
            <FontAwesomeIcon icon={this.state.filled ? fasHeart : faHeart}/>
          </div>
      </div>
    );
  }


}//class

ShopDetails.propTypes = {

};

export default ShopDetails;