import React from 'react';
import logo from '../../assets/icons/logo.svg';
import './Home.less';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="Home-wrapper">
            <section className="Home-content">
                <img src={logo} className="Home-logo" alt="logo" />
                <h1>Glad to welcome you in Reactive Chat</h1>
                <Link
                    className="Home-link"
                    to="/general"
                >
                    Go start
                </Link>
            </section>
        </main>
    );
}

export default Home;
