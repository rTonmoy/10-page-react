import React from 'react'
import "./Work1.css"
import social from "../../assets/aboutsocial.png"
import { Col, Container, Row } from 'react-bootstrap'

const Work1 = () => {
  return (
    <section id='portfolio'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="portfolio_content text-center">
                        <h5>What we created</h5>
                        <h2>Our Work Portfolio</h2>
                        <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                        <img src={social} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work1