import React from 'react';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import instance from '~/services/api';
import './index.css';

const Task = ({ title, id, idProject, token, checked}) => {

    const updateTask = async () => {

       await instance.patch("/projects/" + idProject + "/task" + id,{
            isCompleted: !checked
        } ,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).catch(() =>{
            alert('Error updating task, please try again later');
        });
    }

    return (
        <div className="task-conteiner">

            <input type="checkbox" onChange={updateTask} className="task-checkbox"
                id={ id } tabIndex="1" defaultChecked={checked}/>
            <label className="task-title" htmlFor={ id }>
                <span className="task-check" />
                <span>{title}</span>
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