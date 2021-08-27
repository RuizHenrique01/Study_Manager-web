import React from 'react';
import './index.css'
import Header from './Header'; 
import Projects from './Projects';

const Home = () => {
    return (
        <>
        <Header/>

        <Projects />
        <button className="home-button"/>
        </>
    );
};

export default Home;