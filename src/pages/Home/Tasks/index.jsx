import React, {useState} from 'react';

import Task from '~/components/Task';
import ButtonAdd from '~/components/Button_Add';
import AddTask from './AddTask';
import './index.css';

const Tasks = () => {

    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const handleOpenBox = () =>{
        setIsBoxOpen(!isBoxOpen);
    }

    return (
    <>
        <main className="tasks-main">
            <Task />
            <ButtonAdd handleClick={handleOpenBox}/>
        </main>
        { isBoxOpen ? <AddTask handleClickClose={handleOpenBox}/> : null}
    </>
    );
}

export default Tasks; 