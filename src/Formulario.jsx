import React, { useState } from 'react';
import './formulario.css';

function Formulario() {
    const [inputUsuario, setInputUsuario] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validar = (nombre, password) => {
        const usuarioValido=/^[^\d]/.test(nombre);
        const passwordValido=/^[a-zA-Z0-9]+$/.test(password);
        setIsValid(
            (nombre.length >= 3 && password.length >= 3 &&
            nombre.trim() !== '' &&
            password.trim() !== '' &&
            usuarioValido &&
            passwordValido
        ));
    };

    const validarUsuario = (e) => {
    const nombre = e.target.value;
        setInputUsuario(nombre);
        validar(nombre, inputPassword);
    };

    const validarPassword = (e) => {
    const password = e.target.value;
        setInputPassword(password);
        validar(inputUsuario, password);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (isValid) {
            alert('Formulario enviado con éxito');
            } else {
                alert('Error al enviar el formulario');
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                <div className="container-titulos">
                    <h1>Bienvenido</h1>
                    <h2>Ingrese sus credenciales</h2>
                </div>
                <div className="container-inputs">
                    <form onSubmit={manejarEnvio}>
                        <input
                            maxLength={40}
                            required
                            type="text"
                            placeholder="Ingrese su usuario"
                            value={inputUsuario}
                            onChange={validarUsuario}
                            style={{ borderColor: isValid ? 'black' : 'red' }}
                        />
                        {!isValid && (
                        <span style={{ color: 'red' }}>
                            Ingrese un usuario válido
                        </span>
                        )}
                        <input
                            maxLength={40}
                            required
                            type="password"
                            placeholder="Ingrese su password"
                            value={inputPassword}
                            onChange={validarPassword}
                            style={{ borderColor: isValid ? 'black' : 'red' }}
                        />
                        {!isValid && (
                        <span style={{ color: 'red' }}>Ingrese un password válido</span>
                        )}
                        <div className="container-options">
                            <span>Remember me</span>
                            <input type="checkbox" name="remember me" id="rememberMe" />
                        </div>
                        <button className="btn" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
