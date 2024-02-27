import React from 'react'
import "./goal.css"
import goal from "../../assets/aboutgoal.png"
import { Col, Container, Row } from 'react-bootstrap'

const Goal = () => {
  return (
    <section id='goal'>
        <Container>
            <div className="container2">
            <Row>
                <Col lg={6}>
                    <div className="goal_left">
                        <h5>Who we are</h5>
                        <h2>Goal focussed</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="goal_right">
                        <h2>Continuous improvement</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
            </Row>
            </div>

            <Row>
                <Col lg={12}>
                    <div className="goal_btm">
                        <img src={goal} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Goal