import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ProjectServices as project } from '~/modules/project';
import Project from '~/components/Project';
import ButtonAdd from '~/components/Button_Add';
import AddProject from './AddProject';
import './index.css';

const Projects = ({ user_token }) => {

    const [projects, setProject] = useState([]);
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const handleOpenBox = () => {
        setIsBoxOpen(!isBoxOpen);
    }

    const getProjects = async () => {
        const { token } = user_token;

        const data = await project.getProjects({ token });
  
        setProject(data.projects);
    }

    useEffect(() => {

        getProjects();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBoxOpen]);

    return (
        <>
            <main className="projects-main">

                {
                    projects.map(result => {
                        return <Project key={result._id} id={result._id} project={result} />
                    }) 
                }

                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen ? <AddProject handleClickClose={handleOpenBox} token={user_token.token} /> : null}
        </>
    );
};

export default connect(state => ({ user_token: state }))(Projects);