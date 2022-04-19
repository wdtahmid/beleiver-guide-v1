import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {

    const navigate = useNavigate();
    const goToCheckOut = () => {
        navigate('/checkout')
    }

    const [services] = useServices();
    const params = useParams();
    const id = parseInt(params.serviceId);
    const bookedItem = services?.find(service => service.id === id);

    return (
        <div className="service-details-container w-4/5 mx-auto text-center py-16">
            <h1 className='text-4xl mb-5'>Service Detials</h1>
            <div className="service-details">
                <div className='booked-item-details'>
                    <img className='mx-auto w-4/5' src={bookedItem?.img} alt="" />
                    <p className='font-bold text-2xl'>{bookedItem?.serviceName}</p>
                    <p className='font-bold text-2xl'>Days: {bookedItem?.days}</p>
                    <p className='font-bold text-2xl'>Price: ${bookedItem?.price}</p>
                </div>
                <button onClick={goToCheckOut}>Check It Out</button>
            </div>
        </div>
    );
};

export default ServiceDetails;