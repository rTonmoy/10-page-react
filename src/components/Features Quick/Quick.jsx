import React from 'react'
import "./quick.css"
import client4 from "../../assets/feature14.png"
import { Col, Container, Row } from 'react-bootstrap'

const Quick = () => {
  return (
    <section id='quick'>
        <Container>
            <Row>
                <Col md={5} lg={5}>
                    <div className="inspire_left2">
                        <img src={client4} className='w-100' alt="" />
                    </div>
                </Col>

                <Col md={{span:5, offset:1}} lg={{span:6, offset:1}}>
                    <div className="inspire_right2">
                        <h5>Quick Delivery</h5>
                        <h3>Guranteed 1 week delivery for standard five pager website</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Quick