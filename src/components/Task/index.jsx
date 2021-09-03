import React from 'react';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import './index.css';

const Task = () => {
    return (
        <div className="task-conteiner">

            <input type="checkbox" className="task-checkbox"
                id="task-chk" tabIndex="1"/>
            <label className="task-title" for="task-chk">
                <span className="task-check" />
                <h3>Tarefa número 1</h3>
            </label>

            <button className="task-button" tabIndex="2">
                <img className="task-icon" src={infoImage} alt="Icone de informações" />
            </button>

            <button className="task-button" tabIndex="3">
                <img className="task-icon" src={crossImage} alt="Icone de informações" />
            </button>

        </div>
    );
}

export default Task;