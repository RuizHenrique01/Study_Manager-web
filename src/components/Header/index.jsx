import React from 'react';
import { useHistory } from "react-router-dom";
import userImage from '~/assets/user.svg';
import './index.css'

const Header = () => {

    const history = useHistory();

    function handlePerfil() {
        history.push('/perfil');
    }

    function handleProjects() {
        history.push('/home');
    }

    return (
        <header className="home-header">

            <span className="home-header-option" onClick={handleProjects}>Projects</span>

            <span className="home-header-option">Logout</span>

            <button className="home-header-button" type='button' onClick={handlePerfil}>
                <img className="home-header-image" src={userImage} alt="Imagem do Usuário" />
            </button>
        </header>
    );
};

export default Header;