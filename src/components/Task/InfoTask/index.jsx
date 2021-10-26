import { React, useState } from 'react';
import crossImage from '~/assets/cross.svg';
import Box from '../../Box';
import Input from '../../Input';
import Button from '../../Button';
import ErrorMessage from '../../ErrorMessage';
import './index.css';

const InfoTask = ({ task, handleClickClose }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();
    const [isUnValidated, setUnValidated] = useState(false);

    function handleInputName(e) {
        setUnValidated(false);
        setName(e.target.value);
    }

    function handleInputDescription(e) {
        console.log(dateFormatConverter());
        setDescription(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function dateFormatConverter() {
        const date = new Date(task.date);

        const day = date.getDate() < 10 ? "0" + (date.getDate() + 1) : date.getDate() + 1;
        const month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        const year = date.getFullYear();

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
                <Input type="text" name="name" value={task.name}
                    onChange={handleInputName} required={true} autoComplete="off" />
            </div>

            {isUnValidated ? <ErrorMessage>Name is required</ErrorMessage> : null}

            <label className="info-task-label">Descrição:</label>
            <div className="info-task-input">
                <Input type="text" name="description" value={task.description}
                    onChange={handleInputDescription} autoComplete="off" />
            </div>

            <label className="add-task-label">Data de Entrega:</label>
            <div className="input-date-task">
                <Input type="date" name="date" onChange={handleDate} value={dateFormatConverter()} />
            </div>

            <div className="info-project-button">
                <Button type='button' disabled={true}>
                    Salvar
                </Button>
            </div>
        </Box>
    );
}

export default InfoTask;