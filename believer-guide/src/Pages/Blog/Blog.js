import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col gap-20 mb-20'>
            <div className='uppercase text-6xl text-black h-60 flex items-center justify-center'>Blog</div>
            <div className='w-full px-2 md:w-2/5 mx-auto text-left'>
                <h1 className='text-3xl font-normal mb-5'>Difference between authorization and authentication?</h1>
                <p className='text-xl'>Authentication is the first step to authorize someone to doing something on the managerial process. Actually Authentication check the that this person is real or not. After that authorization ensure the access to the administraion.</p>
            </div>
            <div className='w-full px-2 md:w-2/5 mx-auto text-left'>
                <h1 className='text-3xl font-normal mb-5'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-xl'>Firebase helps you build and run successful apps. It's backed by Google and loved by app development teams - from startups to global enterprises. There are more alternatives of firbase.. like Parse, Back4App, AWS Amplify, Kuzzle, RxDB and mant more..</p>
            </div>
            <div className='w-full px-2 md:w-2/5 mx-auto text-left'>
                <h1 className='text-3xl font-normal mb-5'>What other services does firebase provide other than authentication?</h1>
                <p className='text-xl'>There are many services which Firebase provides, Most useful of them are:

                    Cloud Firestore
                    Cloud Functions
                    Authentication
                    Hosting
                    Cloud Storage
                    Google Analytics
                    Predictions
                    Cloud Messaging
                    Dynamic Links
                    Remote Config</p>
            </div>
        </div>
    );
};

export default Blog;