import React, { useState, useContext, useEffect } from 'react';
// PARA REDIRECCIONAR UNA VEZ SE REGISTRE 
import { useNavigate } from "react-router-dom";
// PAQUETE PARA ALERTAS
import Swal from 'sweetalert2'
// DEPARTAMENTOS Y CIUDADES DE COLOMBIA
import Colombia from "../registro/Colombia.json";

// COMPONENTES DE BOOTSTRAP
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel"
import AuthContext from '../../context/AuthContext';

// COMPONENTE FORMULARIO REGISTRO
const FormPerfil = (props) => {
  const [form, setForm] = useState(props.datos);

  useEffect(() => {
    if (!props.datos) {
      props.getUser();
    } else {
      setForm(props.datos)
    }

  }, [props.datos]);

  const { handleUser } = useContext(AuthContext);


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // función para alertas
  const showAlert = () => {
    Swal.fire({
      title: 'Perfil editado con éxito',
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
      background: '#fff url(https://res.cloudinary.com/dmld1onhq/image/upload/v1637361914/misionTutor/fondo-alert-registro_zbbxnl.png)',
    })
  }


  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // revisa si un error existe y lo remueve desde el objeto errores
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // tomar un nuevo error
    const newErrors = findFormErrors();
    // si el objeto de errores tiene longitud mayor a cero pues sí hay errores
    if (Object.keys(newErrors).length > 0) {
      // cambiar estado de errores
      setErrors(newErrors);
    } else {
      // Si no hay errores se puede enviar a MongoDB
      const resp = await props.update(form);
      if (resp.status === 200) {
        let json = await resp.json();
        let token = json.token;
        console.log(json.info)
        showAlert();
      }else{
        console.log("ha ocurrido un error");
      }
      //alert("Gracias por su registro!");
      
    }
  };


  const findFormErrors = () => {
    const { firstName, lastname, email, rol, password, repeatPassword, age, departamento, city } = form;
    const newErrors = {};
    // name errors
    if (!firstName || firstName === "") newErrors.firstName = "campo necesario!"; // !name es para evitar problemas con undefined 
    else if (firstName.length > 20) newErrors.firstName = "nombre muy largo!";
    if (!lastname || lastname === "") newErrors.lastname = "campo necesario!";
    else if (lastname.length > 20) newErrors.lastname = "apellido muy largo!";
    // rol errors
    if (!rol || rol === "") newErrors.rol = "Elige tu rol por favor!";
    //Age
    // rating errors
    if (!age || age > 100 || age < 10) newErrors.age = 'Edad entre 9 y 99';
    //else if (isNaN(age)) newErrors.age = "Debes ingresar un número";
    // departamento
    if (!departamento || departamento === "") newErrors.departamento = "Elige tu departamento!";
    if (!city || city === "") newErrors.city = "Elige tu ciudad!";

    return newErrors;
  };

  return (
    <Container>
      <Form style={styles.formS}>
        <Row xs={2} md={4} className="justify-content-md-center  mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder={form ? form.firstName : ""}
              defaultValue={form ? form.firstName : ""}
              onChange={(e) => setField("firstName", e.target.value)}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type='invalid'>{errors.firstName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="apellido"
              placeholder={form ? form.lastname : ""}
              defaultValue={form ? form.lastname : ""}
              onChange={(e) => setField("lastname", e.target.value)}
              isInvalid={!!errors.lastname}
            />
            <Form.Control.Feedback type='invalid'>{errors.lastname}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row xs={2} md={4} className="justify-content-md-center mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>

            <Form.Control type="email" placeholder="traer de base de datos"
              /* onChange={(e) => setField("email", e.target.value)} */
              isInvalid={!!errors.email}
              disabled
              placeholder={form ? form.email : ""}
              defaultValue={form ? form.email : ""}
            />
            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col}>
            <Form.Label>Elige tu rol</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setField("rol", e.target.value)}
              isInvalid={!!errors.rol}
              defaultValue={form ? form.rol : ""}
            >
              <option value="">{form ? form.rol : ""}</option>
              <option value="profesor">Profesor</option>
              <option value="estudiante">Estudiante</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.rol}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row xs={2} md={6} className="justify-content-md-center mb-4">

          <Form.Group as={Col}>
            <Form.Label>Departamento</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setField("departamento", e.target.value)}
              isInvalid={!!errors.departamento}
              defaultValue={form ? form.departamento : ""}
            >
              <option>{form ? form.departamento : ""}</option>
              {Colombia.map(departamento => <option key={departamento.id}> {departamento.departamento}</option>)}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.departamento}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setField("city", e.target.value)}
              isInvalid={!!errors.city}
              defaultValue={form ? form.city : ""}
            >
              <option>{form ? form.city : ""}</option>
              {form?.departamento && Colombia.find(departamento => departamento.departamento === form.departamento).ciudades.map((ciudad, index) => <option key={index}>{ciudad}</option>)}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number"
              type='number'
              placeholder={form ? form.age : ""}
              defaultValue={form ? form.age : ""}
              onChange={e => setField('age', e.target.value)}
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type='invalid'>{errors.age}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row md={6} className="justify-content-md-center">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="mt-3"
            size="lg"
            variant="primary"
          >
            Actualizar
          </Button>
        </Row>

      </Form>
    </Container>
  );
};

export default FormPerfil;

const styles = {
  formS: {
    margin: "0 0 30px 0",
  },
};
