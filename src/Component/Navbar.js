import React from "react";
import "./Navbar.scss"
// import { FaUserCircle } from "react-icons/fa";

export var Navbar = ()=>{
    return(
      
        <div class="nav-container">
        <div class="navbar">
            
            <div class="nav-head">  
             <h1>47<sup>th</sup><span class="nav-span">CAFE</span></h1>
            </div>
            
            <div class="links">
     
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Items</a>
                <a href='#'>Contact</a>
                <a href='#'>Service</a>
                <button class="btn">Log In</button>
            </div>
            
        </div>
        </div>   

       
         )
}