import Contacto from "./Contacto";
import Header from "./Header";
import Opiniones from "./Opiniones";
import Servicios from "./Servicios";

function Home(){
    return(
        <div>
            <Header />
            <Servicios />
            <Opiniones />
            <Contacto />
        </div>
    );
}

export default Home;