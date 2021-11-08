import React from 'react';
import './index.css';

const Menu = () => {
    return (
        <div className="menu-content">
            <ul className="menu-options">
                <li className="options">
                    <span className="title-option">Perfil</span>
                </li>
                <li className="options">
                    <span className="title-option">LogOut</span>
                </li>
            </ul>
        </div>
    );
}

export default Menu;