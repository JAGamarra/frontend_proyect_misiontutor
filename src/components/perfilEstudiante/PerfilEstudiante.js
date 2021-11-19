//Componentes de Bootstrap
import { Container, Row, Col, Button ,Badge,Image} from "react-bootstrap";
import FormPerfilEstudiante from "../perfilEstudiante/FormPerfil";

const PerfilEstudiante = () => {
  return (
    <Container >

      {/* imagen */}
      <Row>
        <Col>
             <Image src="https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_960_720.jpg" thumbnail  style={{ height: '130px',width:'500px'}} fluid alt="estudiante"/>
        </Col>
      </Row>

      {/* botón */}
      <Row className="d-flex justify-content-center ">
        <Col xs={10} md={8} >
          <div className="d-grid gap-3 mt-5 mb-5">
            <Button variant="primary" size="lg">
              Buscar profesor
            </Button>
          </div>
        </Col>
      </Row>

      {/* formulario */}
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="mb-5">
          <Badge bg="secondary"><h2>Perfil estudiante</h2></Badge>   
        </Col>
        <Col xs={12} lg={8} >
          
          <FormPerfilEstudiante />
         
        </Col>
      
      </Row>

    </Container>
  );
};

export default PerfilEstudiante;
