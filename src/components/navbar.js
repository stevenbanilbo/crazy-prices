import React from 'react';
import {  Link } from "react-router-dom";
import logo from '../images/logo.png'

function navbar() {
    return (
    <nav className="bg-black p-5 uppercase flex justify-around text-center"> 
    <Link className=" bg-gray-300 rounded w-20 pr-10 h-10"><img src={logo} alt="logo"/></Link>
    <Link className="text-white hover:text-yellow-200">Menu</Link>
    <Link className="text-white hover:text-yellow-200">About</Link>
    <Link className="text-white hover:text-yellow-200">Contact Us</Link>
  


  </nav>
    );
}

export default navbar;