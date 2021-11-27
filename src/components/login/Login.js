import React, { useState } from "react";
// import PropTypes from "prop-types";

import "../../styles/Login.css";

const Login = (props) => {
  // States
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [passVisible, setPassVisible] = useState(false);

  // handle Events
  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginData = ({ target }) => {
    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });
  };

  return (
    <div className="form-container">
      <form className="form">
        <h2 className="form__title">Inicia Sesión</h2>

        <div className="form__field">
          <label className="form__label" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={emailInput}
            onChange={handleLoginData}
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
            <>
              <input
                type="text"
                value={passwordInput}
                onChange={handleLoginData}
                name="password"
                id="password"
                className="form__input"
              />
              <span
                onClick={() => setPassVisible(false)}
                className="material-icons material-icons-outlined md-18 pass-icon "
              >
                visibility
              </span>
            </>
          ) : (
            <>
              <input
                type="password"
                value={passwordInput}
                onChange={handlePasswordInput}
                name="password"
                id="password"
                className="form__input"
              />
              <span
                onClick={() => setPassVisible(true)}
                className="material-icons material-icons-outlined md-18 pass-icon"
              >
                visibility_off
              </span>
            </>
          )}
        </div>

        <button type="button" className="form__button form__button--password">
          ¿Olvidaste tu contra? ¡Recúperala aquí!
        </button>

        <div className="form__buttons">
          <button className="form__button" type="submit">
            Logearse
          </button>
          <button className="form__button" type="button">
            <p>¿No tienes cuenta?</p>
            ¡Regístrate!
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
