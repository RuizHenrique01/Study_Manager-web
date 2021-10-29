import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const App = () => {
    return (
        <Provider store={store}>
            {console.log(persistor.getState())}
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Route path={["/", "/login"]} exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path={[
                        "/home",
                        "/project/:id/tasks"
                    ]} exact component={Home} />
                    <Route path="/perfil" exact component={Perfil} />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;