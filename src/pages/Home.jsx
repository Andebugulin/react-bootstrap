import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

function Home() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowSuccess(true); // handle some logic here, like sending the email to an API
    setEmail('');
  };

  return (
    <div className="p-4">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Welcome to Our Site!</Card.Title>
          <Card.Text>
            Subscribe to our newsletter to stay updated with the latest news and special offers.
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Subscribe
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          You have successfully subscribed to our newsletter!
        </Alert>
      )}
    </div>
  );
}

export default Home;