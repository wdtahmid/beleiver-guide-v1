import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../hooks/useFirebase/useFirebase';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        navigate('/signin')
    }

    return (
        <header className='header-container bg-blue-600 py-4'>
            <div className='w-4/5 mx-auto flex flex-wrap justify-between items-center'>
                <h1>Logo</h1>
                <nav className='flex flex-wrap items-center gap-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>Aboute Me</Link>

                    {user
                        ?
                        <div>
                            <button onClick={logOut}>Sign Out</button>
                            <Link className='ml-3' to='/profile'>Profile</Link>
                        </div>
                        :
                        <div>
                            <Link to='signin'>Sign In</Link>
                        </div>}

                </nav>
            </div>
        </header>
    );
};

export default Header;