import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Home from "../home/Home";
import Login from "../login/Login";
import Navegador from "../Navegador";
import PerfilEstudiante from "../perfilEstudiante/PerfilEstudiante";
import TeacherPool from "../teacherPool/TeacherPool";
function Rutas() {
  return (
    <>
      <Router>
        <Navegador />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/perfilEstudiante"
            element={<PerfilEstudiante />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/teacher-pool" element={<TeacherPool />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default Rutas;
