import React, { useState, useContext } from 'react';
// PARA REDIRECCIONAR UNA VEZ SE REGISTRE 
import { useNavigate } from "react-router-dom";
// PAQUETE PARA ALERTAS
import Swal from 'sweetalert2'
// DEPARTAMENTOS Y CIUDADES DE COLOMBIA
import Colombia from "./Colombia.json";

// COMPONENTES DE BOOTSTRAP
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Image from 'react-bootstrap/Image'
import AuthContext from '../../context/AuthContext';

// COMPONENTE FORMULARIO REGISTRO
const FormRegistro = () => {

  const {handleRegister} = useContext(AuthContext);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  // función para alertas
  const showAlert = () => {
    Swal.fire({
      title:'Registro exitoso',
      text:'Ya puedes ingresar',
      icon:"success",
      showConfirmButton: false,
      timer:3000,
      background: '#fff url(https://res.cloudinary.com/dmld1onhq/image/upload/v1637361914/misionTutor/fondo-alert-registro_zbbxnl.png)',
    }).then( () => {
        // entonces al pasar 3 segundos se redirige a la página de login
        navigate('/login')
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // tomar un nuevo error
    const newErrors = findFormErrors();
    // si el objeto de errores tiene longitud mayor a cero pues sí hay errores
    if (Object.keys(newErrors).length > 0) {
      // cambiar estado de errores
      setErrors(newErrors);
    } else {
      // Si no hay errores se puede enviar a MongoDB
      console.log(form);
      //envia la peticion http al backend por medio del context
      handleRegister(form);
      //alert("Gracias por su registro!");
      showAlert();
    }
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }

  const findFormErrors = () => {
    const { name, lastname , email , rol ,password, repeatPassword ,age , departamento,city} = form;
    const newErrors = {};
    // name errors
    if ( !name ||  name === "") newErrors.name = "campo necesario!"; // !name es para evitar problemas con undefined 
    else if (name.length > 20) newErrors.name = "nombre muy largo!";
    if (!lastname|| lastname === "") newErrors.lastname= "campo necesario!";
    else if (lastname.length > 20) newErrors.lastname= "apellido muy largo!";
    // email errors
    if (!email || email === "") newErrors.email = "campo necesario!";
    else if (email.length >30) newErrors.email = "email muy largo!";
    else if ( !validateEmail(email) ) newErrors.email = "email inválido!" ;
    // rol errors
    if (!rol || rol === "") newErrors.rol = "Elige tu rol por favor!";
    //password
    if(!password || password==='') newErrors.password = "Ingresa una contraseña"
    if ( password !== repeatPassword) newErrors.repeatPassword = "no coinciden contraseñas" 
    //Age
    // rating errors
    if ( !age || age > 100 || age < 10 ) newErrors.age = 'Edad entre 9 y 99';
    //else if (isNaN(age)) newErrors.age = "Debes ingresar un número";
    // departamento
    if (!departamento || departamento === "") newErrors.departamento = "Elige tu departamento!";
    if (!city || city === "") newErrors.city = "Elige tu ciudad!";
 
    return newErrors; 
  };

  return (
    <Container>
       <Row>
        <Col >
        <Image src="https://res.cloudinary.com/dmld1onhq/image/upload/v1637351573/misionTutor/registro_dr2li8.png" />
        </Col>
      </Row>
      <Form style={styles.formS}>
        <Row xs={2} md={4} className="justify-content-md-center  mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              onChange={(e) => setField("name", e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="apellido"
              placeholder="Ingresa tu apellido"
              onChange={(e) => setField("lastname", e.target.value)}
              isInvalid={!!errors.lastname}
            />
            <Form.Control.Feedback type='invalid'>{ errors.lastname }</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row xs={1} md={6} className="justify-content-md-center mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
           
              <Form.Control type="email" placeholder="Ingresa tu email"
               onChange={(e) => setField("email", e.target.value)}
               isInvalid={!!errors.email}
               />
               <Form.Control.Feedback type='invalid'>{ errors.email }</Form.Control.Feedback>       
            </Form.Group>

      
            <Form.Group as={Col}>
              <Form.Label>Elige tu rol</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setField("rol", e.target.value)}
                isInvalid={!!errors.rol}
              >
                <option value="">Selecciona tu rol:</option>
                <option value="profesor">Profesor</option>
                <option value="estudiante">Estudiante</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.rol}
              </Form.Control.Feedback>
            </Form.Group>

            { form.rol !== 'estudiante'
                ?   <Form.Group as={Col}>
                <Form.Label>Cursos</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setField("curso", e.target.value)}
                  isInvalid={!!errors.rol}
                >
                  <option value="">Selecciona tu curso:</option>
                  <option value="matematicas"> Matematicas</option>
                  <option value="fisica">Física</option>
                  <option value="ingles">Inglés</option>
                  <option value="arte">Arte</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.rol}
                </Form.Control.Feedback>
              </Form.Group>   
              : <Form.Group as={Col}>  </Form.Group> 
  }
           
            
        </Row>



        <Row xs={1} md={4} className="justify-content-md-center mb-3">
          <Form.Group as={Col}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" 
            onChange={(e) => setField("password", e.target.value)}
            isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type='invalid'>{ errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Repítela</Form.Label>
            <Form.Control type="password" placeholder="Escribe tu contraseña nuevamente" 
            onChange={(e) => setField("repeatPassword", e.target.value)}
            isInvalid={!!errors.repeatPassword}
            />
            <Form.Control.Feedback type='invalid'>{ errors.repeatPassword}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row xs={1} md={6} className="justify-content-md-center mb-4">
  
          <Form.Group as={Col}>
              <Form.Label>Departamento</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setField("departamento", e.target.value)}
                isInvalid={!!errors.departamento}
              >
               <option>Escoge tu departamento</option>
               { Colombia.map(departamento => <option key={departamento.id}> {departamento.departamento}</option> ) }
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
              >
               <option>Escoge tu ciudad</option>
               {  form.departamento && Colombia.find( departamento => departamento.departamento === form.departamento ).ciudades.map((ciudad,index) => <option key={index}>{ciudad}</option>)}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number" 
              type='number' 
              placeholder="Ingres tu edad"
              onChange={ e => setField('age', e.target.value) }
              isInvalid={ !!errors.age }
            />
            <Form.Control.Feedback type='invalid'>{ errors.age }</Form.Control.Feedback>
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
            Registrarse
          </Button>
        </Row> 

      </Form>
    </Container>
  );
};

export default FormRegistro;

const styles = {
  formS: {
    margin: "0 0 30px 0",
  },
};
