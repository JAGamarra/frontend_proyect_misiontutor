import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import "../../styles/Login.css";

const Login = (props) => {

  const { handleLogin } = useContext(AuthContext);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [show, setShow] = useState(false);

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const handlePasswordVisible = () => {
    setPassVisible(!passVisible);
    const noVisiblePass = document.querySelector(".pass-icon-v");
    const visiblePass = document.querySelector(".pass-icon-nv");
    if (!passVisible) {
      visiblePass.classList.add("visible");
      visiblePass.classList.remove("no-visible");
      noVisiblePass.classList.add("no-visible");
      noVisiblePass.classList.remove("visible");
    } else {
      visiblePass.classList.add("no-visible");
      visiblePass.classList.remove("visible");
      noVisiblePass.classList.add("visible");
      noVisiblePass.classList.remove("no-visible");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      email: emailInput,
      password: passwordInput
    }
    const resp = await handleLogin(form);
    if (resp.status === 200) {
      setShow(false);
    } else {
      setShow(true);
    }

  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Inicia Sesión</h2>
        <Alert variant="danger" show={show}>
          Credenciales invalidas
        </Alert>
        <div className="form__field">
          <label className="form__label" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={emailInput}
            onChange={handleEmailInput}
            name="email"
            id="email"
            className="form__input"
          />
        </div>

        <div className="form__field form__field--pass">
          <label className="form__label" htmlFor="password">
            Contraseña
          </label>
          {passVisible ? (
            <input
              type="text"
              value={passwordInput}
              onChange={handlePasswordInput}
              name="password"
              id="password"
              className="form__input"
            />
          ) : (
            <input
              type="password"
              value={passwordInput}
              onChange={handlePasswordInput}
              name="password"
              id="password"
              className="form__input"
            />
          )}
          <span
            onClick={handlePasswordVisible}
            className="material-icons material-icons-outlined md-18 pass-icon-v visible"
          >
            visibility_off
          </span>
          <span
            onClick={handlePasswordVisible}
            className="material-icons material-icons-outlined md-18 pass-icon-nv no-visible"
          >
            visibility
          </span>
        </div>

        <button type="button" className="form__button form__button--password">
          ¿Olvidaste tu contra? Recúperala aquí
        </button>

        <div className="form__buttons">
          <button className="form__button" type="submit">
            Logearse
          </button>
          <button className="form__button" type="button">
            <p>¿No tienes cuenta?</p>
            <Link as={Link} to="/registro"> ¡Regístrate!</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
