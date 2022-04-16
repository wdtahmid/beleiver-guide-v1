import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1>Logo</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>Aboute Me</Link>
                <Link to='/signin'>Sign In</Link>
            </nav>
        </header>
    );
};

export default Header;