import React from 'react';

import Header from '~/components/Header'; 
//import Projects from './Projects';
import Tasks from './Tasks';

const Home = () => {
    return (
        <>
        <Header/>

        <Tasks />
        </>
    );
};

export default Home;