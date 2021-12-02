import React, { useState, useContext, useEffect } from 'react';

// importar tarjetas 
import TarjetasProfesores from "./TarjetasProfesores"

import AuthContext from '../../context/AuthContext';

// COMPONENTE CATALOGO DE PROFESORES
const Catalogo = () => {

  const { handleUserRol } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getProfesores();
  }, []);

  const getProfesores = async () => {
    const resp = await handleUserRol({ rol: "profesor" });
    if (resp.status === 200) {
      let json = await resp.json();
      setUsers(json)
    }
  }

  return (
    <div className="catalogo">

      <TarjetasProfesores users={users} />

    </div>
  );
};

export default Catalogo;
