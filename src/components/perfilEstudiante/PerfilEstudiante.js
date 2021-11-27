//Componentes de Bootstrap
import { Container, Row, Col, Button ,Badge,Image ,Tabs,Tab} from "react-bootstrap";

import { useNavigate } from 'react-router';
import EdicionPerfil from "../perfilEstudiante/EdicionPerfil";

const PerfilEstudiante = () => {

  const navigate = useNavigate();
  const handlePreguntaRapida = ()=> {
    navigate('/preguntasExpress');
  }
  return (
    <Container >

      {/* imagen */}
      <Row>
        <Col>
             <Image src="https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_960_720.jpg" thumbnail  style={{ height: '130px',width:'500px'}} fluid alt="estudiante"/>
        </Col>
      </Row>

      {/* botones */}
      <Row className="d-flex justify-content-center ">
        <Col xs={10} md={8} >
          <div className="d-grid  mt-5 mb-2">
            <Button variant="primary" size="lg">
              Buscar profesor
            </Button>
          </div>
        </Col>
        <Col xs={10} md={8} >
          <div className="d-grid  mt-2 mb-3">
            <Button onClick={handlePreguntaRapida} variant="primary" size="lg">
              Hacer una pregunta de respuesta inmediata...
            </Button>
          </div>
        </Col>
      </Row>

      {/* edición del perfil */}
      <Row className="d-flex justify-content-center ">
        <Col xs={10} md={10}>
            <EdicionPerfil />
        </Col>
      </Row>
    

    </Container>
  );
};

export default PerfilEstudiante;
