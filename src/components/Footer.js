import { Col, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer style={{ margin: '15px' }}>
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
                    <h5>Jaime Alberto Rodríguez Arango</h5>
                    <p>jarangoz.spain@gmail.com</p>
                </Col>
            </Row>
        </footer>
    );
}
export default Footer;