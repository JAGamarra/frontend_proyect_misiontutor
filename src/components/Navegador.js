import { Navbar, Container, Nav } from 'react-bootstrap'
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
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#acercaDe">Acerca de</Nav.Link>
                    <Nav.Link href="#tutores">Tutores</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#preguntas">Preguntas</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegador;