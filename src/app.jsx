import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';

const App = () => {
    return (
        <Router>
            <Route path="/" exact render={Login}/>
            <Route path="/signup" exact render={Signup}/>
        </Router>
    );
};

export default App;