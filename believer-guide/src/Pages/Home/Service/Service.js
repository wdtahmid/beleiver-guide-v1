import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, serviceName } = service;

    const navigate = useNavigate();
    const handleCheckOut = (id) => {
        navigate('/service/' + id)
    }
    return (
        <div className='service border py-5 rounded shadow-sm shadow-black-300 bg-white'>
            <h3 className='text-2xl'>{serviceName}</h3>
            <button onClick={() => handleCheckOut(id)} className='bg-blue-600 py-1 px-3 text-white uppercase font-semibold'>book this</button>
        </div>
    );
};

export default Service;