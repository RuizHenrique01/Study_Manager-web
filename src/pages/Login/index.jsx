import { React, useState } from "react";
import instance from '~/services/api'
import { useHistory } from "react-router-dom";
import Button from '~/components/Button';
import Input from '~/components/Input';
import './index.css';

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        if (email && validateEmail && password){
            const token = await handleSession({email, password});
            console.log(token);
            if(token.status !== 404){
                history.push('/home');
            }
        }
    }

    const validateEmail = /\S+@\S+\.\S+/.test(email);

    const handleSession = async ({ email, password }) => {
        const token = await instance.post('/user/login', {
            email: email,
            password: password
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        return token;
    }

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
            <div className="login-input">
                <Input type="email" value={email}
                    onChange={handleInputEmail} required={true} />
            </div>

            <label className="login-label">Password:</label>
            <div className="login-input">
                <Input type="password" value={password}
                    onChange={handleInputPassword} required={true} />
            </div>

            <div className="login-button">
                <Button type='button' handleClick={handleLogin}>Entrar</Button>
            </div>

            <a className="login-link" href="/signup">Ainda não possui conta? Cadastre-se aqui!</a>
        </form>
    );
}

export default Login;