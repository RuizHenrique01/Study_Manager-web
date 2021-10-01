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
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFmZm9uc29AZ21haWwuY29tIiwidXNlcmlkIjoiNjBlZWQ5MzUyM2EzMDUwOWNjNWVhZGI4IiwiaWF0IjoxNjMyOTQyODExLCJleHAiOjE2MzMwMjkyMTF9.t1tmM9RTf8rlIOoddOjngDH8DwxphR8D-blpuNrdNiE",
            }
        });

        setProject(data.projects);
    }

    useEffect(() => {

        getProjects();

    }, [isBoxOpen]);

    return (
        <>
            <main className="projects-main">

                {
                    projects.map(result => {
                        return <Project id={result.id} title={result.name} />
                    })
                }

                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen ? <AddProject handleClickClose={handleOpenBox} /> : null}
        </>
    );
};

export default Projects;