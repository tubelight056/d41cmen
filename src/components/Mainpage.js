import React from 'react';
import Home from "./Home.js";
import Aboutus from './Aboutus.js';
import Explore from './Explore.js';
import Contactus from './Contactus.js'
function Mainpage(props) {
    return (
        <div>
            <Home/>
            <Aboutus/>
            <Explore/>
            <Contactus/>
        </div>
    );
}

export default Mainpage;