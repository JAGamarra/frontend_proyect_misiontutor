import { Col, Container, Image, Row } from "react-bootstrap";

function Servicios() {
    return (
        <Container style={{ marginTop: '15px' }}>
            <h2>Servicios</h2>
            <section>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row style={styles.filasCont}>
                            <Col md={12} lg={6}>
                                <Image src="https://www.ecured.cu/images/d/d9/Tutor2.jpg"
                                    alt="tutor y niño"
                                    style={styles.imagen} />
                            </Col>
                            <Col md={12} lg={6}>
                                <h3>Se estudiante</h3>
                                <p style={{fontSize:'1.3rem'}}>Como estudiante podrás buscar un capacitado tutor que te ayude en el tema de estudio que desees. Solo tienes que buscar el tema que desees y escoger a un tutor, este tutor se comunicará contigo para arreglar un encuentro virtual en la plataforma que desees.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row style={styles.filasCont}>
                            <Col md={12} lg={6}>
                                <Image src="https://png.pngtree.com/png-vector/20200609/ourmid/pngtree-teacher-teaching-natural-sciences-to-students-png-image_2221396.jpg"
                                    alt="profesora enseñando de plantas a niños"
                                    style={styles.imagen} />
                            </Col>
                            <Col md={12} lg={6}>
                                <h3>Se Tutor</h3>
                                <p style={{fontSize:'1.3rem'}}>¿Eres bueno enseñando? ¿Dominas algún tema de estudio? Si es así, te invitamos a unirte como un tutor, en este lugar te llegaran solicitudes de estudiantes que quieren aprender y necesitan ayuda, solo tendrás que contactarte con el alumno y citar un encuentro por el medio virtual que le convenga a ambos. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default Servicios;

const styles = {
    filasCont: {
        margin: '15px',
    },
    imagen: {
        height: '30vh',
        width: "100%",
    }
}