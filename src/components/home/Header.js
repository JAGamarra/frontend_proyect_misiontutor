import { Image } from "react-bootstrap";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="hero">
      <div style={styles.contTitulo}>
        <h1 style={styles.titulo}>Misión Tutor</h1>
      </div>
      {/* <Image
        src="http://www.exa.unrc.edu.ar/wp-content/uploads/2018/12/tutores-1023x525.gif"
        style={styles.image}
        alt="manos de jovenes escribiendo"
      /> */}
      {/* <p style={styles.parrafo}>
        La mejor educación online de la mano de los mejores profesores!
      </p> */}
    </div>
  );
}
export default Header;

const styles = {
  contTitulo: {
    position: "absolute",
    width: "100%",
    marginTop: "15px",
  },
  titulo: {
    color: "white",
    fontSize: "5rem",
  },
  image: {
    height: "50vh",
    width: "95vw",
  },
  parrafo: {
    position: "absolute",
    marginTop: "200px",
    color: "white",
    fontSize: "2rem",
    with: "100%",
    marginRight: "40px",
  },
};
