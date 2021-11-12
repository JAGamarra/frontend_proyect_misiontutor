import { Image } from "react-bootstrap";

function Header() {
    return (
        <div>
            <div style={styles.contTitulo}>
                <h1 style={styles.titulo}>Misión Tutor</h1>
            </div>
            <Image
                src="http://www.exa.unrc.edu.ar/wp-content/uploads/2018/12/tutores-1023x525.gif"
                style={styles.image}
                alt="manos de jovenes escribiendo"
            />
        </div>
    );
}
export default Header;

const styles = {
    contTitulo: { 
        position: 'absolute', 
        width: '100%', 
        marginTop: '15px',
    },
    titulo: { 
        color: 'white', 
        fontSize: '5rem', 
    },
    image: { 
        height: "50vh", 
        width: '95vw', 
    },
}