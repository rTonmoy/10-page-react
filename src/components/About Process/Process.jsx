import React from 'react'
import "./process.css"
import { Col, Container, Row } from 'react-bootstrap'
import circle from "../../assets/Circle.png"
import line from "../../assets/Line Indicator.png"

const Process = () => {
  return (
    <section id='process'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="process_head text-center">
                        <h2>The process we follow</h2>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={6} lg={3}>
                <div className="process_item">
                        <div className="process_img">
                            <img src={circle} alt="" />
                            <img src={line} alt="" />
                        </div>
                        <div className="process_text">
                            <h4>Planning</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                <div className="process_item">
                        <div className="process_img">
                            <img src={circle} alt="" />
                            <img src={line} alt="" />
                        </div>
                        <div className="process_text">
                            <h4>Conception</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                <div className="process_item">
                        <div className="process_img">
                            <img src={circle} alt="" />
                            <img src={line} alt="" />
                        </div>
                        <div className="process_text">
                            <h4>Design</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} lg={3}>
                <div className="process_item">
                        <div className="process_img">
                            <img src={circle} alt="" />
                            <img src={line} alt="" />
                        </div>
                        <div className="process_text">
                            <h4>Development</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Process