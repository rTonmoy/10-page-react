import React from 'react'
import "./team.css"
import team1 from "../../assets/aboutteam1.png"
import team2 from "../../assets/aboutteam2.png"
import team3 from "../../assets/aboutteam3.png"
import team4 from "../../assets/aboutteam4.png"
import social from "../../assets/aboutsocial.png"
import gradient from "../../assets/aboutgradient.png"
import { Col, Container, Row } from 'react-bootstrap'

const Team = () => {
  return (
    <section id='team'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={4}>
                    <div className="team_head text-center">
                        <h3>Meet our team</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} lg={3}>
                   <div className="team_item text-center">
                            <img src={team1} alt="" />
                            <div className="about_overlay">
                                <img src={gradient} alt="" />
                            </div>
                        <div className="about_icon">
                            <img src={social} alt="" />
                        </div>
                        <div className="about_text text-center">
                            <h5>John Smith</h5>
                            <p>CEO</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                   <div className="team_item text-center">
                            <img src={team2} alt="" />
                            <div className="about_overlay">
                                <img src={gradient} alt="" />
                            </div>
                        <div className="about_icon">
                            <img src={social} alt="" />
                        </div>
                        <div className="about_text text-center">
                            <h5>Simon Adams</h5>
                            <p>CRO</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                   <div className="team_item text-center">
                            <img src={team3} alt="" />
                            <div className="about_overlay">
                                <img src={gradient} alt="" />
                            </div>
                        <div className="about_icon">
                            <img src={social} alt="" />
                        </div>
                        <div className="about_text text-center">
                            <h5>Paul Jones</h5>
                            <p>Design Lead</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                   <div className="team_item text-center">
                            <img src={team4} alt="" />
                            <div className="about_overlay">
                                <img src={gradient} alt="" />
                            </div>
                        <div className="about_icon">
                            <img src={social} alt="" />
                        </div>
                        <div className="about_text text-center">
                            <h5>Sara Hardin</h5>
                            <p>Project Manager</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Team