import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    return (
        <section className='flex justify-center items-center' style={{ background: `url(${appointment})` }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl text-primary'>Appointment</h2>
                <h3 className='text-3xl text-white'>Make an Appointment Today</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam dolorum repudiandae odio eos necessitatibus voluptate voluptatum minus iure dolor, beatae nulla fuga omnis! Esse cumque iure culpa facere asperiores?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;