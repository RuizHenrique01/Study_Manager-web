import { React } from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import './index.css';

const Signup = () => {
    return (
        <form className="signup-form">
            <legend className="signup-title">
                <h3>Cadastro</h3>
            </legend>

            <label className="signup-label">Name:</label>
            <Input type="text" required={true} />

            <label className="signup-label">Username:</label>
            <Input type="text" required={true} />

            <label className="signup-label">Email:</label>
            <Input type="email" required={true} />

            <label className="signup-label">Password:</label>
            <Input type="password" required={true} />

            <div className="signup-button">
                <Button>Cadastrar</Button>
            </div>

        </form>
    );
}

export default Signup;