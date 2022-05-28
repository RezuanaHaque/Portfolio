import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import img from '../../img/IMG-20211119-WA0025-01-01.jpeg'
import './About.css'


const About = () => {
    return (
        <Container fluid="md sm sx" className='bg'>
            <Row className='g-0 justify-content-md-center'>
                <Col sm={12} lg={5} xs={12} md={6} className='me-5 mt'>
                    <div class="polaroid ">
                        <Image src={img} className="img1" width='350px' />
                        {/* <p>Image 1<br />more Text ...</p> */}
                    </div>
                </Col>
                <Col sm={12} lg={6} xs={12} md={6} className='ms-3'>
                   <div className="col2">
                        <h1 className=' text-center in-left'>About Me</h1>
                        <hr className="style text-center" />
                        <p>Hi, I’m Rezuana <br />
                            Currently I'm a student of East Delta University Chittagong and I'm pursuing my BSc in computer science and engineering. Throughout my entire life, I’ve always been interested in Web development. I always loved playing around with code and learning new things. But it wasn’t until that high school where I first had my first class about it that really made me fall in love with the subject.
                            I have experience in HTML, CSS, and JavaScript. In the last 6months, I gained experience coding responsive websites. Many of my projects were developing websites using React and React-Bootstrap. I also have worked on some projects using Material UI and Tailwind.
                            <br />
                            Let’s be friends?</p>
                        <div class="d-flex flex-column align-items-center">
                            <h4 class="mb-4 bold text-danger">Follow Me</h4>
                            <section>
                                <div class="wrapper">
                                    <div class="button">
                                        <div class="icon">
                                            <i class="fab fa-instagram"></i>
                                        </div>
                                        <span>Instagram</span>
                                    </div>

                                    <div class="button">
                                        <div class="icon">
                                            <i class="fab fa-facebook-f"></i>
                                        </div>
                                        <span>Facebook</span>
                                    </div>

                                    <div class="button">
                                        <div class="icon">
                                            <i class="fab fa-twitter"></i>
                                        </div>
                                        <span>Twitter</span>
                                    </div>

                                    <div class="button">
                                        <div class="icon">
                                            <a href="https://www.linkedin.com/in/rezuana-haque-42150418b/" className='text-black'><i class="fab fa-linkedin"></i></a>
                                        </div>
                                        <span>LinkedIn</span>
                                    </div>

                                    <div class="button">
                                        <div class="icon">
                                            <i class="fab fa-youtube"></i>
                                        </div>
                                        <span>YouTube</span>
                                    </div>

                                    <div class="button">
                                        <div class="icon">
                                            <a href="https://github.com/RezuanaHaque" className='text-black'><i class="fab fa-github"></i></a>
                                        </div>
                                        <span>Github</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;