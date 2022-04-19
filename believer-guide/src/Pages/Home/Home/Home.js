import React from 'react';
import Banner from '../Banner/Banner';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CarouselSlider></CarouselSlider>
        </div>
    );
};

export default Home;