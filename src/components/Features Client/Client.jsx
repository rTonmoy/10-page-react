import React from 'react'
import "./client.css"
import client1 from "../../assets/feature11.png"
import { Col, Container, Row } from 'react-bootstrap'

const Client = () => {
  return (
    <section id='client'>
        <Container>
            <Row>
                <Col md={6} lg={6}>
                    <div className="inspire_left">
                        <h5>Use Client-first</h5>
                        <h3>Top agencies and freelancers around the world use 
                            Client-first </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                </Col>

                <Col md={{span:5, offset:1}} lg={{span:5, offset:1}}>
                    <div className="inspire_right">
                        <img src={client1} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Client