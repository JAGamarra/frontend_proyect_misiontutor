import {  Col, Container, Form, Image, Row } from "react-bootstrap";

function Contacto() {
    return (
        <Container style={{ marginTop: '15px' }}>
            <section>
                <h2>
                    Contacto
                    <Image
                        src="https://images.vexels.com/media/users/3/130187/isolated/preview/5e8d2205ecc8cde3235581fc5ecfa430-icono-de-contorno-de-correo-electronico.png"
                        alt="icono me gusta"
                        style={{ width: "20px", height: '20px', marginLeft: '10px' }}
                        rounded
                    />
                </h2>
                <Row>
                    <Col >
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombre">
                            <Form.Label column sm="2">
                                Nombre
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                email
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="email" placeholder="correo@example.com" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAsunto">
                            <Form.Label column sm="2">
                                Asunto
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Form.Group>
                        <button className="btn btn-primary" type="button">Enviar</button>
                    </Form>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
export default Contacto;