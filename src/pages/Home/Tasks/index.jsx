import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { TaskServices as task } from '~/modules/task';
import Task from '~/components/Task';
import ButtonAdd from '~/components/Button_Add';
import AddTask from './AddTask';
import './index.css';

const Tasks = ({ user_token }) => {

    const [tasks, setTasks] = useState([]);
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const { id } = useParams();

    function handleOpenBox() {
        setIsBoxOpen(!isBoxOpen);
    }

    useEffect(() => {
        async function getTasks() {
            const { token } = user_token;

            const response = await task.getTasks({
                idProject: id,
                token
            })

            setTasks(response?.tasks);
        }

        getTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBoxOpen]);

    return (
        <>
            <main className="tasks-main">
                {
                    tasks.map(result => {
                        return <Task key={result._id} task={result} token={user_token.token} />
                    })
                }
                <ButtonAdd handleClick={handleOpenBox} />
            </main>
            {isBoxOpen && <AddTask handleClickClose={handleOpenBox} token={user_token.token} id={id} />}
        </>
    );
}

export default connect(state => ({ user_token: state }))(Tasks);