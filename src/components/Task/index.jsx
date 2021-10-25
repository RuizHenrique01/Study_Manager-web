import React, { useState } from 'react';
import { TaskServices as taskServices } from '~/modules/task';
import InfoTask from './InfoTask';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import DeleteTask from './DeleteTask';
import './index.css';

const Task = ({ task, token }) => {

    const [isBoxIfonTaskOpen, setIsBoxIfonTaskOpen] = useState(false);
    const [isBoxDeleteTaskOpen, setIsBoxDeleteTaskOpen] = useState(false);

    function handleOpenBoxInfoTask() {
        setIsBoxIfonTaskOpen(!isBoxIfonTaskOpen);
    }

    function handleOpenBoxDeleteTask() {
        setIsBoxDeleteTaskOpen(!isBoxDeleteTaskOpen);
    }

    async function updateTask() {
        await taskServices.updateTask({
            id: task._id,
            idProject: task.idProject,
            isCompleted: task.isCompleted,
            token
        });
    }

    return (
        <>
            <div className="task-conteiner">
                <input type="checkbox" onChange={updateTask} className="task-checkbox"
                    id={task._id} tabIndex="1" defaultChecked={task.isCompleted} />
                <label className="task-title" htmlFor={task._id}>
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

            {isBoxIfonTaskOpen && <InfoTask task={task} handleClickClose={handleOpenBoxInfoTask} />}

            {isBoxDeleteTaskOpen && <DeleteTask task={task} handleClickClose={handleOpenBoxDeleteTask} />}
        </>
    );
}

export default Task;