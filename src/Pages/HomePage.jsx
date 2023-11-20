import React from 'react';
import WNavbar from './../Component/Navbar';
import HeroList from '../Component/HeroList';
import WorkiList from '../Component/WorkiList';
import Stat from '../Component/Stat';
import Subscribe from '../Component/Subscribe';
import Footer from '../Component/Footer';
import FeatureProject from '../Component/FeatureProject';

const HomePage = () => {
    return (
        <div>
            <WNavbar/>
            <HeroList/>
            <WorkiList/>
            <Stat/>
            <FeatureProject/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default HomePage;