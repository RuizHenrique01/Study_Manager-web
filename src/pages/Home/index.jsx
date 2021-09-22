import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '~/components/Header';
import Projects from './Projects';
import Tasks from './Tasks';

const Home = () => {
    return (
        <Router>
            <Header />
            <Route path="/project/:id/tasks" exact component={Tasks}/>
            <Route path="/home" exact component={Projects}/>
        </Router>
    );
};

export default Home;