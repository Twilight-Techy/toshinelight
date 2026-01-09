import React from 'react';
import Hero from '../components/home/Hero';
import ServiceSwitcher from '../components/home/ServiceSwitcher';
import AboutTeaser from '../components/home/AboutTeaser';

const Home = () => {
    return (
        <>
            <Hero />
            <ServiceSwitcher />
            <AboutTeaser />
        </>
    );
};

export default Home;
