import React, { useState } from 'react';
import { Form, Input, Rating, Button } from 'semantic-ui-react';
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
    <Header />
    <Form>
      <Form.Field>
        <Input placeholder="Enter your review!" value={body}
        onChange={e => setBody(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <Rating icon='star' value={rating} maxRating={5} onRate={(_, data) => {
          console.log(data);
        }} />
        </Form.Field>
      <Form.Field>
        <Button
          onClick={handleClick}
        >
          submit
        </Button>
      </Form.Field>
    </Form>
    <Footer />
      </>
  );
}

export default ReviewForm;