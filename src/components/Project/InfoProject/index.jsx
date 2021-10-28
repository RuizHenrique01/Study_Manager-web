import { React, useState, useEffect } from 'react';
import { ProjectServices as projectServices } from '~/modules/project';
import crossImage from '~/assets/cross.svg';
import Box from '../../Box';
import Input from '../../Input';
import Button from '../../Button';
import ErrorMessage from '../../ErrorMessage';
import './index.css';

const InfoProject = ({ project, handleClickClose, token }) => {

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [isUnValidated, setUnValidated] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(true);

    function handleInputName(e) {
        setName(e.target.value);
    }

    function handleInputDescription(e) {
        setDescription(e.target.value);
    }

    async function updateProject() {
        await projectServices.updateProject({
            id: project._id,
            name,
            description,
            token,
        });

        handleClickClose();
    }

    useEffect(() => {
        if (name !== project.name || description !== project.description) {
            setIsDisabledButton(false);
        } else {
            setIsDisabledButton(true);
        }

        if (!name) {
            setUnValidated(true);
            setIsDisabledButton(true);
        } else {
            setUnValidated(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, description]);

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
                <Input type="text" name="name" value={name}
                    onChange={handleInputName} required={true} autoComplete="off" />
            </div>

            {isUnValidated ? <ErrorMessage>Name is required</ErrorMessage> : null}

            <label className="info-project-label">Descrição:</label>
            <div className="info-project-input">
                <Input type="text" name="description" value={description}
                    onChange={handleInputDescription} autoComplete="off" />
            </div>

            <div className="info-project-button">
                <Button type='button' disabled={isDisabledButton} handleClick={updateProject}>
                    Salvar
                </Button>
            </div>
        </Box>
    );
}

export default InfoProject;