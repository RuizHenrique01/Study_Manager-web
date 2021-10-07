import { React } from "react";
import { useHistory } from "react-router-dom";
import instance from '~/services/api';
import Button from '~/components/Button';
import InputForm from '~/components/InputForm';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './index.css';

const schema = yup.object({
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirm_password: yup.string().min(6).required()
}).required();

const Signup = () => {
    const history = useHistory();

    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onCreateAccount = async ({ name, username, email, password, confirm_password }) => {
        if (password === confirm_password) {
            const token = await handleSession({ name, username, email, password });

            if (token) {
                clearErrors(["login", "passwordIsDiferent", "name",
                    "username", "email", "password", "confirm_password"]);
                history.push('/home');
            }
        } else {
            setError("confirm_password", {
                message: "Password confirmation error!",
            });
        }
    }

    const handleSession = async ({ name, username, email, password }) => {
        const token = await instance.post('/user/signup', {
            name,
            username,
            email,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).catch(() => {

            setError("login", {
                message: "Email already exists!",
            });

            return false;
        });

        return token;
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit(onCreateAccount)}>
            <legend className="signup-title">
                <h3>Cadastro</h3>
            </legend>

            {errors.login && <span className="span-error-message">
                {errors.login.message}</span>}

            {errors.passwordIsDiferent && <span className="span-error-message">
                {errors.passwordIsDiferent.message}</span>}

            <label className="signup-label">Name:</label>
            <div className="signup-input">
                <InputForm name="name" type="text" register={register}/>
            </div>

            {errors.name && <span className="span-input-error-message">
                {errors.name.message}</span>}

            <label className="signup-label">Username:</label>
            <div className="signup-input">
                <InputForm name="username" type="text" register={register}/>
            </div>

            {errors.username && <span className="span-input-error-message">
                {errors.username.message}</span>}

            <label className="signup-label">Email:</label>
            <div className="signup-input">
                <InputForm name="email" type="email" register={register}/>
            </div>

            {errors.email && <span className="span-input-error-message">
                {errors.email.message}</span>}

            <label className="signup-label">Password:</label>
            <div className="signup-input">
                <InputForm name="password" type="password" register={register}/>
            </div>

            {errors.password && <span className="span-input-error-message">
                {errors.password.message}</span>}

            <label className="signup-label">Confirm Password:</label>
            <div className="signup-input">
                <InputForm name="confirm_password" type="password" register={register}/>
            </div>

            {errors.confirm_password && <span className="span-input-error-message">
                {errors.confirm_password.message}</span>}

            <div className="signup-button">
                <Button type="submit">Cadastrar</Button>
            </div>

            <a className="signup-link" href="/login">Já possui conta? Clique aqui para o Login!</a>
        </form>
    );
}

export default Signup;