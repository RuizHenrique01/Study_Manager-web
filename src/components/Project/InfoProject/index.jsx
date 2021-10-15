import { React, useState } from 'react';
import crossImage from '~/assets/cross.svg';
import Box from '../../Box';
import Input from '../../Input';
import Button from '../../Button';
import ErrorMessage from '../../ErrorMessage';
import './index.css';

const InfoProject = ({ project, handleClickClose }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isUnValidated, setUnValidated] = useState(false);

    const handleInputName = (e) => {
        setUnValidated(false);
        setName(e.target.value);
    }

    const handleInputDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <Box handleClick={handleClickClose}>

            <button className="box-close-button" onClick={handleClickClose}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="info-project-title">
                <h3>Informações do projeto</h3>
            </legend>

            <label className="info-project-label">Nome:</label>
            <div className="info-project-input">
                <Input type="text" name="name" value={project.name}
                    onChange={handleInputName} required={true} autoComplete="off" />
            </div>

            {isUnValidated ? <ErrorMessage>Name is required</ErrorMessage> : null}

            <label className="info-project-label">Descrição:</label>
            <div className="info-project-input">
                <Input type="text" name="description" value={project.description}
                    onChange={handleInputDescription} autoComplete="off" />
            </div>

            <div className="info-project-button">
                <Button type='button' disabled={true}>
                    Salvar
                </Button>
            </div>
        </Box>
    );
}

export default InfoProject;