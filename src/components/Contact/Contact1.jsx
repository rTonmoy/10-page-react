import React from 'react'
import "./contact1.css"
import { Col, Container, Row } from 'react-bootstrap'

const Contact1 = () => {
  return (
    <section id='contact'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="contact_top text-center">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={10}>
                <div class="contact_form">
                        <div className="inp1">
                            <h4>Name</h4>
                            <input className='input1' type="text" placeholder="Enter your name" />
                        </div>
                        <div className="inp2">
                            <h4>Email</h4>
                            <input class="input2" type="text" placeholder="Enter your Emial"/>
                        </div>
                        <div className="inp3">
                            <h4>Subject</h4>
                            <input class="input3" type="text" placeholder="Provide context"/>
                        </div>
                        <div className="inp4">
                            <h4>Subject</h4>
                            <input class="input4" type="text" placeholder="Select Subject"/>
                        </div>
                        <div className="inp5">
                            <h4>Message</h4>
                            <input class="input5" type="text" placeholder="Write your  question here"/>
                        </div>
                       <div className="anch">
                        <a href="#">Send Messege</a>
                       </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact1