import React,{useState} from 'react';
import {Link} from 'react-router-dom';
// import { Ionicons } from '@expo/vector-icons';

function Navbar(props) {
    const [liststatus,setliststatus]=useState(false);
    const onclickHandler=()=>{
        setliststatus(!liststatus);
        console.log(liststatus)
    }
    return (
        <div className="nav-body">
            <div className="nav-container">
                <h1 className="nav-title">
                    D41c_men
                </h1>
                <button className="menu-icon" id="menubtn" onClick={()=>{onclickHandler()}} >...</button>
                <div className={liststatus ? ("nav-listcontainer responsive"):("nav-listcontainer nonresponsive")} >
                    <ul className="nav-ul" >
                        <li className="nav-li"><a href="#home" className="nav-link" >Home</a></li>
                        <li className="nav-li"><a href="#collection" className="nav-link" >Collection</a></li>
                        <li className="nav-li"><a href="#aboutus" className="nav-link" >About us</a></li>
                        <li className="nav-li"><a href="#contactus" className="nav-link" >Contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;