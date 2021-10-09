import { React, useState } from 'react';
import crossImage from '~/assets/cross.svg';
import Box from '~/components/Box';
import Input from '~/components/Input';
import Button from '~/components/Button';
import './index.css';
import instance from '~/services/api';

const AddTask = ({ handleClickClose, token, id }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const createTask = async () => {
        if (name) {
            await instance.post("/projects/" + id + "/task", {
                name,
                description,
                date
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }).catch(err => {
                console.log(err);
            });

            handleClickClose();
        } 
    }

    return (
        <Box handleClick={handleClickClose}>
            <button className="box-close-button" onClick={() => handleClickClose()}>
                <img className="box-icon-button" src={crossImage} alt="Icone de informações" />
            </button>

            <legend className="add-task-title">
                <h3>Crie uma nova tarefa:</h3>
            </legend>

            <label className="add-task-label">Nome:</label>
            <div className="add-task-input">
                <Input type="text" name="name" onChange={handleName} required={true} />
            </div>

            <label className="add-task-label">Descrição:</label>
            <div className="add-task-input">
                <Input type="text" name="description" onChange={handleDescription} required={true} />
            </div>

            <label className="add-task-label">Data de Entrega:</label>
            <div className="input-date-task">
                <Input type="date" name="date" onChange={handleDate}/>
            </div>

            <div className="add-task-button">
                <Button type='button' handleClick={createTask}>
                    Criar
                </Button>
            </div>
        </Box>
    );
}

export default AddTask;