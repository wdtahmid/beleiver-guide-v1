import React from 'react';
import './Banner.css'
const styles = {
    backgroundImage: "url('../../../../../img/background/signupbg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: -1
}

const Banner = () => {
    return (
        <div style={styles} className='banner-container h-96 flex flex-col justify-center items-center'>
            <div className="banner text-white text-5xl">
                <h2 className='font-bold text-6xl'>Believer Guide</h2>
                <p className='text-xl font-normal mt-6'>Put right step on your way!</p>
            </div>
        </div>
    );
};

export default Banner;