import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {Card} from 'react-bootstrap'
import '../styles/tutor.css';
const PreguntasExpress = () => {
    return (
        <div className="tutor">
             <Card className="tarjeta" border="light" >
    <Card.Header> <h1>Cordial Bienvenida</h1></Card.Header>
    <Card.Body>
      <Card.Title>¿Cual es la inquietud sobre la que quiere respuesta?</Card.Title>
      <br/>
      <br></br>
      <Card.Text>
            <Container>
                <Row className="espacios">
                    <Col md={4}><p className="inquietud">Detalles de la pregunta:</p>
                    <br/>
      <br></br>
                    <Col md={{ span: 12, offset:6 }}>      <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Pregunta</InputGroup.Text>
                    <FormControl
                      placeholder="Codigo"
                      aria-label="idServicio"
                      aria-describedby="basic-addon1"
                      disabled={true}
                    />
                  </InputGroup>
                  <br/>
      <br></br>
                    </Col>
                    
                    </Col>
                    <br/>
                    <Row className="espacios">
                    <Col md={{ span: 16, offset: 12 }}>
                        <FloatingLabel controlId="floatingTextarea" label="Digita la Inquietud" className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                    </Col>
                </Row>
      <br></br></Row> <br></br><br/>
      <Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Col md={{ span: 3, offset: 12 }}>
                        <Form.Label>Elija el área</Form.Label>
                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                            <option value="0">Elegir...</option>
                            <option value="1">Programación</option>
                            <option value="2">Programación</option>
                            <option value="3">Artística</option>
                            <option value="4">Matemáticas</option>
                            <option value="5">Inglés</option>
                        </Form.Select>
                    </Col>
                    <Col md={{ span: 6, offset: 6 }}>
                            <Form.Label>Elija el tema:</Form.Label>
                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                <option value="0">Elegir...</option>
                                <option value="1">Python</option>
                                <option value="2">JavaScript</option>
                                <option value="3">Inglés básico</option>
                                <option value="3">Inglés medio</option>
                                <option value="3">Inglés avanzado</option>
                                <option value="3">Geometría</option>
                                <option value="3">Estadística</option>
                            </Form.Select>
                       
                    </Col>
                    <br />
                    </Form.Group>
                </Row>
                <br/>
      <br></br>
                <Row className="espacios">
 
                   
                </Row>
                <br/>
      <br></br><Row className="espacios">
      <Col md={{ span: 6, offset: -3}}>
                  <InputGroup className="mb-2">
                    <InputGroup.Text id="basic-addon1">Respuestas hasta:</InputGroup.Text>
                    <FormControl
                      placeholder="Día y hora"
                      aria-label="Límite para responder"
                      aria-describedby="basic-addon1"

                    />
                  </InputGroup>
                </Col>
 <Col md={{ span: 6, offset: 6 }}>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Elija el tutor:</Form.Label>
         <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
             <option value="0">Elegir...</option>
             <option value="1">Registro 1</option>
             <option value="2">Registro 2</option>
             <option value="3">Registro 3</option>
             <option value="3">Registro 4</option>
             <option value="3">Registro 5</option>
             <option value="3">Registro 6</option>
             <option value="3">Registro 7</option>
         </Form.Select>
     </Form.Group>
 </Col>
</Row>
<br/>
<br></br>
                <Row><br/>
      <br></br></Row> 
               
            </Container>
            </Card.Text>
    </Card.Body>
    <br/>
      <br></br>
    <input  type="submit" value="Registrar Pregunta" className="primary-button login-button"></input>
  </Card>
  <br />
        </div>
    )
}
export default PreguntasExpress;