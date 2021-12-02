import React, { useState, useContext, useEffect } from 'react';

// importar tarjetas 
import TarjetasProfesores from "./TarjetasProfesores"

import AuthContext from '../../context/AuthContext';

// COMPONENTE CATALOGO DE PROFESORES
const Catalogo = () => {

 const {handleUser} = useContext(AuthContext);

  const [users, setUsers] = useState([
    { rol:"profesor", name: "luis", asignatura: "mate", ciudad: "cartago",id: 1 },
    { rol:"estudiante",name: "sara", asignatura: "arte", ciudad: "Cali", id: 2 },
    { rol:"profesor",name: "luis", asignatura: "mate", ciudad: "Bogotá", id: 3 },
    { rol:"profesor",name: "Sofía", asignatura: "inglés", ciudad: "Bogotá", id: 4 },
    { rol:"profesor",name: "Diana", asignatura: "mate", ciudad: "Bogotá", id: 6 },
    { rol:"estudiante",name: "Diana", asignatura: "mate", ciudad: "Bogotá", id: 7 },
    { rol:"profesor",name: "Diana", asignatura: "mate", ciudad: "Bogotá", id: 8 },
    { rol:"profesor",name: "Diana", asignatura: "mate", ciudad: "Bogotá", id: 9 },
    { rol:"estudiante", name: "Diana", asignatura: "mate", ciudad: "Bogotá", id: 10 },
  ]);

  

  return (
    <div className="catalogo">

        <TarjetasProfesores users={users} />
      
    </div>
  );
};

export default Catalogo;
