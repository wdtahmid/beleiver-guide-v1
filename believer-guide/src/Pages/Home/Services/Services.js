import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const [services] = useServices();

    return (
        <div className='services-container py-16 bg-slate-100'>
            <h2 className='my-5 text-4xl font-bold uppercase'>My Services</h2>
            <div className='services grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-4/5 mx-auto'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;