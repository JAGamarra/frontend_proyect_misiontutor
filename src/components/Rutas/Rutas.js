import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Home from "../home/Home";
import Login from "../login/Login";
import Navegador from "../Navegador";
import PerfilEstudiante from "../perfilEstudiante/PerfilEstudiante";
import Tutor from "../../views/Tutores/Tutores";
import { PerfilTutor } from "../../views/Tutores/PerfilTutor";
import {PerfilTutorEstudiante} from "../../views/Tutores/PerfilTutorEstudiante";
import PreguntasExpress from "../../views/PreguntasRapidas/PreguntasExpress"                                                                                                     
import { RespuestasExpress } from "../../views/PreguntasRapidas/RespuestasExpress";
import FormRegistro from "../registro/FormRegistro";
function Rutas() {
    return (
        <>

            <Router>
                <Navegador />
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/registro" element={<FormRegistro />} />
                    <Route exact path="/perfilEstudiante" element={<PerfilEstudiante />} />
                    <Route exact path="/tutor" element={<Tutor />} />
                    <Route exact path="/perfiltutor" element={<PerfilTutor />} />
                    <Route exact path="/perfiltutorEstudiante" element={<PerfilTutorEstudiante />} />
                    <Route exact path="/preguntasExpress" element={<PreguntasExpress />} />
                    <Route exact path="/respuestasExpress" element={<RespuestasExpress />} />
                    <Route exacr path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>

        </>
    );
}
export default Rutas;