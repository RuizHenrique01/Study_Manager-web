import { React } from "react";
import instance from '~/services/api';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Button from '~/components/Button';
import InputForm from '~/components/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './index.css';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

const Login = () => {

    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const history = useHistory();

    const onSubmit = async ({ email, password }) => {
        const token = await handleSession({ email, password });

        if (token) {
            clearErrors("email");
            history.push('/home');
        }
    }

    const handleSession = async ({ email, password }) => {
        const token = await instance.post('/user/login', {
            email: email,
            password: password
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).catch(() => {
            setError("email", {
                message: "Email/Password is incorrect!",
            });

            return false;
        });

        return token;
    }

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <legend className="login-title">
                <h3>Login</h3>
            </legend>

            {errors.email && <span className="span-error-message">
                {errors.email.message}</span>}

            <label className="login-label">Email:</label>
            <div className="login-input">
                <InputForm type="email" name="email" register={register} required={true}/>
            </div>

            <label className="login-label">Password:</label>
            <div className="login-input">
                <InputForm type="password" name="password" register={register} required={true}/>
            </div>

            <div className="login-button">
                <Button type='submit'>Entrar</Button>
            </div>

            <a className="login-link" href="/signup">Ainda não possui conta? Cadastre-se aqui!</a>
        </form>
    );
}

export default Login;