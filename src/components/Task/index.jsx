import React, { useState } from 'react';
import {TaskServices as taskServices} from '~/modules/task';
import InfoTask from './InfoTask';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import DeleteTask from './DeleteTask';
import './index.css';

const Task = ({ task, id, idProject, token, checked }) => {

    const [isBoxIfonTaskOpen, setIsBoxIfonTaskOpen] = useState(false);
    const [isBoxDeleteTaskOpen, setIsBoxDeleteTaskOpen] = useState(false);

    const handleOpenBoxInfoTask = () => {
        setIsBoxIfonTaskOpen(!isBoxIfonTaskOpen);
    }

    const handleOpenBoxDeleteTask= () => {
        setIsBoxDeleteTaskOpen(!isBoxDeleteTaskOpen);
    }

    const updateTask = async () => {
        await taskServices.updateTask({id, idProject, isCompleted: checked, token});
    }

    return (
        <>
            <div className="task-conteiner">

                <input type="checkbox" onChange={updateTask} className="task-checkbox"
                    id={id} tabIndex="1" defaultChecked={checked} />
                <label className="task-title" htmlFor={id}>
                    <span className="task-check" />
                    <span>{task.name}</span>
                </label>

                <button type='button' className="task-button" onClick={handleOpenBoxInfoTask} tabIndex="2">
                    <img className="task-icon" src={infoImage} alt="Icone de informações" />
                </button>

                <button type="button" className="task-button" onClick={handleOpenBoxDeleteTask} tabIndex="3">
                    <img className="task-icon" src={crossImage} alt="Icone de informações" />
                </button>

            </div>

            { isBoxIfonTaskOpen ? <InfoTask task={task} handleClickClose={handleOpenBoxInfoTask}/> : null }

            { isBoxDeleteTaskOpen ? <DeleteTask task={task} handleClickClose={handleOpenBoxDeleteTask}/> : null }
        </>
    );
}

export default Task;