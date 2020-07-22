import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './LocationResults.css';
import CoffeeShop from './CoffeeShop'
import {getHeaders} from '../Helpers'
import Header from './header.js';
import Footer from './footer.js'
import { Form, Button, Container } from 'react-bootstrap'

class LocationResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '', 
      coffeeShops_array:[],
      favorited_shop_ids: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    }).catch(function (error) {
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
      }
      console.log("Error" + error);
    })  
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
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data )
      }
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
          favorited_shop_ids={this.state.favorited_shop_ids}
          // distance={distance}
          ></CoffeeShop>
    })

    return (
      <div  >
        <Header />
        <div className="wrapper" >
        <aside className="aside aside-1"></aside>

          <div className='main'>
            <Container fluid="sm">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formSearch">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter Zip Code" />
                  <Form.Text className="text-muted">Coffee Time! </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Container>
            {coffeshops}
          </div>
        
        <aside className="aside aside-2"></aside>
        </div>
        <Footer className="footer" />
      </div>
    );
  }


}//class

LocationResults.propTypes = {

};

export default LocationResults;