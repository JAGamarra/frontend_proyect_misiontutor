import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Spinner from 'react-bootstrap/Spinner';
import { Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import '../../styles/tutor.css';
import Header from '../../components/home/Header';
import Footer from '../../components/Footer';
const Tutores = () => {

  const mostrarFormulario = () => {
    document.getElementById('registroTuttor').style.display = 'block';
  }
  const ocultarBienvenida = (e) => {
    e.preventDefault();
    document.getElementById('bienvenida').style.display = 'none';
    mostrarFormulario();
  }
  const publicarInfo = () => {
    /* ocultarRegistroTuttor();*/
    document.getElementById('registroTuttor').style.display = 'none';
    document.getElementById('publicacion').style.display = 'block';
  }
  return (

    <div>
      <Header/>
      <div className="tutor">
      <div id="bienvenida">
        <Figure className="encabezado">
          <Figure.Image
            width={100}
            height={120}
            alt="Tuttor image"
            src="../../assets/missiontuutor.jpg" fluid
          />
          <Figure.Caption>
            Ingreso de un nuevo tutor
          </Figure.Caption>
        </Figure>
        <Container className="login">
          <Row className="tutor">
            <Col sm={12}>< p className="titulo"><b>BIENVENIDA A LOS TUTORES INTERESADOS EN INSCRIBIRSE</b></p></Col>
          </Row>
          <Row>
            <Col sm={4}><div class="email-image">
              <img src="../../public/misiontutor.ico" alt="Mision Tutor"></img>
            </div></Col>
            <Col sm={4}> <Spinner animation="grow" variant="info" /> <b>Tutores:</b> Son las personas que acompañan el aprendizaje de quienes requieren un conocimiento específico.</Col>
            <Col sm={4}> <Spinner animation="grow" variant="warning" /> <b>Mision Tutor:</b> Este es un espacio para registrar los datos personales, entre otros suficientes para darse a conocer a los posibles estudiantes.</Col>
          </Row>
          <Row className="tutor">
            <Col sm>  <p className="subtitulo">Utilice el botón Comienzo para reistrar su información</p></Col>
            <Col sm>  </Col>
            <Col sm>  <button className="primary-button login-button" onClick={ocultarBienvenida}>Cominezo</button>
            </Col>

          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Image src="../../assets/missiontuutor.jpg" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="registroTuttor">

        <div className="login">
          <h1 className="titulo"><b>Continúe con el registro de su información</b></h1>
          <br />
          <Card>
            <Card.Header as="h5"> <p className="subtitulo"><b>TUTORES</b></p></Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <InputGroup className="mb-2">
                    <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                    <FormControl
                      placeholder="Automático del registro"
                      aria-label="Username"
                      aria-describedby="basic-addon1"

                    />
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Apellidos</InputGroup.Text>
                    <FormControl
                      placeholder="Tomados del registro"
                      aria-label="apellidos"
                      aria-describedby="basic-addon1"

                    />
                  </InputGroup>
                </Col>
              </Row>
              <Card.Title><b>Información Personal</b></Card.Title>
              <Card.Text>
                Información de contacto </Card.Text>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                      placeholder="Correo registrado"
                      aria-label="correo"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Número</InputGroup.Text>
                    <FormControl
                      placeholder="Contacto"
                      aria-label="telefono"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Ciudad</InputGroup.Text>
                    <FormControl
                      placeholder="Residencia"
                      aria-label="ciudad"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Card.Title><b>Información Pública</b></Card.Title>
              <Card.Text>
                Información visible a los posibles estudiantes </Card.Text>
              <Row>

                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Deportes</InputGroup.Text>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Rugby" />
                      <Form.Check type="checkbox" label="Voleibol" />
                      <Form.Check type="checkbox" label="Patinaje" />
                      <Form.Check type="checkbox" label="Ciclismo" />
                      <Form.Check type="checkbox" label="Natación" />
                      <Form.Check type="checkbox" label="Atletismo" />
                      <Form.Check type="checkbox" label="Otro" />
                      <Form.Check type="checkbox" label="Ninguno" />
                    </Form.Group>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Idiomas</InputGroup.Text>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Inglés" />
                      <Form.Check type="checkbox" label="Francés" />
                      <Form.Check type="checkbox" label="Portugues" />
                      <Form.Check type="checkbox" label="Otro" />
                      <Form.Check type="checkbox" label="Ninguno" />
                    </Form.Group>
                  </InputGroup>
                </Col>
              </Row>
              <Card.Title><b>Información Académica</b></Card.Title>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Conocimientos en:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Certificaciones:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" onClick={publicarInfo}>Registrar</Button>
            </Card.Body>

          </Card>
        </div>
      </div>
      <div id="publicacion">

        <Card className="text-center">
          <Card.Header className="titulo"><b>PERFIL DE ATENCIÓN A LOS ESTUDIANTES</b></Card.Header>
          <Card.Body>
            <Card.Title>ÁREAS DEL CONOCIMIENTO QUE DOMINAS</Card.Title>
            <Card.Title><b>Profundización Académica</b></Card.Title>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Servicio</InputGroup.Text>
                    <FormControl
                      placeholder="Codigo"
                      aria-label="idServicio"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Form.Label>Conocimientos en:</Form.Label>
                  <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                    <option value="0">Elegir...</option>
                    <option value="1">Programación</option>
                    <option value="2">Programación</option>
                    <option value="3">Artística</option>
                    <option value="4">Matemáticas</option>
                    <option value="5">Inglés</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Temas según el área:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <Card.Text>
              <Card.Title><b>Temas para estudiantes con edades entre:</b></Card.Title>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Para el subtema:</Form.Label>
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
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="edades" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Personas con edades:</Form.Label>
                    <Row>
                      <Col xs="auto" className="my-1">
                        <Form.Check style={{font:"10px"}}
                          type="checkbox"
                          id="customControlAutosizing"
                          label="5 - 7"
                        />
                      </Col>
                      <Col xs="auto" className="my-1">
                        <Form.Check
                          type="checkbox"
                          id="customControlAutosizing"
                          label="11 - 13"
                        />
                      </Col>
                      <Col xs="auto" className="my-1">
                        <Form.Check
                          type="checkbox"
                          id="customControlAutosizing"
                          label="14 - 17"
                        />
                      </Col>
                      <Col xs="auto" className="my-1">
                        <Form.Check
                          type="checkbox"
                          id="customControlAutosizing"
                          label="18..."
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Text>
            <Button variant="primary" disabled={true}>Visibilizar esta información</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Términos y condiciones...</Card.Footer>
        </Card>
        </div>
    
      </div>
        <Footer/>
    </div >
  );
}
export default Tutores;