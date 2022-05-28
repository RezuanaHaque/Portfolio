import React from 'react';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import { Carousel, Highlight } from '@trendyol-js/react-carousel';
import ParticleBackground from 'react-particle-backgrounds'
import img2 from "../../img/web.jpg"
import img1 from "../../img/ml.jpg"
import UseData from '../../Hooks/UseData';
import './Projects.css'
const Projects = () => {
    const [projects] = UseData()

    const settings = {
        canvas: {
            canvasFillSpace: true,
            width: '100%',
            height: '100%',
            useBouncyWalls: false
        },
        particle: {
            particleCount: 50,
            color: '#249999',
            minSize: 2,
            maxSize: 5
        },
        velocity: {
            directionAngle: 0,
            directionAngleVariance: 360,
            minSpeed: 1,
            maxSpeed: 3
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.5,
            opacityTransitionTime: 3000
        }
    }

    return (
        <div>
            
        <h1 style={{ textAlign: 'center' }} className='mt-4'>LOOK AT MY <span style={{ color: 'gray', fontWeight: 'bolder' }}>PROJECTS</span></h1>
            <Container>
                <Row className="justify-content-md-center">
                    <ParticleBackground settings={settings} />
                    <Col>

                        {/* <h1 style={{ textAlign: 'center' }}><span style={{ fontWeight: 'bolder' }}>Websites</span></h1> */}
                        {/* {
                    projects.map(project => */}
                        <>
                            <div className='my-3 image-container'>
                                <img className='img-fluid'  src={img1} alt="" />
                                <div className='img-overlay img-overlay-blur'>
                                    <div className='img-title'>
                                        Machine Learning
                                    </div>
                                    <p className='img-des'>
                                        I've implemented some Machine learning algorithms using python.
                                    </p>
                                    <span className='clickme'>Show All</span>
                                </div>
                            </div>
                            
                        </>
                    </Col>

                    <Col>
                        <div className='my-3 image-container'>
                            <img className='img-fluid' src={img2} alt="" />
                            <div className='img-overlay img-overlay-blur'>
                                <div className='img-title'>
                                    Web Development
                                </div>
                                <p className='img-des'>
                                    I've build Full-stack websites using HTML, CSS and React.
                                </p>
                                <span className='clickme'>Show All</span>
                            </div>
                        </div>
                    </Col>
                    <ParticleBackground settings={settings} />
                </Row>
            </Container>
        </div>
    );
};

    export default Projects;