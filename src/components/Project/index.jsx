import React from 'react';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import './index.css'

const Project = ({title}) => {
    return (
        <div className="project-conteiner">
            <p className="project-title">{title}</p>

            <button className="project-button">
                <img className="project-icon" src={infoImage} alt="Icone de informações"/>
            </button>

            <button className="project-button">
                <img className="project-icon" src={crossImage} alt="Icone de informações"/>
            </button>
        </div>
    );
};

export default Project;