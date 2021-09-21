import React from 'react';
import {Link} from "react-router-dom";
import {useParams, useRouteMatch, useHistory, useLocation} from "react-router-dom";


const Header = () => {
    let match = useRouteMatch();
    let params = useParams();
    let routeMatch = useRouteMatch();
    let history = useHistory();
    let location = useLocation();
    if(false) console.log(match, params, routeMatch, history, location);
    return (
        <nav>
            <ul style={{display: 'flex', listStyleType: 'none', justifyContent: 'space-around'}}>
                <li>
                    <Link to="/react-window">{location.pathname === '/react-window' ? <b>React Window</b> : 'React Window'}</Link>
                </li>
                <li>
                    <Link to="/react-hooks">{location.pathname === '/react-hooks' ? <b>React Hooks</b> : 'react hooks'}</Link>
                </li>
                <li>
                    <Link to="/custom-hooks">{location.pathname === '/custom-hooks' ? <b>Custom Hooks</b> : 'custom hooks'}</Link>
                </li>
                <li>
                    <Link to="/page">{location.pathname === '/page' ? <b>Page with components</b> : 'Page with components'}</Link>
                </li>
                <li>
                    <Link to="/promise">{location.pathname === '/promise' ? <b>Promise</b> : 'Promise'}</Link>
                </li>
                <li>
                    <Link to="/">{location.pathname === '/' ? <b>Home</b> : 'home'}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;