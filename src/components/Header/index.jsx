import React from 'react';
import { useHistory } from "react-router-dom";
import userImage from '~/assets/user.svg';
import { connect } from 'react-redux';
import './index.css'

const Header = ({ dispatch }) => {

    const history = useHistory();

    function handlePerfil() {
        history.push('/perfil');
    }

    function handleProjects() {
        history.push('/home');
    }

    function handleLogout() {
        dispatch({ type: 'SET_TOKEN', });
        history.push('/login');
    }

    return (
        <header className="home-header">

            <span className="home-header-option" onClick={handleProjects}>Projects</span>

            <span className="home-header-option" onClick={handleLogout}>Logout</span>

            <button className="home-header-button" type='button' onClick={handlePerfil}>
                <img className="home-header-image" src={userImage} alt="Imagem do Usuário" />
            </button>
        </header>
    );
};

export default connect()(Header);