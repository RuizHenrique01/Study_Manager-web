import React from 'react';
import Project from '~/components/Project';
import ButtonAdd from '~/components/Button_Add';
import './index.css'

const Projects = () => {
    return (
        <main className="projects-main">
            <Project title="Primeiro Projeto"/>
            <Project title="Segundo Projeto"/>
            <ButtonAdd />
        </main>
    );
};

export default Projects;