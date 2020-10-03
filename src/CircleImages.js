import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

function CircleImages() {
    return (
        <div>
            <Container fluid>
                <br></br>
                <br></br>
                <Row>
                     <Col><Image src="https://cdna.lystit.com/cms/4199_974866265_a2b9bbcc57.jpeg" roundedCircle /></Col>
                     <Col><Image src="https://cdna.lystit.com/cms/5844_777573614_f1c780e8e7.jpeg" roundedCircle /></Col>
                     <Col><Image src="https://cdna.lystit.com/cms/5844_777573614_f1c780e8e7.jpeg" roundedCircle /></Col>
                     <Col><Image src="https://cdna.lystit.com/cms/4199_974866265_a2b9bbcc57.jpeg" roundedCircle /></Col>
                     <Col><Image src="https://cdna.lystit.com/cms/5844_777573614_f1c780e8e7.jpeg" roundedCircle /></Col>
                     <Col><Image src="https://cdna.lystit.com/cms/4199_974866265_a2b9bbcc57.jpeg" roundedCircle /></Col>
                </Row>
                <br></br>
                <br></br>
            </Container>
        </div>
    )
}

export default CircleImages
