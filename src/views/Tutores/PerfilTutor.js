import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/tutor.css';
import { useNavigate } from 'react-router';
export const PerfilTutor = () => {
    const irhasta = useNavigate();
    const handleRespuestaRapida = ()=> {
      irhasta('/respuestasExpress');
    }
    return (
        <div>
            <Card className="cuerpoPerfilTutor">
                <Card.Body><b className="titulo">SOY TUTOR:  nombre....</b></Card.Body>
                <br></br>
                <Row>
                    <Col>
                <div class="tutor-image">
                    <img src="../../assets/missiontuutor.jpg" alt="tut@r"></img>
                </div>
                </Col>
                <Col>
                    
        <Button  onClick={handleRespuestaRapida} type="submit" className="primary-button login-button">Pregunta Rápida de los estudiantes</Button>
                </Col>
                </Row>
                <br></br>
                <div className="perfiltutor">
                    <b> EXPERIENCIA LABORAL:</b><br></br>

                    <br></br>
                    <Row>
                        <Col>
                            <Card border="warning" style={{ width: '18rem' }}>
                                <Card.Header>Experiencia 1</Card.Header>
                                <Card.Body>
                                    <Card.Title>Temas trabajados</Card.Title>
                                    <Card.Text>
                                        Aprendizajes adquiridos...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border="warning" style={{ width: '18rem' }}>
                                <Card.Header>Experiencia 2</Card.Header>
                                <Card.Body>
                                    <Card.Title>Temas trabajados</Card.Title>
                                    <Card.Text>
                                        Aprendizajes adquiridos...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col cellSpace="4">
                            <b>Conoce un poco más:</b><br></br>
                        </Col>
                        <Col>
                            Deportes que practico:<br></br>
                        </Col>
                        <Col>
                            Idiomas que domino: <br></br>
                        </Col>
                        <Col>
                            Residencia:<br></br>
                        </Col>
                        <Col>
                            Metodología:<br></br>
                        </Col>
                    </Row>
                    <br></br>
                    Vídeo de presentación:<br></br>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ width: "400px", height: "400px" }}
                                src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-mu6-ake6324-chim-l.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7edc252958c9c6b9cea5379443d6ac46"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ width: "400px", height: "400px" }}
                                src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-mu6-ake6324-chim-l.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7edc252958c9c6b9cea5379443d6ac46"
                                alt="Third slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <video style={{ width: "400px", height: "400px", alignItems:"center"}}>
                                <source src="https://youtu.be/e3O-76TdcEE" type="video/mp4"></source>
                            </video>


                        </Carousel.Item>
                    </Carousel>
                </div>
            </Card>
        </div >
    )
}
