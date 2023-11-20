import React from 'react';
import WNavbar from './../Component/Navbar';
import Subscribe from './../Component/Subscribe';
import Footer from './../Component/Footer';
import TeamC from './../Component/TeamC';

const TeamPage = () => {
    return (
        <div>
            <WNavbar/>
            <TeamC/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default TeamPage;