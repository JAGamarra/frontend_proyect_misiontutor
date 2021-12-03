import React, { useState } from 'react';
// PARA REDIRECCIONAR UNA VEZ SE REGISTRE 
import { useNavigate } from "react-router-dom";
// PAQUETE PARA ALERTAS
import Swal from 'sweetalert2'

// COMPONENTES DE BOOTSTRAP
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


// COMPONENTE FORMULARIO REGISTRO
const CambiarPassword = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  // función para alertas
  const showAlert = () => {
    Swal.fire({
      title:'Contraseña cambiada exitosamente',
      icon:"success",
      showConfirmButton: false,
      timer:2500,
      background: '#fff url(https://res.cloudinary.com/dmld1onhq/image/upload/v1637361914/misionTutor/fondo-alert-registro_zbbxnl.png)',
    }).then( () => {
        // entonces al pasar 3 segundos se redirige a la página de login
        navigate('/PerfilEstudiante')
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    props.getUser();
    // tomar un nuevo error
    const newErrors = findFormErrors();
    // si el objeto de errores tiene longitud mayor a cero pues sí hay errores
    if (Object.keys(newErrors).length > 0) {
      // cambiar estado de errores
      setErrors(newErrors);
    } else {
      // Si no hay errores se puede enviar a MongoDB 
      const resp = await props.updatePass(form);
      if (resp.status === 200) {
        let json = await resp.json();
        let token = json.token;
        console.log(json.info)
        showAlert();
      }else{
        console.log("ha ocurrido un error");
      }
       // notificación de cambio de contraseña exitoso
    }
  };


  const findFormErrors = () => {
    const { passwordDB, password, repeatPassword } = form;
    const newErrors = {};
   
    //password
    if(!password || password==='') newErrors.password = "Ingresa tu contraseña"
    if ( password !== repeatPassword) newErrors.repeatPassword = "no coinciden contraseñas" 
    if(passwordDB !== props.datos.password) newErrors.passwordDB = "constraseña incorrecta"
    return newErrors; 
  };

  return (
    <Container>
        
      <Form style={styles.formS}>
         <Row className="justify-content-md-center">
            <Col xs="12" md="8" lg="5">
                <Form.Group  >      
                    <Form.Label >Contraseña actual</Form.Label>     
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" 
                            onChange={(e) => setField("passwordDB", e.target.value)}
                            isInvalid={!!errors.passwordDB}
                        />
                    <Form.Control.Feedback type='invalid'>{ errors.passwordDB}</Form.Control.Feedback>
                </Form.Group>
            </Col>  
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
            <Col xs="12" md="8" lg="5">
            <Form.Group >
                <Form.Label >Nueva contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" 
                    onChange={(e) => setField("password", e.target.value)}
                    isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type='invalid'>{ errors.password}</Form.Control.Feedback>     
            </Form.Group>
          </Col>  
        </Row>
        <br></br>
        <Row className="justify-content-md-center">
            <Col xs="12" md="8" lg="5">
          <Form.Group >
            <Form.Label >Repítela</Form.Label>
            <Form.Control type="password" placeholder="Escribe tu contraseña nuevamente" 
                onChange={(e) => setField("repeatPassword", e.target.value)}
                isInvalid={!!errors.repeatPassword}
            />
            <Form.Control.Feedback type='invalid'>{ errors.repeatPassword}</Form.Control.Feedback>
          </Form.Group>
          </Col>  
        </Row>
   
        <Row md={4} className="justify-content-md-center">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="mt-3"
            size="lg"
            variant="primary"
          >
            Cambiar contraseña
          </Button>
        </Row> 
       
      </Form>
   <br></br>
    </Container>
  );
};

export default CambiarPassword;

const styles = {
  formS: {
    /* margin: "0 0 0 0", */
  },
};
