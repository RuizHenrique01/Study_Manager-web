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

    function handleOpenBox() {
        setIsBoxOpen(!isBoxOpen);
    }

    useEffect(() => {
        async function getProjects() {
            const { token } = user_token;

            const response = await project.getProjects({ token });

            setProject(response?.projects);
        }

        getProjects();
    }, [isBoxOpen, user_token]);

    return (
        <>
            <main className="projects-main">
                {
                    projects.map(result => {
                        return <Project key={result._id} project={result} />
                    })
                }
                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen && <AddProject handleClickClose={handleOpenBox} token={user_token.token} />}
        </>
    );
};

export default connect(state => ({ user_token: state }))(Projects);