import React from 'react'
import './DefaultLayout.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../../pages/home/Home";
import General from "../../pages/general/General";
import Header from "../../components/header/Header";
import Container from '@material-ui/core/Container';

function DefaultLayout() {
    return (
        <BrowserRouter>
            <div className="DefaultLayout">
                <Switch>
                    <Route path="/general">
                        <Header />
                        <main className="main">
                            <Container>
                                <General />
                            </Container>
                        </main>
                    </Route>
                    <Route path="/">
                        <main className="main">
                            <Home />
                        </main>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default DefaultLayout
