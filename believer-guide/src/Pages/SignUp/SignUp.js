import React from 'react';
import './SingUp.css';
import googleIcon from '../../img/incons/google.png';
import facebookIcon from '../../img/incons/facebook.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../hooks/useFirebase/useFirebase';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleSignUp = (event) => {
        event.preventDefault();

        //const useraName = event.target.name.value;
        const useraEmail = event.target.email.value;
        const useraPassword = event.target.password.value;

        createUserWithEmailAndPassword(useraEmail, useraPassword);

    }


    return (
        <div className="signup-container vh-full flex flex-col justify-center items-center h-screen">
            <div className="signup md:w-96 mx-auto">
                <h2 className='text-4xl text-white mb-5'>Please Register</h2>
                <div className="form w-full bg-black bg-opacity-20 p-5 rounded-md">
                    <form onSubmit={handleSignUp} className='flex flex-col gap-3'>
                        <div className="input-group">
                            <input className='w-full p-3 rounded-md border-2 border-yellow-400 text-black' type="text" name="name" id="name" placeholder='Your Name Here' />
                        </div>
                        <div className="input-group">
                            <input className='w-full p-3 rounded-md border-b-2 border-yellow-400 text-black' type="email" name="email" id="email" placeholder='Your Email Here' required />
                        </div>
                        <div className="input-group">
                            <input className='w-full p-3 rounded-md border-b-2 border-yellow-400 text-black' type="password" name="password" id="password" placeholder='Your Password' required />
                        </div>
                        <button className='bg-black text-white uppercase py-3 rounded-md hover:bg-blue-900 hover:text-white' type="submit">Register</button>
                    </form>

                </div>
                <div className="divider grid grid-cols-3 items-center my-3 text-white">
                    <div className=''><hr /></div>
                    <div>OR</div>
                    <div><hr /></div>
                </div>
                <div className="social-signup bg-white bg-opacity-40 rounded-md flex items-center justify-center gap-3 py-2">
                    <button><img className='h-8 w-8' src={googleIcon} alt="" /></button>
                    <button><img className='h-8 w-8' src={facebookIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;