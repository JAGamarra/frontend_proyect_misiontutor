import { Form,Row,Col,Button} from 'react-bootstrap';

export const FormPerfil= () => {
  return (
    <>
      <Form>
    
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="nombre" />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="apellido" placeholder="apellido" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Tu dirección" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Departamento</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Escoge...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Ciudad</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Escoge...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Edad</Form.Label>
            <Form.Control type='number'/>
          </Form.Group>
        </Row>

        <Button className="mt-3" size="lg" variant="primary" type="submit">
          Guardar
        </Button>
      </Form>

    </>
  );
};

export default FormPerfil;
