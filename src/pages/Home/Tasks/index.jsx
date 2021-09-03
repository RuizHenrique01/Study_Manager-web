import React from 'react';
import Task from '~/components/Task';
import ButtonAdd from '~/components/Button_Add';
import './index.css';

const Tasks = () => {
    return (
        <main className="tasks-main">
            <Task />
            <ButtonAdd />
        </main>
    );
}

export default Tasks; 