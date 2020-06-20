import React from 'react'
import './DefaultLayout.less'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../../pages/home/Home";
import General from "../../pages/general/General";
import Header from "../../components/header/Header";

function DefaultLayout() {
    return (
        <BrowserRouter>
            <div className="DefaultLayout">
                <Switch>
                    <Route path="/general">
                        <Header />
                        <General />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default DefaultLayout
