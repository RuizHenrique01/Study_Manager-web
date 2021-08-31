import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '~/components/Button';
import Input from '~/components/Input';
import './index.css';

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && validateEmail && password)
            history.push('/home');
    }

    const validateEmail = /\S+@\S+\.\S+/.test(email);

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form className="login-form">
            <legend className="login-title">
                <h3>Login</h3>
            </legend>

            <label className="login-label">Email:</label>
            <Input type="email" value={email}
                onChange={handleInputEmail} required={true} />

            <label className="login-label">Password:</label>
            <Input type="password" value={password}
                onChange={handleInputPassword} required={true} />

            <div className="login-button">
                <Button handleClick={handleLogin}>Entrar</Button>
            </div>

            <a className="login-link" href="/signup">Ainda não possui conta? Cadastre-se aqui!</a>
        </form>
    );
}

export default Login;