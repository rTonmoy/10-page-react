import React from 'react'
import "./benefit.css"
import feature6 from "../../assets/feature6.png"
import feature3 from "../../assets/feature3.png"
import feature1 from "../../assets/feature1.png"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"
import logo6 from "../../assets/logo6.png"
import logo7 from "../../assets/logo7.png"
import { Col, Container, Row } from 'react-bootstrap'

const Benefit = () => {
  return (
    <section id='benefit'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="benefit_head text-center">
                        <h2>The benefits of working with us</h2>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={6} lg={4}>
                    <div className="benefit_item">
                        <div className="feature_item_img"><img src={feature6} alt="" /></div>
                        <h4>Customize with ease</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>

                <Col xs={6} lg={4}>
                    <div className="benefit_item">
                        <div className="feature_item_img"><img src={feature3} alt="" /></div>
                        <h4>Perfectly Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>

                <Col lg={4} className='d-none d-lg-block'>
                    <div className="benefit_item">
                        <div className="feature_item_img"><img src={feature1} alt="" /></div>
                        <h4>Friendly Support</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={6} lg={2}>
                    <div className="benefit_logo">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="benefit_logo2">
                        <img src={logo7} alt="" />
                    </div>
                </Col>

                <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo2} alt="" /></div></Col>
                <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo3} alt="" /></div></Col>
                <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo4} alt="" /></div></Col>
                <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo5} alt="" /></div></Col>
                <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo6} alt="" /></div></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Benefit