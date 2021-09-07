import React from 'react';

import crossImage from '~/assets/cross.svg';
import Box from '~/components/Box';
import Input from '~/components/Input';
import Button from '~/components/Button';
import './index.css';

const AddTask = ({ handleClickClose }) => {
    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="add-task-title">
                <h3>Crie uma nova tarefa:</h3>
            </legend>

            <label className="add-task-label">Nome:</label>
            <Input type="text" required={true} />

            <label className="add-task-label">Descrição:</label>
            <Input type="text" required={true} />

            <label className="add-task-label">Descrição:</label>
            <Input type="text" />

            <label className="add-task-label">Data de Entrega:</label>
            <div className="input-date-task">
                <Input type="date" />
            </div>

            <div className="add-task-button">
                <Button>
                    Criar
                </Button>
            </div>
        </Box>
    );
}

export default AddTask;