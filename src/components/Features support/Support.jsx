import React from 'react'
import "./support.css"
import client3 from "../../assets/feature13.png"
import { Col, Container, Row } from 'react-bootstrap'

const Support = () => {
  return (
    <section id='support'>
        <Container>
            <Row>
                <Col md={6} lg={6}>
                    <div className="inspire_left">
                        <h5>24/7 Support</h5>
                        <h3>Working with us, you will be getting 24/7 priority support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>

                <Col md={{span:5, offset:1}} lg={{span:5, offset:1}}>
                   <div className="inspire_right">
                        <img src={client3} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Support