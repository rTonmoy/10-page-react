import React from 'react'
import "./template.css"
import { Col, Container, Row } from 'react-bootstrap'
import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"
import work5 from "../../assets/work5.png"
import work6 from "../../assets/work6.png"
import { HiOutlineArrowRight } from "react-icons/hi";

const Template = () => {
  return (
    <section id='template'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="tem_top text-center">
                        <ul>
                            <li><a href="#">All</a></li>
                            <li><a href="#">UI Design</a></li>
                            <li><a href="#">Webflow Design</a></li>
                            <li><a href="#">Figma Design</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <div className="tem_item">
                        <img src={work1} className='w-100' alt="" />
                        <h2>Template 1</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <h6>View Portfolio <HiOutlineArrowRight /></h6>
                    </div>
                </Col>

                <Col lg={6}>
                <div className="tem_item">
                        <img src={work2} className='w-100' alt="" />
                        <h2>Template 2</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <h6>View Portfolio <HiOutlineArrowRight /></h6>
                    </div>
                </Col>

                <Col lg={6}>
                <div className="tem_item">
                        <img src={work3} className='w-100' alt="" />
                        <h2>Template 3</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <h6>View Portfolio <HiOutlineArrowRight /></h6>
                    </div>
                </Col>

                <Col lg={6}>
                <div className="tem_item">
                        <img src={work4} className='w-100' alt="" />
                        <h2>Template 4</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <h6>View Portfolio <HiOutlineArrowRight /></h6>
                    </div>
                </Col>

                <Col lg={6}>
                <div className="tem_item">
                        <img src={work5} className='w-100' alt="" />
                        <h2>Template 5</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <h6>View Portfolio <HiOutlineArrowRight /></h6>
                    </div>
                </Col>

                <Col lg={6}>
                <div className="tem_item">
                        <img src={work6} className='w-100' alt="" />
                        <h2>Template 6</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        <h6>View Portfolio <HiOutlineArrowRight /></h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Template