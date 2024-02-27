import React from 'react'
import "./aboutbann.css"
import { Col, Container, Row } from 'react-bootstrap'
import bann from "../../assets/aboutbann.png"

const Aboutbann = () => {
  return (
    <section id="banner2">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="bannner_left">
                        <h5>About us</h5>
                        <h1>Our designs solve problems</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="banner_right">
                        <img src={bann} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Aboutbann