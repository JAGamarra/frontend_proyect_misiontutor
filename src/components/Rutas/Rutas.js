import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Footer from "../Footer";
import Home from "../home/Home";
import Login from "../login/Login";
import Navegador from "../Navegador";
import PerfilEstudiante from "../perfilEstudiante/PerfilEstudiante";
import FormRegistro from "../registro/FormRegistro";
function Rutas() {

    const { auth } = useContext(AuthContext);

    return (
        <>
            <Navegador auth={auth} />
            <Routes>
                {auth ?
                    <Route exact path="/perfilEstudiante" element={<PerfilEstudiante />} />
                    : (
                        <>
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/registro" element={<FormRegistro />} />
                        </>
                    )}
                <Route exacr path="/" element={<Home />} />
            </Routes>
            <Footer />

        </>
    );
}
export default Rutas;