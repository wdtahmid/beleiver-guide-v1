import React from 'react';
import './SingUp.css';
import googleIcon from '../../img/incons/google.png';
import facebookIcon from '../../img/incons/facebook.png';

const SignUp = () => {



    const handleSignUp = (event) => {
        event.preventDefault();
    }
    return (
        <div className="signup-container vh-full flex flex-col justify-items-start items-center h-screen">
            <div className="signup pt-20 w-96 mx-auto">
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