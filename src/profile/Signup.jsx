import React, { useState } from 'react';
import axios from 'axios';

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const [ok, setOk] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/signup`, {
            username: username,
            password: password
        })
            .then((response) => {
                console.log('Registro exitoso! Ahora puedes volver y loguearte');
                setError(false);
                setOk(true);

            })
            .catch((error) => {
                console.error('Ocurrió un error:', error);
                setError(true);
            });
    };

    return (
        <div className="Login">
            {msg.length > 0 && <div className="successMsg"> {msg} </div>}

            <div className='container_formulario_registrarse'>

                <br></br>
                <h3> Si no tienes una cuenta, regístrate, ¡Es gratis!</h3>

                <br></br>

                {error && <h3 className="error">Hubo un error con el Registro, por favor trata nuevamente.</h3>}
                {ok && <h3 className="ok">Registro exitoso! Ahora puedes volver y loguearte.</h3>}

                <br></br>

                <form onSubmit={handleSubmit}>
                    <label> Elige tu nombre de usuario: </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <br></br>
                    <br></br>

                    <label> Elige tu contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <br></br>
                    <br></br>

                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
