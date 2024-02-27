import React from 'react'
import "./benefit2.css"
import logo8 from "../../assets/logo1.png"
import logo9 from "../../assets/logo2.png"
import logo10 from "../../assets/logo3.png"
import logo11 from "../../assets/logo4.png"
import logo12 from "../../assets/logo5.png"
import logo13 from "../../assets/logo6.png"
import logo14 from "../../assets/logo7.png"
import feature6 from "../../assets/feature6.png"
import feature3 from "../../assets/feature3.png"
import feature1 from "../../assets/feature1.png"
import { Col, Container, Row } from 'react-bootstrap'

const Benefit2 = () => {
  return (
    <section id='benefit2'>
      <Container>
        <Row>
          <Col xs={6} lg={2}>
            <div className="benefit_logo">
               <img src={logo8} alt="" />
            </div>
            <div className="benefit_logo2">
              <img src={logo14} alt="" />
            </div>
          </Col>
          <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo9} alt="" /></div></Col>
          <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo10} alt="" /></div></Col>
          <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo11} alt="" /></div></Col>
          <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo12} alt="" /></div></Col>
          <Col xs={6} lg={2}><div className="benefit_logo3"><img src={logo13} alt="" /></div></Col>

        </Row>

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
                        <div class="feature_item_img"><img src={feature3} alt="" /></div>
                        <h4>Perfectly Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
          </Col>
          <Col lg={4} className='d-none d-lg-block'>
          <div className="benefit_item">
                        <div class="feature_item_img"><img src={feature1} alt="" /></div>
                        <h4>Friendly Support</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefit2