// COMPONENTES BOOTSTRAP
import {Container,Row,Col,Card,Button,Image} from  "react-bootstrap";

const TarjetasProfesores = ({users}) => {

    console.log(users)
    return (

        <Container>
            <Row>
            {users.map( user => (
                <Col  sm={4} lg={2} className="teacher-card" key={user.id}>
                <Card style={{margin: "0 0 8px 0"}}>
                    <Image variant="top" src="https://image.flaticon.com/icons/png/512/1089/1089129.png" thumbnail fluid />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            <h3>Enseño {user.asignatura}</h3>
                            <h5> y Vivo en {user.ciudad}</h5>
                            <br/>
                            <p>contactame</p>
                            <h6>adrianacd@gmail.com</h6>
    
                        </Card.Text>
                        <Button variant="primary">celular</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    </Container>

    )
}

export default TarjetasProfesores