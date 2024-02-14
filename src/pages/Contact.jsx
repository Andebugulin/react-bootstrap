import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, like sending the data to an API
    alert('Message sent!'); // Placeholder action
  };

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          
          <Button variant="primary" type="submit" className="mt-3">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Contact;
