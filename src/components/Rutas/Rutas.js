import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Home from "../home/Home";
import Login from "../login/Login";
import Navegador from "../Navegador";
import PerfilEstudiante from "../perfilEstudiante/PerfilEstudiante";
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
                    <Route exacr path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>

        </>
    );
}
export default Rutas;