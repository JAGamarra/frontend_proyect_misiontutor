import { Card, Col, Container, Image, Row } from "react-bootstrap";

function Opiniones() {
    return (
        <Container style={{ marginTop: '15px' }}>
            <section>
                <h2>
                    Opiniones
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
                        alt="icono me gusta"
                        style={{ width: "20px", height: '20px', marginLeft: '10px' }}
                        rounded
                    />
                </h2>
                <div>
                    <Row styles={{ margin: '15px' }}>
                        <Col xs={6} sm={4} style={styles.card}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"
                                    style={styles.imagen} />
                                <Card.Body>
                                    <Card.Text style={styles.cardText}>
                                        Me gusta el servicio porque me ayudó a aprobar biología en la escuela.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} style={styles.card}>
                            <Card >
                                <Card.Img
                                    variant="top"
                                    src="https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg"
                                    style={styles.imagen} />
                                <Card.Body>
                                    <Card.Text style={styles.cardText}>
                                        Me gusta el servicio porque el tutor me ayudó a entender los temas de matemáticas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} style={styles.card}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg"
                                    style={styles.imagen} />
                                <Card.Body>
                                    <Card.Text style={styles.cardText}>
                                        Me gusta el servicio porque encontré fácilmente un tutor que me ayudo con mis clases de inglés.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    );
}
export default Opiniones;

const styles = {
    imagen: {
        with: '100%',
        height: '40vh',
    },
    card: {
        marginBottom: '15px',
    },
    cardText: {
        fontSize: '1.3rem'
    },
}