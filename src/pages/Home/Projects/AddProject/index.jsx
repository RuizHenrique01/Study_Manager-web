import React from 'react';

import crossImage from '~/assets/cross.svg';
import Box from '~/components/Box';
import Input from '~/components/Input';
import Button from '~/components/Button';
import './index.css'

const AddProject = ({handleClickClose}) => {
    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="add-project-title">
                <h3>Crie um projeto</h3>
            </legend>

            <label className="add-project-label">Nome:</label>
            <Input />

            <label className="add-project-label">Descrição:</label>
            <Input />

            <div className="add-project-button">
                <Button>
                    Criar
                </Button>
            </div>

        </Box>
    );
}

export default AddProject;