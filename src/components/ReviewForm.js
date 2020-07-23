import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';
import { Form, Button, Container } from 'react-bootstrap'
import CoffeeShop from './CoffeeShop'
import Header from './header.js';
import Footer from './footer.js'
import {getHeaders} from '../Helpers'
import axios from 'axios';


export const ReviewForm = (props) => {
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(1)
  const [user_id, setUserID] = useState(-1)
  const [shop_id, setShopID] = useState('')

  function handleClick(){
    console.log('postingreview')
    // POST
    axios.post("http://localhost:5000/review", {      
      user_id: user_id,
      shop_id: props.shop_id,
      body: body,
      rating: rating
    },
    {headers : getHeaders()})
    .then(response => {
      console.log(response);
      alert("Review Accepted, please refresh to see it!")
      window.location.reload();
    }).catch(function (error) {
      if(error.response){
        alert(error.response.status + ":" +error.response.statusText + ":"+ error.response.data.msg )
      }
      console.log(error);
    })
  }

  return(
    <>

      <Container className="formPadding" fluid="sm">
        <Form onSubmit={handleClick}>
          <Form.Group controlId="formSearch">
            <Form.Label>Review Form</Form.Label>
            <Form.Control type="text" value={body} onChange={e => setBody(e.target.value)} placeholder="Enter your review!" />
            <Rating icon='star' value={rating} maxRating={5} onRate={(_, data) => {
          console.log(data);
        }} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>


      </>
  );
}

export default ReviewForm;