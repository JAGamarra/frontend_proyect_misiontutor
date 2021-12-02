// COMPONENTES BOOTSTRAP
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Image, Form } from "react-bootstrap";

const TarjetasProfesores = ({ users }) => {

    const [assignature, setAssignature] = useState("fisica");

    const setField = (field, value) => {
        setAssignature(value);
    };

    return (

        <Container>
            <div style={{ marginBottom: "20px" }}>
                <Form.Group as={Col}>
                    <Form.Label>Busca por las asignatura que quieras aprender</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => setField("assignature", e.target.value)}
                    >
                        <option value="fisica">Física</option>
                        <option value="matematicas"> Matematicas</option>
                        <option value="ingles">Inglés</option>
                        <option value="arte">Arte</option>
                    </Form.Control>
                </Form.Group>
            </div>
            <Row>
                {users.filter((user, index) => user.assignature == assignature)
                    .map(user => (
                        <Col sm={4} lg={2} className="teacher-card" key={user._id}>
                            <Card style={{ margin: "0 0 8px 0" }}>
                                <Image variant="top" src="https://image.flaticon.com/icons/png/512/1089/1089129.png" thumbnail fluid />
                                <Card.Body>
                                    <Card.Title>{user.firstName}</Card.Title>
                                    <Card.Text>
                                        <h3>Enseño {user.assignature}</h3>
                                        <h5> y Vivo en {user.city}</h5>
                                        <br />
                                        <p>contactame</p>
                                        <h6>{user.email}</h6>
                                        <p>{user.cellphoneNumber}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>

    )
}

export default TarjetasProfesores