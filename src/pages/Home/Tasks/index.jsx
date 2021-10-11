import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Task from '~/components/Task';
import ButtonAdd from '~/components/Button_Add';
import AddTask from './AddTask';
import './index.css';
import { connect } from 'react-redux';
import instance from '~/services/api';

const Tasks = ({ user_token }) => {

    const [tasks, setTasks] = useState([]);
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const { id } = useParams();

    const handleOpenBox = () => {
        setIsBoxOpen(!isBoxOpen);
    }

    const getTasks = async () => {
        const { token } = user_token;

        await instance.get("/projects/" + id + "/task", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => setTasks(response.data.tasks));
    }

    useEffect(() => {

        getTasks();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBoxOpen]);

    return (
        <>
            <main className="tasks-main">
                {
                    tasks.map(result => {
                        console.log(result);
                        return <Task key={result._id} id={result._id} idProject={ id } title={result.name}
                            token={user_token.token} checked={result.isCompleted} />
                    })
                }
                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen ? <AddTask handleClickClose={handleOpenBox} token={user_token.token} id={id} /> : null}
        </>
    );
}

export default connect(state => ({ user_token: state }))(Tasks);