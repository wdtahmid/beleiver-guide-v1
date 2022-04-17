import React from 'react';
import './SingUp.css'

const SignUp = () => {



    const handleSignUp = (event) => {
        event.preventDefault();
    }
    return (
        <div className="signup-container vh-full flex flex-col justify-items-start items-center h-screen">
            <div className="signup pt-20">
                <h2>Please Register</h2>
                <div className="form">
                    <form onSubmit={handleSignUp}>
                        <div className="input-group">
                            <input type="text" name="name" id="name" placeholder='Your Name Here' />
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" id="email" placeholder='Your Email Here' required />
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" id="password" placeholder='Your Password' required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;