import React, { useState } from 'react';
import './LoginTBB.css';

function LoginTBB() {
  const [Usuario, setUsername] = useState('');
  const [Contraseña, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser(Usuario, Contraseña);
  };

  const authenticateUser = (username, password) => {
   
    const credentials = {
      username: 'usuariotbb',
      password: 'tbb123',
    };

    if (username === credentials.username && password === credentials.password) {
      console.log('Authenticated successfully!');
      
    } else {
      setError('Usuario o Contraseña incorrectos');
    }
  };

  return (
    <div>
      <img src="LOGOtbb.png" />
      <h1>TBB SAS</h1>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuario:</label>
        <input type="text" value={Usuario} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="Password" value={Contraseña} onChange={(event) => setPassword(event.target.value)} />
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginTBB;