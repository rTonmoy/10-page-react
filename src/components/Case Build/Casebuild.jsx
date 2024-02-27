import React from 'react'
import "./casebuild.css"
import { Col, Container, Row } from 'react-bootstrap'

const Casebuild = () => {
  return (
    <section id='build2'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={7}>
                    <div className="build_text text-center">
                        <h2>Let's build something great together</h2>
                        <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                        <a href="#">Contact Us</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Casebuild