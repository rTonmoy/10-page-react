import React from 'react'
import "./banner3.css"
import { Col, Container, Row } from 'react-bootstrap'
import banner3 from "../../assets/banner3.png"

const Banner3 = () => {
  return (
    <section id='banner3'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="banner_left">
                        <h1>All the features you need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="banner_button">
                            <a href="#">View Pricing</a>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="banner_right">
                        <img src={banner3} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner3