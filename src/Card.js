import React from 'react'
import {Row, Col, Button, Badge} from 'react-bootstrap'

function Card() {
    return (
        <div style={{
            backgroundColor: '#040b38',
            color: 'white',
        }}>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <div class="text-center">
                        <h1><u>1</u></h1>
                        <h1>Why Lyst?</h1>
                        <br></br>
                        <p>Shop the world's biggest and best selection of fashion</p>
                        <br></br>
                        <p>Compare prices from thousands of stores</p>
                        <br></br>
                        <p>Hit the heart to track deals and receive personalized alerts</p>
                    </div>
                </Col>
                <Col>
                    <div class="text-center">
                        <h1><u>1</u></h1>
                        <h1>Why Lyst?</h1>
                        <br></br>
                        <p>Shop the world's biggest and best selection of fashion</p>
                        <br></br>
                        <p>Compare prices from thousands of stores</p>
                        <br></br>
                        <p>Hit the heart to track deals and receive personalized alerts</p>
                        <Button variant="outline-secondary" size="lg">Sign Up</Button>
                    </div>
                </Col>
                <Col>
                    <div class="text-center">
                        <h1><u>1</u></h1>
                        <h1>Why Lyst?</h1>
                        <br></br>
                        <p>Shop the world's biggest and best selection of fashion</p>
                        <br></br>
                        <p>Compare prices from thousands of stores</p>
                        <br></br>
                        <p>Hit the heart to track deals and receive personalized alerts</p>
                    </div>
                </Col>
            </Row>
            <br></br>
            <br></br>
        </div>
    )
}

export default Card
