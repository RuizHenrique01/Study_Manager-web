import { React, useState } from 'react';
import crossImage from '~/assets/cross.svg';
import Box from '../../Box';
import Input from '../../Input';
import Button from '../../Button';
import ErrorMessage from '../../ErrorMessage';
import './index.css';

const InfoTask = ({ task, handleClickClose }) => {

    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    const [date, setDate] = useState(task.date);
    const [isUnValidated, setUnValidated] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(false);

    function handleInputName(e) {
        if (name !== task.name) {
            setIsDisabledButton(true);
        }
        setName(e.target.value);
    }

    function handleInputDescription(e) {
        setDescription(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function dateFormatConverter() {
        const dateTask = new Date(date);

        const day = dateTask.getDate() < 10 ? "0" + (dateTask.getDate() + 1) : dateTask.getDate() + 1;
        const month = dateTask.getMonth() < 10 ? "0" + (dateTask.getMonth() + 1) : dateTask.getMonth() + 1;
        const year = dateTask.getFullYear();

        return `${year}-${month}-${day}`;
    }

    return (
        <Box handleClick={handleClickClose}>

            <button className="box-close-button" onClick={handleClickClose}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="info-task-title">
                <h3>Informações do projeto</h3>
            </legend>

            <label className="info-task-label">Nome:</label>
            <div className="info-task-input">
                <Input type="text" name="name" value={name}
                    onChange={handleInputName} required={true} autoComplete="off" />
            </div>

            {isUnValidated ? <ErrorMessage>Name is required</ErrorMessage> : null}

            <label className="info-task-label">Descrição:</label>
            <div className="info-task-input">
                <Input type="text" name="description" value={description}
                    onChange={handleInputDescription} autoComplete="off" />
            </div>

            <label className="add-task-label">Data de Entrega:</label>
            <div className="input-date-task">
                <Input type="date" name="date" onChange={handleDate} value={dateFormatConverter()} />
            </div>

            <div className="info-project-button">
                <Button type='button' disabled={isDisabledButton}>
                    Salvar
                </Button>
            </div>
        </Box>
    );
}

export default InfoTask;