import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import './CoffeeShop.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {getHeaders} from '../Helpers'

class CoffeeShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filled: false
    };
  }
  componentDidMount() {
   
    //check if user has favorites already marked
    //query table, ask flask if favorite exists
    // GET '/favorites/<user_id>'
    // let user_id = 1
    // axios.get('http://localhost:5000/favorites/' + user_id).then((response)=> {
    //   console.log(response) 
    //   let shop_ids_array = response.data.favorited_shop_ids
    //   // if yelpID exists == filledcup 
    //   //loop through shop_ids
    //     // Check if a value exists in the shop id array
    //     // else, emptycup
    //     if(shop_ids_array.includes(this.props.id)){
    //       this.setState({ filled: true });
    //    } else{
    //       this.setState({ filled: false });
    //    }  
    // });  


  if(this.props.favorited_shop_ids.includes(this.props.id)){
      this.setState({ filled: true });
   } else{
      this.setState({ filled: false });
   }  
}

  handleClick = () => {
    this.setState({ filled: !this.state.filled });
    axios.post("http://localhost:5000/togglefavorite", {      
        user_id: 1,
        shop_id: this.props.id
    },
    {headers : getHeaders()})
    .then(response => {
      console.log(response);
    }).catch(function (error) {
      alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data.msg )
      console.log(error);
    })
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
        <div onClick={this.handleClick} >
          <FontAwesomeIcon icon={this.state.filled ? fasHeart : faHeart}/>
        </div>
      </div>
    );
  }


}//class

CoffeeShop.propTypes = {

};

export default CoffeeShop;