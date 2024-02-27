import React from 'react'
import "./Tab.css"
import { Col, Container, Row } from 'react-bootstrap'

const Tab = () => {
  return (
    <section id='tab'>
        <Container>
            <Row>
                <Col lg={{span:9, offset:2}}>
                    <div className="tab_border1"></div>
                        <div className="tab_list">
                            <ul>
                                <li><a href="#">Keywords</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">UI/UX </a></li>
                                <li><a href="#">Wireframing</a></li>
                                <li><a href="#">Branding</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">webflow</a></li>
                            </ul>
                        </div>
                    <div className="tab_border2"></div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Tab