// COMPONENTES BOOTSTRAP
import Tab from "react-bootstrap/Tab";
import React, { useState, useContext, useEffect } from 'react';
import Tabs from "react-bootstrap/Tabs";

//COMPONENTES
import FormPerfil from "./FormPerfil";
import CambiarPassword from "./CambiarPassword"
import CerraCuenta from "./CerrarCuenta"
import AuthContext from '../../context/AuthContext';

const EdicionPerfil = () => {

    const { handleUser } = useContext(AuthContext);
    const {handleUserUpdate} =  useContext(AuthContext);
    const {handleUserUpdatePass} =  useContext(AuthContext);
    const [datos, setDatos] = useState();

    const getUser = async () => {
        const resp = await handleUser();
        if (resp.status === 200) {
            //json contiene el arreglo con toda la informacion
            let json = await resp.json();
            setDatos(json[0]);
        }
    }

    return (
        <div Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Perfil">

                    <FormPerfil datos={datos} getUser={getUser} update={handleUserUpdate} />

                </Tab>
                <Tab eventKey="profile" title="Cambiar contraseña">

                    <CambiarPassword datos={datos} getUser={getUser} updatePass={handleUserUpdatePass}/>

                </Tab>
                <Tab eventKey="contact" title="Cerrar cuenta" >

                    <CerraCuenta />

                </Tab>
            </Tabs>
        </div>
    );
}

export default EdicionPerfil;