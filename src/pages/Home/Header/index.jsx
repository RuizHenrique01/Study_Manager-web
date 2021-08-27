import React from 'react';
import './index.css'
import userImage from '../../../assets/user.svg'

const Header = () => {
    return (
        <header className="home-header">
            <button className="home-header-button">
                <img className="home-header-image" src={userImage} alt="Imagem do Usuário"/>
            </button>
        </header>
    );
};

export default Header;