//Componentes de Bootstrap
import { Container, Row, Col, Button ,Badge,Image ,Tabs,Tab} from "react-bootstrap";
import EdicionPerfil from "../perfilEstudiante/EdicionPerfil";
import { useNavigate } from "react-router";
import AuthContext from '../../context/AuthContext';

/* import React, { useState, useContext, useEffect } from 'react'; */

const PerfilEstudiante = () => {
   
  const navigate = useNavigate();

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
            <Button variant="primary" size="lg" onClick={()=>{navigate('/catalogo');}}>
              Buscar profesor
            </Button>
          </div>
        </Col>
      </Row>

      {/* edición del perfil */}
      <Row className="d-flex justify-content-center ">
        <Col xs={10} md={10}>
            <EdicionPerfil/>
        </Col>
      </Row>
    

    </Container>
  );
};

export default PerfilEstudiante;
