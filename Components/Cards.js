import React from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from 'react-bootstrap';

function Displaycard() {
  return (
    <div>
      

<Row xs={1} md={3} className="g-4 m-0 p-0">

{Array.from({ length: 6 }).map((_, idx) => (
  <Col>
    <Card>
      <Card.Img variant="top" className='m-0' src={require("../Images/card2.jpg")} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit longer.
        </Card.Text>
        <span>
        <Button variant="primary" style={{margin:"5px"}}>Update</Button>
        <Button variant="primary" style={{margin:"5px"}}>Delete</Button>
        </span>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>

    </div>
  )
}













export default Displaycard
