import React from 'react'
import './DefaultLayout.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from "../../pages/index/Index";
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
                        <Index />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default DefaultLayout
