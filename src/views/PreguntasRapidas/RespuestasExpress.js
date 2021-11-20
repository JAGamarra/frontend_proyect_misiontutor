import React from 'react';
import Table from 'react-bootstrap/Table'
import Header from '../../components/home/Header';
import { Card, Button } from 'react-bootstrap';

export const RespuestasExpress = () => {
    return (
        <div>
            <Header />
            <br></br>
            <div className="RespuestaExpress">
                <div className="titulo">POSTULA RESPONDER A LOS ESTUDIANTES
                </div>
                <Card>
                    <Card.Body>


                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th aria-disabled>Código Pregunta</th>
                                    <th>Área</th>
                                    <th>Tema</th>
                                    <th>Fecha Límite</th>
                                    <th>Valor Límite</th>
                                    <th>Postularse</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Registro 1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td><Button value="Confirm" className="primary-button login-button">Oferta</Button></td> 
                                </tr>
                                <tr>
                                    <td>Registro 2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Otto</td>
                                    <td><Button value="Confirm" className="primary-button login-button">Oferta</Button></td>
                                </tr>
                                <tr>
                                    <td>Registro 3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Otto</td>
                                    <td><Button value="Confirm" className="primary-button login-button">Oferta</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
