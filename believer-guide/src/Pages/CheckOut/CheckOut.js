import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const CheckOut = () => {

    const [services] = useServices();
    const params = useParams();
    const id = parseInt(params.serviceId);
    const bookedItem = services?.find(service => service.id === id);

    return (
        <div className="checkoute-container w-4/5 mx-auto text-left py-16">
            <h1 className='text-4xl'>Service Detials</h1>
            <div className="checkout grid grid-cols-2">
                <div className='booked-item-details'>
                    <img src={bookedItem?.img} alt="" />
                    <p>{bookedItem?.serviceName}</p>
                </div>
                <div className="checkout-form">
                    <h2>Checkout Form</h2>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;