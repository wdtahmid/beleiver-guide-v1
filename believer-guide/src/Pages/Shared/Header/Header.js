import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../hooks/useFirebase/useFirebase';
import { Dropdown } from 'rsuite';
import 'rsuite/styles/index.less';

const styles = {
    position: "absolute",
    textAlign: "left"

};

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        navigate('/signin')
    }
    console.log(user);



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
                        <div className='flex gap-3 items-center'>

                            {user.photoURL ? <img className='w-7 h-7 rounded-full' src={user.photoURL} alt="" /> : ''}

                            <Dropdown title="Account">
                                <div style={styles} className='bg-blue-600 text-white tex-left p-2'>
                                    <Dropdown.Item><button onClick={logOut}>Sign Out</button></Dropdown.Item>
                                    <Dropdown.Item><Link className='ml-3' to='/profile'>Profile</Link></Dropdown.Item>
                                </div>
                            </Dropdown>


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