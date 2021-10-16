import React from 'react';
import crossImage from '~/assets/cross.svg';
import DeleteMessage from '../../DeleteMessage';
import Button from '../../Button';
import './index.css';

const DeleteTask = ({ task, handleClickClose }) => {
    return (
        <DeleteMessage handleClick={handleClickClose}>

            <button className="box-close-button" onClick={handleClickClose}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <h3 className='title-delete-task'>Deseja realmente excluir a tarefa {task.name}?</h3>

            <p className='message-delete-task'>Clicando no botão de confirmação a tarefa será excluida permanentemente!</p>

            <div className="buttons-delete-task">
                <Button>Sim</Button>

                <Button>Cancelar</Button>
            </div>
        </DeleteMessage>
    );
}

export default DeleteTask;