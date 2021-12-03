import Rutas from "../components/Rutas/Rutas";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Rutas />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
