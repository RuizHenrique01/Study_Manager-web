import React, { useState } from 'react';
import Project from '~/components/Project';
import ButtonAdd from '~/components/Button_Add';
import AddProject from './AddProject';
import './index.css'

const Projects = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const handleOpenBox = () =>{
        setIsBoxOpen(!isBoxOpen);
    }

    return (
        <>
        <main className="projects-main">
            <Project title="Primeiro Projeto"/>
            <Project title="Segundo Projeto"/>
            <ButtonAdd handleClick={handleOpenBox}/>
        </main>
            {isBoxOpen ? <AddProject handleClickClose={handleOpenBox} /> : null}
        </>
    );
};

export default Projects;