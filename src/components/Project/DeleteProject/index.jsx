import React from 'react';
import crossImage from '~/assets/cross.svg';
import DeleteMessage from '../../DeleteMessage';
import Button from '../../Button';
import './index.css';

const DeleteProject = ({ project, handleClickClose, handleClick }) => {
    return (
        <DeleteMessage handleClick={handleClickClose}>

            <button className="box-close-button" onClick={handleClickClose}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <h3 className='title-delete-project'>Deseja realmente excluir o projeto {project.name}?</h3>

            <p className='message-delete-project'>Clicando no botão de confirmação o projeto será excluido com todas as suas informações permanentemente!</p>

            <div className="buttons-delete-project">
                <Button type='button' handleClick={() => {
                    handleClick();
                    handleClickClose();
                }}>Sim</Button>

                <Button type='button' handleClick={handleClickClose}>Cancelar</Button>
            </div>
        </DeleteMessage>
    );
}

export default DeleteProject;