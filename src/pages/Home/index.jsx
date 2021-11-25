import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '~/components/Header';
import Perfil from '../Perfil';
import Projects from './Projects';
import Tasks from './Tasks';
import { connect } from 'react-redux';

const Home = ({ user_token }) => {

    return (
        <>
            {user_token.token &&
                <>
                    <Header />
                    <Switch>
                        <Route path="/home">
                            <Projects />
                        </Route>
                        <Route path="/project/:id/tasks">
                            <Tasks />
                        </Route>
                        <Route path="/perfil">
                            <Perfil />
                        </Route>
                    </Switch>
                </>}
            );
        </>);
};

export default connect(state => ({ user_token: state }))(Home);