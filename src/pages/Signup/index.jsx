import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '~/components/Button';
import Input from '~/components/Input';
import './index.css';

const Signup = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (name && username &&
            email && validateEmail && password)
            history.push('/home');
    }

    const validateEmail = /\S+@\S+\.\S+/.test(email);

    const handleInputName = (e) =>{
        setName(e.target.value);
    }

    const handleInputUsername = (e) =>{
        setUsername(e.target.value);
    }

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form className="signup-form">
            <legend className="signup-title">
                <h3>Cadastro</h3>
            </legend>

            <label className="signup-label">Name:</label>
            <Input type="text" value={name}
                onChange={handleInputName} required={true} />

            <label className="signup-label">Username:</label>
            <Input type="text" value={username}
                onChange={handleInputUsername} required={true} />

            <label className="signup-label">Email:</label>
            <Input type="email" value={email}
                onChange={handleInputEmail} required={true} />

            <label className="signup-label">Password:</label>
            <Input type="password" value={password}
                onChange={handleInputPassword} required={true} />

            <div className="signup-button">
                <Button handleClick={handleLogin}>Cadastrar</Button>
            </div>

            <a className="signup-link" href="/login">Já possui conta? Clique aqui para o Login!</a>
        </form>
    );
}

export default Signup;