import React from 'react'
import "./Inspire.css"
import inspire1 from "../../assets/inspire1.png"
import inspire2 from "../../assets/inspire2.png"
import { Col, Container, Row } from 'react-bootstrap'

const Inspire = () => {
  return (
    <section id='inspire'>
        <Container>
            <Row>
                <Col md={6} lg={6}>
                    <div className="inspire_left">
                        <h5>Our Mission </h5>
                        <h3>Inspire, Innovate, Share</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col md={{span:5, offset:1}} lg={{span:5, offset:1}}>
                    <div className="inspire_right">
                        <img src={inspire1} className='w-100' alt="" />
                    </div>
                </Col>

                <Col md={5} lg={5}>
                    <div className="inspire_left2">
                        <img src={inspire2} className='w-100' alt="" />
                    </div>
                </Col>

                <Col md={{span:5, offset:1}} lg={{span:6, offset:1}}>
                    <div className="inspire_right2">
                        <h5>Our Mission </h5>
                        <h3>Inspire, Innovate, Share</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Inspire