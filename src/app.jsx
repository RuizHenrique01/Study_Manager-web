import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const App = () => {
    return (
        <Router>
            <Route path={["/", "/login"]} exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path={[
                "/home",
                "/project/:id/tasks"
            ]} exact component={Home} />
            <Route path="/perfil" exact component={Perfil} />
        </Router>
    );
};

export default App;