import React from 'react'
import "./faq2.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'

const Faq2 = () => {
  return (
    <section id='faq'>
    <Container>
        <Row>
            <Col lg={4}>
                <div className="faq_left">
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </div>
            </Col>

            <Col lg={{span:7, offset:1}}>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header> <h5><span>01</span> How much time does it take?</h5></Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h5><span>02</span> What is your class naming convention?</h5></Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header> <h5><span>03</span> How do you communicate?</h5></Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><h5><span>04</span> I have a bigger project. Can you handle it?</h5></Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><h5><span>05</span> What is your class naming convention?</h5></Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Faq2