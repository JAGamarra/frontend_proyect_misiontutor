// COMPONENTES BOOTSTRAP
import wspIcon from "../../assets/Whatsapp_icon-icons.com_60504.png";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
} from "react-bootstrap";

import "../../styles/TarjetaProfesores.css";

const TarjetasProfesores = ({ users }) => {
  const [assignature, setAssignature] = useState("fisica");

  const setField = (field, value) => {
    setAssignature(value);
  };

  return (
    <Container>
      <div style={{ marginBottom: "40px" }}>
        <Form.Group as={Col} style={{ marginTop: "50px" }}>
          <Form.Label style={{ fontSize: "20px", fontWeight: "bold" }}>
            Busca por la asignatura que quieras aprender y te aparecerán
            nuestros mejores profes!
          </Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setField("assignature", e.target.value)}
            style={{ fontSize: "16px" }}
          >
            <option value="fisica">Física</option>
            <option value="matematicas"> Matematicas</option>
            <option value="ingles">Inglés</option>
            <option value="arte">Arte</option>
          </Form.Control>
        </Form.Group>
      </div>
      <Row>
        {users
          .filter((user) => user.assignature === assignature)
          .map((user) => (
            <Col sm={4} lg={2} className="teacher-card" key={user._id}>
              <Card
                style={{
                  margin: "0 0 8px 0",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  className="profileImage"
                  variant="top"
                  src="https://image.flaticon.com/icons/png/512/1089/1089129.png"
                  thumbnail
                  fluid
                  style={{ border: "none", width: "90%", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title>{user.firstName}</Card.Title>
                  <Card.Text>
                    <h3>Enseño {user.assignature}</h3>
                    <h5> y Vivo en {user.city}</h5>
                    <br />
                    <h6>Contáctame</h6>
                    <p>Por correo:</p>
                    <p>{user.email}</p>
                    <a
                      href={`https://wa.me/${user.cellphoneNumber}`}
                      target="__blank"
                    >
                      <img src={wspIcon} alt="whatsapp icon" />
                    </a>
                    <p>{user.cellphoneNumber}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default TarjetasProfesores;
