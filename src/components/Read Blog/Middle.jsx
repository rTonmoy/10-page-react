import React from 'react'
import "./middle.css"
import cover10 from "../../assets/blogg1.png"
import cover12 from "../../assets/readblog2.jpg"

import { Col, Container, Row } from 'react-bootstrap'

const Middle = () => {
  return (
    <section id='middle'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="mdl_top_txt text-center">
                        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <h6>Andrew Jonson Posted on 27th January 2021</h6>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <div className="middle_img">
                        <img src={cover10} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={8}>
                <div class="middle_btm">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span>Excepteur sint occaecat</span> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h2>Ut enim ad minim veniam, quis nostrud.</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <span>cupidatat non </span> proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span>exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <img src={cover12} alt="" />

                        <h2>Ut enim ad minim veniam, quis nostrud.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span>exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Middle