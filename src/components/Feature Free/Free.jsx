import React from 'react'
import "./free.css"
import client2 from "../../assets/feature12.png"
import { Col, Container, Row } from 'react-bootstrap'

const Free = () => {
  return (
   <section id='free'>
    <Container>
    <Row>
            <Col md={5} lg={5}>
                <div className="inspire_left2">
                        <img src={client2} className='w-100' alt="" />
                </div>
            </Col>

            <Col md={{span:5, offset:1}} lg={{span:6, offset:1}}>
                <div className="inspire_right2">
                        <h5>Free Revision Rounds</h5>
                        <h3>Get free Revisions and one week of free maintenance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Free