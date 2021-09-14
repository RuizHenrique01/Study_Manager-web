import React from 'react';
import './index.css';

import Header from '~/components/Header';
import userImage from '~/assets/user.svg';

const Perfil = () => {
    return (
        <>
            <Header />
            <main className="perfil-main">
                <div className="perfil-flex">
                    <img src={userImage} alt="Foto de perfil do usuário."
                        className="perfil-foto" />
                </div>
                <div className="perfil-flex">

                </div>
            </main>
        </>
    );
}

export default Perfil;
