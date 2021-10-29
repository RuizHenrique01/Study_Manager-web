import React from 'react';
import { TaskServices as taskServices } from '~/modules/task';
import crossImage from '~/assets/cross.svg';
import DeleteMessage from '../../DeleteMessage';
import Button from '../../Button';
import './index.css';

const DeleteTask = ({ task, handleClickClose, token }) => {

    async function deleteTask() {
        await taskServices.deleteTask({
            id: task._id,
            idProject: task.idProject,
            token
        });

        handleClickClose();
    }

    return (
        <DeleteMessage handleClick={handleClickClose}>

            <button className="box-close-button" onClick={handleClickClose}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <h3 className='title-delete-task'>Deseja realmente excluir a tarefa {task.name}?</h3>

            <p className='message-delete-task'>Clicando no botão de confirmação a tarefa será excluida permanentemente!</p>

            <div className="buttons-delete-task">
                <Button type='button' handleClick={deleteTask}>Sim</Button>

                <Button type='button' handleClick={handleClickClose}>Cancelar</Button>
            </div>
        </DeleteMessage>
    );
}

export default DeleteTask;