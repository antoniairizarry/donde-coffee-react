import React, { useState } from 'react';
import { Form, Input, Rating, Button } from 'semantic-ui-react';
import CoffeeShop from './CoffeeShop'

export const ReviewForm = ({onNewReview}) => {
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(1)
  const [user_id, setUserID] = useState('')
  const [shop_id, setShopID] = useState('')

  return(
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
          onClick={async () => {
            const review = { body, user_id, shop_id };
            const url = new URL("http://localhost:5000/review")
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(review)
            });

            if (response.ok) {
              console.log("response worked!");
              onNewReview(review);
              setBody("");
              
            }
          }}
        >
          submit
        </Button>
      </Form.Field>
    </Form>
  );
}

export default ReviewForm;