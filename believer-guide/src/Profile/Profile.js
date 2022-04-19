import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../hooks/useFirebase/useFirebase';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return 'Loading';
    }
    return (
        <div className='text-center py-10'>
            <h2 className='text-2xl mb-10'>Profile</h2>
            <p>Name: {user?.displayName ? user.displayName : 'Name is undefind'}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;