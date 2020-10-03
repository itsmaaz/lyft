import React from 'react'
import {Row, Col, Image, Card, CardGroup} from 'react-bootstrap'
import Men from './menShopping1.jpg';

function ArticleCards() {
    return (
        <div>
          <CardGroup>
            <Card>
            <Card.Img variant="top" src={Men} />
            <Card.Body>
              <Card.Title>Introducing RIMOWA Essential Desert Rose</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={Men} />
            <Card.Body>
            <Card.Title>Introducing RIMOWA Essential Desert Rose</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Men} />
              <Card.Body>
              <Card.Title>Introducing RIMOWA Essential Desert Rose</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              </Card.Body>
    
            </Card>
          </CardGroup>
        </div>
    )
}

export default ArticleCards
