import { React } from "react";
import instance from '~/services/api';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Button from '~/components/Button';
import InputForm from '~/components/InputForm';
import ErrorWarning from '~/components/ErrorWarning';
import ErrorMessage from "~/components/ErrorMessage";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './index.css';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

const Login = ({ dispatch }) => {

    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const history = useHistory();

    const onSubmit = async ({ email, password }) => {
        const token = await handleSession({ email, password });

        if (token) {
            clearErrors(["login", "email", "password"]);
            dispatch({ type: 'SET_TOKEN', token })
            history.push('/home');
        }
    }

    const handleSession = async ({ email, password }) => {
        const { data } = await instance.post('/user/login', {
            email,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).catch(() => {
            setError("login", {
                message: "Email/Password is incorrect!",
            });

            return {data: undefined};
        });

        return data?.token;
    }

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <legend className="login-title">
                <h3>Login</h3>
            </legend>

            {errors.login && <ErrorWarning>{errors.login.message}</ErrorWarning>}

            <label className="login-label">Email:</label>
            <div className="login-input">
                <InputForm type="email" name="email" register={register}/>
            </div>

            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <label className="login-label">Password:</label>
            <div className="login-input">
                <InputForm type="password" name="password" register={register}/>
            </div>

            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <div className="login-button">
                <Button type='submit'>Entrar</Button>
            </div>

            <a className="login-link" href="/signup">Ainda não possui conta? Cadastre-se aqui!</a>
        </form>
    );
}

export default connect()(Login);