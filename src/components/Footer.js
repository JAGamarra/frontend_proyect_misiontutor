import { Col, Row } from "react-bootstrap";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h4>Desarrolladores</h4>
      <Row>
        <Col>
          <h5>Alejandro sanchez</h5>
          <p>ando1802@gmail.com</p>
        </Col>
        <Col>
          <h5>Julian Gamarra</h5>
        </Col>
        <Col>
          <h5>Marcela Pareja</h5>
          <p>marcela.pareja@medellin.edu.co</p>
        </Col>
        <Col>
          <h5>Juan Camilo</h5>
        </Col>
        <Col>
          <h5>Andres Redriguez</h5>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
