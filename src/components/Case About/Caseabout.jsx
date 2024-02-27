import React from 'react'
import "./caseabout.css"
import cover3 from "../../assets/casecover2.png"
import point from "../../assets/casepoint.png"
import { Col, Container, Row } from 'react-bootstrap'

const Caseabout = () => {
  return (
    <section id='about2'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                <div className="about_text">
                        <h2>About the project</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="about_text_btm1">
                            <img src={point} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="about_text_btm2">
                        <img src={point} alt="" /> <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </div>
                        <div className="about_text_btm3">
                        <img src={point} alt="" /><p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>  
                        </div>
                        <div className="about_text_btm4">               
                        <img src={point} alt="" /> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                        </div>
                                             
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="about_img text-center">
                        <img src={cover3} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={8}>
                <div className="about_text">
                        <h2>How we do it</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="about_text_btm1">
                        <img src={point} alt="" /> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="about_text_btm2">
                        <img src={point} alt="" /> <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </div>
                        <div className="about_text_btm3">
                        <img src={point} alt="" /><p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>  
                        </div>
                        <div className="about_text_btm4">               
                        <img src={point} alt="" /><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                        </div>
                                             
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Caseabout