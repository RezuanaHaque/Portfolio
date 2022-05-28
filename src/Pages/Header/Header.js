import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import UseData from '../../Hooks/UseData';
import './Header.css'
import resume from '../../../src/RezuanaHaque (3).pdf';
import { Col, Image, Row } from 'react-bootstrap';
import img from '../../../src/img/img2.jpg';
import Projects from '../Projects/Projects';
import About from '../About/About';

const Header = () => {
    // const [projects] = UseData()
    return (
        <>
            <div>

                <Row className='p-0 m-0 roww'>
                    <Col className='p-0 m-0' xs lg="8" >
                        <div class="box">
                            <div class="img-title text m-0">
                                <h1 class="">Hey there,<br />
                                    I am Rezuana Haque</h1>
                                <strong>
                                    <ReactTypingEffect
                                        text={["And I am a Web Developer", "data"]}
                                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                                        displayTextRenderer={(text, i) => {
                                            return (
                                                <h1>
                                                    {text.split('').map((char, i) => {
                                                        const key = `${i}`;
                                                        return (
                                                            <span
                                                                key={key}
                                                                style={i % 2 === 0 ? { color: 'gold' } : {}}
                                                            >{char}</span>
                                                        );
                                                    })}
                                                </h1>
                                            );
                                        }}
                                    />
                                </strong>
                                <br />
                                <p class="d-none d-lg-block d-xl-block d-md-block">
                                    I often work for clients who are trying to get their
                                    product or service onto the web. The work is typically
                                    very project focused and involves collaborating with a team that helps to coordinate the client’s
                                    needs into the end
                                    product. The client could be a tech company, an organization, or a government. The work could
                                    involve front-end,
                                    back-end, or full-stack web development.
                                </p>
                                <h3 class=" d-none d-lg-block d-xl-block d-md-block">Do You Want To Hire Me?</h3>
                                <a class="btn btn-danger" role="button" href={resume} download="Rezuana_Haque.pdf">
                                    Resume
                                </a>

                            </div>
                        </div>
                    </Col>
                    <Col xs lg="4" className='p-0'>
                        <div>
                            <Image src={img} width='500px' height='680px' className="img1 fluid" />
                        </div>
                    </Col>
                </Row>
            </div>
            <Projects></Projects>
            <About></About>
        </>
    );
};

export default Header;