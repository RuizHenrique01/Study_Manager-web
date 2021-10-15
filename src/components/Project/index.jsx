import React, { useState } from 'react';
import { useHistory } from 'react-router';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import InfoProject from './InfoProject';
import DeleteProject from './DeleteProject';
import './index.css'

const Project = ({ id, project }) => {

    const history = useHistory();
    const [isBoxIfonProjectOpen, setIsBoxIfonProjectOpen] = useState(false);
    const [isBoxDeleteProjectOpen, setIsBoxDeleteProjectOpen] = useState(false);

    const redirectToTasks = () => {
        return history.push('/project/' + id + '/tasks');
    }

    const handleOpenBoxInfoProject = () => {
        setIsBoxIfonProjectOpen(!isBoxIfonProjectOpen);
    }

    const handleOpenBoxDeleteProject = () => {
        setIsBoxDeleteProjectOpen(!isBoxDeleteProjectOpen);
    }

    return (
        <>
            <div className="project-conteiner">
                <h3 className="project-title" onClick={redirectToTasks}>
                    {project.name}
                </h3>

                <button type='button' className="project-button" onClick={handleOpenBoxInfoProject}>
                    <img className="project-icon" src={infoImage} alt="Icone de informações" />
                </button>

                <button type='button' className="project-button" onClick={handleOpenBoxDeleteProject}>
                    <img className="project-icon" src={crossImage} alt="Icone de informações" />
                </button>
            </div>

            {isBoxIfonProjectOpen ? <InfoProject project={project} handleClickClose={handleOpenBoxInfoProject}/> : null}

            {isBoxDeleteProjectOpen ? <DeleteProject project={project} handleClickClose={handleOpenBoxDeleteProject}/> : null}
        </>
    );
};

export default Project;