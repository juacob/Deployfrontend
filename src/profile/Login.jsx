import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';


function Login() {

  const { token, setToken, setUserId } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/login`, {

      username: username,
      password: password

    }).then((response) => {

      console.log(response.data);

      console.log('Login successful');
      setError(false);

      setMsg("Login exitoso!");

      // Recibimos el token y lo procesamos
      const access_token = response.data.access_token;
      localStorage.setItem('token', access_token);
      setToken(access_token);
      //console.log("Se seteo el token: ", token);

      const username = response.data.username;
      localStorage.setItem('username', username);
      setUsername(username);

      const id = response.data.id;
      localStorage.setItem('id', id);
      setUserId(id);

      //console.log("Se seteo el username: ", username);

      //REDIRECCIONAR A JUEGO
      window.location.href = "/Juego";

    }).catch((error) => {
      console.error('An error occurred while trying to login:', error);
      setError(true);
    })

  };

  return (
    <div className="Login">

      {msg.length > 0 && <h3 className="ok"> {msg} </h3>}

      {error && <h3 className="error">Hubo un error con el Login, por favor trata nuevamente.</h3>}

      <form onSubmit={handleSubmit}>
        <br></br>
        <label> Ingresa tu nombre de usuario:</label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <br></br>
        <br></br>

        <label> Ingresa tu contraseña:    </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <br></br>
        <br></br>

        <button type="submit">Jugar</button>

      </form>


    </div>
  );
}

export default Login;