import React from 'react'
// COMPONENTES BOOTSTRAP
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

//COMPONENTES
import FormPerfil from '../../components/perfilEstudiante/FormPerfil';
import CambiarPassword from '../../components/perfilEstudiante/CambiarPassword';
import CerrarCuenta from '../../components/perfilEstudiante/CerrarCuenta';
import Header from '../../components/home/Header';
export const PerfilTutor = () => {
    const irhasta = useNavigate();
    const handleRespuestaRapida = () => {
        irhasta('/respuestasExpress');
    }
    return (
        <div>
            <Header />
            <Card className="accionesTutor">
                <Card.Header>Actividades que puede realizar el Tutor</Card.Header>
                <Card.Body>
                    <Row>
                     <Col md={9}>
                        <blockquote className="blockquote mb-0">
                        <p>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Perfil">
                        <br></br>
                        <FormPerfil />

                        </Tab>
                        <Tab eventKey="profile" title="Cambiar contraseña">
                        <br></br>
                        <CambiarPassword />

                        </Tab>
                        <Tab eventKey="contact" title="Cerrar cuenta" >
                        <br></br>
                        <ListGroup>
                        <ListGroup.Item>Tutor...: Nombre...</ListGroup.Item>

                        <ListGroup.Item variant="success">Fuen un gusto haber contado con sus conocimientos.<br></br>Le esperamos en una próxima oportunidad<br></br></ListGroup.Item>

                        </ListGroup>
                        <CerrarCuenta />

                        </Tab>
                        </Tabs>
                        </p>
                        <footer className="blockquote-footer">
                        El tutor... <cite title="Source Title">Acciones del tutor</cite>
                        </footer>
                        </blockquote>
                        </Col>
                        <Col md={3}>

                        <Button onClick={handleRespuestaRapida} type ="submit" className="primary-button login-button">Pregunta Rápida de los estudiantes</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
}
