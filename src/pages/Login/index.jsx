import { React } from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import './index.css';

const Login = () => {
    return (
        <form className="login-form">
            <legend className="login-title">
                <h3>Login</h3>
            </legend>

            <label className="login-label">Email:</label>
            <Input type="email" required={true}/>

            <label className="login-label">Password:</label>
            <Input type="password" required={true}/>

            <Button name="Entrar"/>
        </form>
    );
}

export default Login;