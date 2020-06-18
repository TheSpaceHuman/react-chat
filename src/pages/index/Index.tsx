import React from 'react';
import logo from '../../assets/icons/logo.svg';
import './Index.scss';
import { Link } from 'react-router-dom';

function Index() {
    return (
        <div className="Index">
            <div className="Index-content">
                <img src={logo} className="Index-logo" alt="logo" />
                <h1>
                    Glad to welcome you in Reactive Chat
                </h1>
                <Link
                    className="Index-link"
                    to="/general"
                >
                    Go start
                </Link>
            </div>
        </div>
    );
}

export default Index;
