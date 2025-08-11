import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Aos from 'aos';



const LayOuts = () => {

    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default LayOuts;