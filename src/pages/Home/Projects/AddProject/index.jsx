import { React, useState } from 'react';
import { ProjectServices as project } from '~/modules/project';
import crossImage from '~/assets/cross.svg';
import Box from '~/components/Box';
import Input from '~/components/Input';
import Button from '~/components/Button';
import ErrorMessage from '~/components/ErrorMessage';
import './index.css';

const AddProject = ({ handleClickClose, token }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isUnValidated, setUnValidated] = useState(false);

    function handleInputName(e) {
        setUnValidated(false);
        setName(e.target.value);
    }

    function handleInputDescription(e) {
        setDescription(e.target.value);
    }

    async function createProject() {
        if (name) {
            await project.createProject({ name, description, token });

            handleClickClose();
        } else {
            setUnValidated(true);
        }
    }

    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="add-project-title">
                <h3>Crie um projeto</h3>
            </legend>

            <label className="add-project-label">Nome:</label>
            <div className="add-project-input">
                <Input type="text" name="name" onChange={handleInputName}
                    required={true} autoComplete="off" />
            </div>

            {isUnValidated && <ErrorMessage>Name is required</ErrorMessage>}

            <label className="add-project-label">Descrição:</label>
            <div className="add-project-input">
                <Input type="text" name="description"
                    onChange={handleInputDescription} autoComplete="off" />
            </div>

            <div className="add-project-button">
                <Button type='button' handleClick={createProject}>
                    Criar
                </Button>
            </div>
        </Box>
    );
}

export default AddProject;