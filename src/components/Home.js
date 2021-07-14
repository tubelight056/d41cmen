import React from 'react';
import homeimg from './ms_apxwm_512_17986599-removebg-preview.png'

const Home=(props)=>{
    return (
        <div id="home" className="home-body">
            <div className="home-container">
                <div className="home-text" >
                    <h1 className="home-h1">Awesome collection for <span className="span-men"> Men </span> </h1>
                    <p className="home-p"> Explore new trendy collection ,buy it and be <span className="span-trendy" > Trendy </span> </p>
                    <div className="home-btn">
                        <a className="home-gotoinstagram" >Go to instagram</a>
                        <a href="#collection" className="home-explorehere">Explore here</a>
                    </div> 
                </div>
                <div className="home-imgcontainer">
                    <img className="home-img" src={homeimg} />
                </div>
            </div>
        </div>
    );
}

export default Home;