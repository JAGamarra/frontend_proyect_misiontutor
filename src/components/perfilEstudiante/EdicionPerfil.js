// COMPONENTES BOOTSTRAP
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//COMPONENTES
import FormPerfil from "./FormPerfil";
import CambiarPassword from "./CambiarPassword"
import CerraCuenta from "./CerrarCuenta"

const  EdicionPerfil = () => {
    return ( 
        <div Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Perfil">

                    <FormPerfil />

                </Tab>
                <Tab eventKey="profile" title="Cambiar contraseña">

                    <CambiarPassword />

                </Tab>
                <Tab eventKey="contact" title="Cerrar cuenta" >

                   <CerraCuenta />
                   
                </Tab>
            </Tabs>
        </div>
     );
}
 
export default EdicionPerfil ;