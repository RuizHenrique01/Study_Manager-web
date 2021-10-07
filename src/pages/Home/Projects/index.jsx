import React, { useState, useEffect } from 'react';
import Project from '~/components/Project';
import ButtonAdd from '~/components/Button_Add';
import AddProject from './AddProject';
import { connect } from 'react-redux';
import './index.css';
import instance from '~/services/api'

const Projects = ({ user_token }) => {

    const [projects, setProject] = useState([]);
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const handleOpenBox = () => {
        setIsBoxOpen(!isBoxOpen);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getProjects = async () => {
        const { token } = user_token;
        
        const { data } = await instance.get("/projects", {
            headers: {
                "Authorization": `Bearer ${token}`     
            }
        });

        setProject(data.projects);
    }

    useEffect(() => {

        getProjects();

    }, [isBoxOpen, getProjects]);

    return (
        <>
            <main className="projects-main">

                {
                    projects.map((result, index) => {
                        return <Project key={index} id={result.id} title={result.name} />
                    })
                }

                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen ? <AddProject handleClickClose={handleOpenBox} /> : null}
        </>
    );
};

export default connect(state => ({ user_token : state }))(Projects);