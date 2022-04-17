import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-container bg-blue-600 py-4'>
            <div className='w-4/5 mx-auto flex flex-wrap justify-between items-center'>
                <h1>Logo</h1>
                <nav className='flex flex-wrap items-center gap-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>Aboute Me</Link>
                    <Link to='/signin'>Sign In</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;