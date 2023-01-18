import React from 'react';
import Appointment from './MakeAppointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;