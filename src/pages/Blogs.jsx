import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Blogs = () => {
  const blogs = [
    { id: 1, title: "Blogger post", summary: "Summary ...", content: "..." },
    { id: 2, title: "Blog meaw", summary: "Summary ...", content: "..." },
  ];

  return (
    <Accordion defaultActiveKey="0" className="mt-3">
      {blogs.map((blog, index) => (
        <Card key={blog.id}>
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header>{blog.title}</Accordion.Header>
            <Accordion.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.summary}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      ))}
    </Accordion>
  );
}

export default Blogs;
