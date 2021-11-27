import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from "react-router-dom";
function Navegador() {
    return (
        <Navbar expand="sm">
            <Container fluid style={{ marginLeft: "15px", marginRight: "15px" }} >
                <Navbar.Brand href="#home">
                    <img
                        src='http://cdn.onlinewebfonts.com/svg/img_533558.png'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/perfilEstudiante">Perfil Estudiante</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#preguntas">Preguntas</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegador;