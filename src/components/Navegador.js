import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
function Navegador({ auth }) {
  const { cerrarSesion } = useContext(AuthContext);

  return (
    <Navbar expand="sm" style={{ borderBottom: "1px solid #bdbdbd" }}>
      <Container fluid style={{ marginLeft: "15px", marginRight: "15px" }}>
        <Navbar.Brand as={Link} to="/">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_533558.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          {auth ? (
            <>
              <Nav.Link as={Link} to="/catalogo">
                Catálogo
              </Nav.Link>
              <Nav.Link as={Link} to="/perfilEstudiante">
                Perfil
              </Nav.Link>
              <Nav.Link onClick={cerrarSesion}>Cerrar Sesión</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/registro">
                Registro
              </Nav.Link>
            </>
          )}
          {
            //<Nav.Link href="#preguntas">Preguntas</Nav.Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;
