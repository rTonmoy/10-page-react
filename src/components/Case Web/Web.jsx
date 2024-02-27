import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./web.css"
import cover1 from "../../assets/casecover.png"
import cover2 from "../../assets/casecover2.png"

export const Web = () => {
  return (
    <section id='web'>
        <Container>
            <Row>
               <Col lg={{span:9, offset:1}}>
                    <div className="web_text">
                        <h5>Web design and development</h5>
                        <h1>Finsweet Design case studies</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={10}>
                    <div className="web_img text-center">
                        <img src={cover1} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={{span:3, offset:1}}>
                    <div className="web_item">
                        <h5>Client</h5>
                        <h3>facebook.com</h3>
                    </div>
                </Col>

                <Col lg={3}>
                    <div className="web_item">
                        <h5>Service</h5>
                        <h3>Product Design</h3>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="web_item">
                        <h5>Deliverable</h5>
                        <h3>UI Screens, UX Flow & Prototype</h3>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={10}>
                    <div className="web_border text-center">

                     </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
