import React from 'react';
import 'rsuite/styles/index.less';
import user1 from '../../../img/user/user1.png';

const CarouselSlider = () => {
    return (
        <div className='flex flex-col items-center justify-center w-2/5 mx-auto py-32'>
            <img className='w-28 h-28' src={user1} alt="" />
            <p className='font-semibold'>Beliver guide is awsome. He always showde his helping hand. I belive him. Thanks a lot to the Believer Guid to enjoy this awesome journy.</p>
            <h4 className='font-bold'>Anna Lie</h4>

        </div>
    );
};

export default CarouselSlider;