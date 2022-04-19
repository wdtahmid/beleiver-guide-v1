import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../hooks/useFirebase/useFirebase';
import { Dropdown } from 'rsuite';
import 'rsuite/styles/index.less';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

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

    const [open, setOpen] = useState(false);



    return (
        <header className='header-container bg-blue-600 py-4'>



            <div className='w-4/5 mx-auto flex flex-col md:justify-between'>

                <div className='flex justify-between md:flex-wrap'>

                    <h1><Link to='/'>BEILEVER GUIDE</Link></h1>
                    <div onClick={() => setOpen(!open)} className="md:hidden flex justify-between">
                        <div>{open ? <XIcon className='w-6 h-6'></XIcon> : <MenuIcon className='w-6 h-6'></MenuIcon>}</div>
                    </div>

                </div>

                <nav className='flex gap-5'>

                    <div className='flex gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/about'>Aboute Me</Link>
                    </div>

                    {user
                        ?
                        <div className='flex gap-3 items-center'>

                            {user.photoURL ? <img className='w-7 h-7 rounded-full' src={user.photoURL} alt="" /> : ''}

                            <Dropdown title="Account">
                                <div style={styles} className='bg-blue-600 text-white tex-left p-2 flex flex-col gap-3'>
                                    <Dropdown.Item><button onClick={logOut}>Sign Out</button></Dropdown.Item>
                                    <Dropdown.Item><Link className='text-left block' to='/profile'>Profile</Link></Dropdown.Item>
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