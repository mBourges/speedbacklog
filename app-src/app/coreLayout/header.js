import React from 'react';
import { Link } from 'react-router';

const Header = ({ appName }) => {
    return (<div className="ui fixed inverted menu">
        <div className="ui container">
            <Link to="/" className="header item">
                <img className="logo" src="assets/images/logo.png" />
                { appName }
            </Link>
            <a href="#" className="item">Home</a>
        </div>
    </div>);
};

export default Header;