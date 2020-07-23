import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Reviews.css';
import {getHeaders} from '../Helpers'
import Header from './header.js';
import Footer from './footer.js'
import { Form, Button, Container, Row, Card, CardGroup, Grid, Col, CardDeck} from 'react-bootstrap'

class Reviews extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }



  componentDidMount() {
    //check if user has favorites already marked
    //query table, ask flask if favorite exists
    // GET '/favorites/<user_id>'
    let url = 'http://localhost:5000/userreviews/'
    if (!this.props.isUserReviews){
      url = 'http://localhost:5000/shopreviews/' + this.props.shop_id
    }
    axios.get(url,
    {headers : getHeaders()}
    ).then((response)=> {
      console.log("hi" +response) 
      
      this.setState({
        reviews:  response.data.reviews
      })
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
    const reviews = this.state.reviews.map((review, i) => {
      
      return <div key={i}>
        <Card border="info" style={{ width: '20rem' }}>
        
        <Card.Img className="shopImage" variant="top" src={review.image_url} />
        <Card.Body>
          <Card.Title>{review.shop_name}</Card.Title>
          <Card.Text>{review.body}</Card.Text>
        </Card.Body>
        </Card>
        
        <br></br>
        <br></br>
        </div>
    })

    return (
      <>

      <br></br>
      <h1>Your Reviews</h1>
      <br></br>
      <div className="wrapper" >
      <CardDeck>

        {reviews}
        </CardDeck>
        </div>

      </>
    );
  }


}//class

Reviews.propTypes = {

};

export default Reviews;