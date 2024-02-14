import React from 'react';
import { Container, Button } from 'react-bootstrap';

const NoPage = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1">Oops!</h1>
      <p className="lead">It looks like you found the mystery spot of the internet.</p>
      <img src="https://via.placeholder.com/468x300?text=404+Page+Not+Found" alt="404 Not Found" className="img-fluid my-4" />
      <p>We can't find the page you're looking for, but we can offer you a joke to lighten the mood:</p>
      <p className="font-italic">"Why was the computer cold? It left its Windows open!"</p>
      <Button variant="primary" href="/">
        Return Home
      </Button>
    </Container>
  );
};

export default NoPage;
