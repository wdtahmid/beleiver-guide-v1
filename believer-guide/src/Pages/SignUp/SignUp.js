import React, { useState } from 'react';
import './SingUp.css';
import googleIcon from '../../img/incons/google.png';
import facebookIcon from '../../img/incons/facebook.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../hooks/useFirebase/useFirebase';

const SignUp = () => {

    const [passError, setPassError] = useState('');
    const [formError] = useState('User already existing');
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        userPassword,
        loadingPassword,
        errorPassword] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    if (userPassword || userGoogle) {
        navigate('/profile')
    }

    if (loadingPassword || loadingGoogle) {
        return (
            <p>Checking...</p>
        );
    }

    if (errorGoogle) {
        return 'Error with google signin'
    }
    const handleSignUp = async (event) => {
        event.preventDefault();

        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        if (userPassword.length < 8) {
            setPassError('Password should be 8 character or more');
            return;
        }
        await createUserWithEmailAndPassword(userEmail, userPassword);

        event.target.email.value = '';
        event.target.password.value = '';

    }



    return (
        <div className="signup-container vh-full flex flex-col justify-center items-center h-screen">
            <div className="signup md:w-96 mx-auto">
                <h2 className='text-4xl text-white mb-5'>Please Register</h2>
                <div className="form w-full bg-black bg-opacity-50 p-5 rounded-md">
                    <form onSubmit={handleSignUp} className='flex flex-col gap-3'>
                        <div className="input-group">
                            <input className='w-full p-3 rounded-md border-2 border-yellow-400 text-black' type="text" name="name" id="name" placeholder='Your Name Here' />
                        </div>
                        <div className="input-group">
                            <input className='w-full p-3 rounded-md border-b-2 border-yellow-400 text-black' type="email" name="email" id="email" placeholder='Your Email Here' required />
                            <p className='text-red-600 bg-slate-900 rounded-md'>{errorPassword ? formError : ''}</p>
                        </div>
                        <div className="input-group">
                            <input className='w-full p-3 rounded-md border-b-2 border-yellow-400 text-black' type="password" name="password" id="password" placeholder='Your Password' required />
                            <p className='text-red-600 bg-slate-900 rounded-md'>{passError ? passError : ''}</p>
                        </div>
                        <button className='bg-black text-white uppercase py-3 rounded-md hover:bg-blue-900 hover:text-white' type="submit">Register</button>
                    </form>
                    <p className='text-white mt-1'>Already have an account? <Link to='/signin'>Login Here</Link></p>
                </div>
                <div className="divider grid grid-cols-3 items-center my-3 text-white">
                    <div className=''><hr /></div>
                    <div>OR</div>
                    <div><hr /></div>
                </div>
                <div className="social-signup bg-white bg-opacity-40 rounded-md flex items-center justify-center gap-3 py-2">
                    <button onClick={() => signInWithGoogle()}><img className='h-8 w-8' src={googleIcon} alt="" /></button>
                    <button><img className='h-8 w-8' src={facebookIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;