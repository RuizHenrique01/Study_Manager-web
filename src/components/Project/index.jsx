import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ProjectServices as projectServices } from '~/modules/project';
import infoImage from '~/assets/info.svg';
import crossImage from '~/assets/cross.svg';
import InfoProject from './InfoProject';
import DeleteProject from './DeleteProject';
import './index.css'

const Project = ({ project, token }) => {

    const history = useHistory();
    const [isBoxIfonProjectOpen, setIsBoxIfonProjectOpen] = useState(false);
    const [isBoxDeleteProjectOpen, setIsBoxDeleteProjectOpen] = useState(false);

    function redirectToTasks() {
        return history.push('/project/' + project._id + '/tasks');
    }

    function handleOpenBoxInfoProject() {
        setIsBoxIfonProjectOpen(!isBoxIfonProjectOpen);
    }

    function handleOpenBoxDeleteProject() {
        setIsBoxDeleteProjectOpen(!isBoxDeleteProjectOpen);
    }

    async function deleteProject() {
        await projectServices.deleteProject({ id: project._id, token });
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

            {isBoxIfonProjectOpen ? <InfoProject project={project} handleClickClose={handleOpenBoxInfoProject} token={token} /> : null}

            {isBoxDeleteProjectOpen ? <DeleteProject project={project}
                handleClickClose={handleOpenBoxDeleteProject} handleClick={deleteProject} /> : null}
        </>
    );
};

export default Project;