import React from 'react';
import './index.css'

import { useHistory } from "react-router-dom";
import userImage from '~/assets/user.svg'

const Header = () => {

    const history = useHistory();

    function handlePerfil() {
        history.push('/perfil');
    }

    return (
        <header className="home-header">
            <button className="home-header-button" type='button' onClick={handlePerfil}>
                <img className="home-header-image" src={userImage} alt="Imagem do Usuário" />
            </button>
        </header>
    );
};

export default Header;