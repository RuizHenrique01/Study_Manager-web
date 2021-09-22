import React, { useState, useEffect } from 'react';
import Project from '~/components/Project';
import ButtonAdd from '~/components/Button_Add';
import AddProject from './AddProject';
import './index.css';

import instance from '~/services/api'

const Projects = () => {

    const [projects, setProject] = useState([]);
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const handleOpenBox = () => {
        setIsBoxOpen(!isBoxOpen);
    }

    const getProjects = async () => {

        const { data } = await instance.get("/projects", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFmZm9uc29AZ21haWwuY29tIiwidXNlcmlkIjoiNjBlZWQ5MzUyM2EzMDUwOWNjNWVhZGI4IiwiaWF0IjoxNjMyMzE3NTQ0LCJleHAiOjE2MzI0MDM5NDR9.C_fKMp81go8pqCqjVN2FAZQ09JT9gkCdwRrSF_nncpk",
                "userId": "60eed93523a30509cc5eadb8"
            }
        });

        setProject(data.projects);
    }

    useEffect(() => {

        getProjects();

    }, []);

    return (
        <>
            <main className="projects-main">

                {
                    projects.map(result => {
                        return <Project title={result.name} />
                    })
                }

                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen ? <AddProject handleClickClose={handleOpenBox} /> : null}
        </>
    );
};

export default Projects;