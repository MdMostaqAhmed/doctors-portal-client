import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride',
            description: '',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity',
            description: '',
            img: cavity,
        },
        {
            _id: 1,
            name: 'Whitening',
            description: '',
            img: whitening,
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={services._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;