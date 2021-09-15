import React from 'react';
import './index.css';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Header from '~/components/Header';
import userImage from '~/assets/user.svg';

const Perfil = () => {
    return (
        <>
            <Header />
            <main className="perfil-main">
                <div className="perfil-flex">
                    <button className="perfil-foto-button">
                        <img className="perfil-foto" src={userImage}
                            alt="Foto de perfil do usuário." />
                    </button>
                </div>
                <div className="perfil-flex">
                    <form className="perfil-form" >
                        <label className="perfil-label">Name:</label>
                        <div className="perfil-input">
                            <Input type="text" required={true} />
                        </div>

                        <label className="perfil-label">Username:</label>
                        <div className="perfil-input">
                            <Input type="text" required={true} />
                        </div>

                        <label className="perfil-label">Email:</label>
                        <div className="perfil-input">
                            <Input type="email" required={true} />
                        </div>

                        <label className="perfil-label">Password:</label>
                        <div className="perfil-input">
                            <Input type="password" required={true} />
                        </div>

                        <div className="perfil-button">
                            <Button>Editar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Perfil;
