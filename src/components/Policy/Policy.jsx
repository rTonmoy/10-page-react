import React from 'react'
import "./policy.css"
import { Col, Container, Row } from 'react-bootstrap'

const Policy = () => {
  return (
    <section id='privacy'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="privacy_top text-center">
                        <h2>Privacy Policy</h2>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your  </p>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={8}>
                <div class="privacy_btm">
                        <h2>Lorem ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span> Excepteur sint occaecat</span> cupidatat non proident.</p>

                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <span>cupidatat</span> non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Policy