import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiUser } from "./Api";
import { apiLogin, apiRegister, apiUserRol } from "./Api";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setAuth(true);
        }
    }, []);

    const handleRegister = (objUser) => {
        //peticion a servidor
        fetch(apiRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        }).then(async (resp) => {
            if (resp.status === 201) {
                let json = await resp.json();
                let token = json.token;
                //guardar token en localstorage
                localStorage.setItem('token', token);
                setAuth(true);
                navigate('/perfilEstudiante');
            } else {
                alert("Error de registro");
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const handleLogin = async (objUser) => {
        const resp = await fetch(apiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        if (resp.status === 200) {
            setAuth(true);
            let json = await resp.json();
            let token = json.token;
            localStorage.setItem('token', token);
            navigate('/perfilEstudiante');
        }
        return resp;
    }

    const handleUser = async () => {
        const token = localStorage.getItem('token');
        const resp = await fetch(apiUser, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        return resp;
    }

    const handleUserRol = async (objRol) => {
        const token = localStorage.getItem('token');
        const resp = await fetch(apiUserRol, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objRol)
        });
        return resp;
    }

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        setAuth(false);
        navigate('/');
    }

    const data = { handleRegister, handleLogin, handleUser, auth, cerrarSesion, handleUserRol };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

export { AuthProvider };
export default AuthContext;