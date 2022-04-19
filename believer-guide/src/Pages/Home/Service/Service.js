import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, desc, days, price, serviceName } = service;

    const navigate = useNavigate();
    const handleCheckOut = (id) => {
        navigate('/service/' + id)
    }
    return (
        <div className='hover:border hover:border-blue-700 service flex flex-col justify-center items-center gap-3 border py-5 rounded shadow-sm shadow-black-300 bg-white'>
            <img className=' w-96 h-64 mx-auto' src={img} alt="" />
            <h3 className='text-2xl'>{serviceName}</h3>
            <p>{desc}</p>
            <div>
                <p>Days: {days} </p>
                <p>Price: ${price} </p>
            </div>
            <button onClick={() => handleCheckOut(id)} className='hover:bg-blue-900 bg-blue-600 py-1 px-3 text-white uppercase font-semibold'>book this</button>
        </div>
    );
};

export default Service;