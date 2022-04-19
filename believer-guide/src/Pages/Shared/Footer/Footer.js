import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date();
    return (
        <div className='py-9 bg-slate-700 text-white'>
            <h2>Copyright &copy; {year.getFullYear()}. All rights reserved by <Link to='/'> <span className='text-orange-300'>Believer Guid</span></Link></h2>
        </div>
    );
};

export default Footer;