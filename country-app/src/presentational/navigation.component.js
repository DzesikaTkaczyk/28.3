import React from 'react';
import { Link } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../country.css'

const Navigation = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>
                    <ul className="nav">
                        <li className="subside"><Link to="/countries">Countries</Link></li>
                        <li className="subside"><Link to="/continents">Continents</Link></li>
                        <li className="subside"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;