import React from "react";
import "../../styles/TeacherPool.css";

const TeacherPool = () => {
  return (
    <section>
      <h2 className="pool__title">Encuentra el profe adecuado para ti</h2>
      <div className="filter-content">
        <input className="input" type="text" placeholder="¿Qué materia?" />
        <input className="input" type="text" placeholder="Tu ubicación" />
        <button className="search-btn">Buscar</button>
      </div>
      <main className="pool">
        <h3 className="pool__title">Nuestros Profes</h3>
        <section className="card--grid">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/21/15/57/ruben-2427641_960_720.jpg"
              alt="profile"
            />
            <h4>Perengano</h4>
            <p>Descripción</p>
            <p>
              $12000 <sub>/h</sub>
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/21/15/57/ruben-2427641_960_720.jpg"
              alt="profile"
            />
            <h4>Fulano</h4>
            <p>Descripción</p>
            <p>
              $12000 <sub>/h</sub>
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/21/15/57/ruben-2427641_960_720.jpg"
              alt="profile"
            />
            <h4>Juanito</h4>
            <p>Descripción</p>
            <p>
              $12000 <sub>/h</sub>
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/21/15/57/ruben-2427641_960_720.jpg"
              alt="profile"
            />
            <h4>Pepito</h4>
            <p>Descripción</p>
            <p>
              $12000 <sub>/h</sub>
            </p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default TeacherPool;
