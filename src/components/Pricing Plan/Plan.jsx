import React from 'react'
import "./plan.css"
import { Col, Container, Row } from 'react-bootstrap'
import { BsCaretRightFill } from "react-icons/bs";

const Plan = () => {
  return (
    <section id='plan'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="plan_head text-center">
                        <h1>Our Pricing Plans</h1>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life without coding them.</p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="plan_item">
                    <div className="plan_text">
                            <h2>$299 <span>Per Design</span></h2>
                            <h3>Landing Page</h3>
                            <p>When you’re ready to go beyond prototyping in Figma,</p>
                        </div>

                            <ul>
                                <li><a href="#"><i><BsCaretRightFill /></i>All limited links</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Own analytics platform</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Chat support</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Optimize hashtags</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Unlimited users</a></li>
                            </ul>

                       <div className="plan_anchore">
                        <a href="#">Get started</a>
                       </div>
                     </div>
                </Col>
                <Col lg={4}>
                <div className="plan_item">
                    <div className="plan_text">
                            <h2>$399 <span>Multi Design</span></h2>
                            <h3>Website Page </h3>
                            <p>When you’re ready to go beyond prototyping in Figma,</p>
                        </div>

                            <ul>
                                <li><a href="#"><i><BsCaretRightFill /></i>All limited links</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Own analytics platform</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Chat support</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Optimize hashtags</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Unlimited users</a></li>
                            </ul>

                       <div className="plan_anchore">
                        <a href="#">Get started</a>
                       </div>
                     </div>
                </Col>
                <Col lg={4}>
                <div className="plan_item">
                    <div className="plan_text">
                            <h2>$499 + <span>Per Design</span></h2>
                            <h3>Complex Project</h3>
                            <p>When you’re ready to go beyond prototyping in Figma,</p>
                        </div>

                            <ul>
                                <li><a href="#"><i><BsCaretRightFill /></i>All limited links</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Own analytics platform</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Chat support</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Optimize hashtags</a></li>
                                <li><a href="#"><i><BsCaretRightFill /></i>Unlimited users</a></li>
                            </ul>

                       <div className="plan_anchore">
                        <a href="#">Contact us</a>
                       </div>
                     </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Plan